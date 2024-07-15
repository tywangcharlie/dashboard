import functions_framework
from google.cloud import bigquery
from flask import jsonify
from functools import cache

@functions_framework.http
@cache
def getReport(request):
    """HTTP Cloud Function.
    Args:
        request (flask.Request): The request object.
        <https://flask.palletsprojects.com/en/1.1.x/api/#incoming-request-data>
    Returns:
        The response text, or any set of values that can be turned into a
        Response object using `make_response`
        <https://flask.palletsprojects.com/en/1.1.x/api/#flask.make_response>.
    """
    ##### CORS
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }
        return ("", 204, headers)
    headers = {
        'Access-Control-Allow-Origin': '*',
    }
    # Get Request
    request_json = request.get_json(silent=True)

    # Extract information from the payload
    payload = request_json.get('payload', {})
    year_start = payload.get('year', {}).get('start')
    year_end = payload.get('year', {}).get('end')
    states = payload.get('states', [])
    ages = payload.get('ages', [])

    # Compose smoke rate query
    year_start_b = f"b'{year_start}'"
    year_end_b = f"b'{year_end}'"
    # Convert states and ages to strings for inclusion in SQL query
    states_str = ', '.join([str(state) for state in states])
    ages_str = ', '.join([str(age) for age in ages])
    # Construct the parameterized SQL query
    smoke_query = f"""
        SELECT state, year, SUM(smoke_count) * 100 / SUM(base_count) AS smoke_rate
        FROM `med-umich.brfs.smoke_count`
        WHERE
        state IN ({states_str})
        AND year BETWEEN \"{year_start_b}\" AND \"{year_end_b}\"
        AND age IN ({ages_str})
        GROUP BY state, year
        ORDER BY state, year ASC
    """ 
    print(smoke_query)

    # Compose kd rate query
    # Construct the parameterized SQL query
    kd_query = f"""
        select a.state, a.edu_level, a.kd_count * 100 /b.base_count as kd_rate 
        from 
        (SELECT _STATE as state, _EDUCAG as edu_level, sum(case when CHCKIDNY = 1 then 1 else 0 end) as kd_count
        FROM `med-umich.brfs.smoke_kd_view`
        WHERE 
        _STATE in ({states_str})
        AND IYEAR BETWEEN \"{year_start_b}\" AND \"{year_end_b}\"
        AND _AGE_G IN ({ages_str})
        group by _STATE, _EDUCAG) as a
        join 
        (SELECT _STATE as state, count(*) as base_count
        FROM `med-umich.brfs.smoke_kd_view`
        WHERE 
        _STATE in ({states_str})
        AND IYEAR BETWEEN \"{year_start_b}\" AND \"{year_end_b}\"
        AND _AGE_G IN ({ages_str})
        group by _STATE) as b on a.state = b.state
        order by a.state, a.edu_level
    """ 
    print(kd_query)
    
    ##### BQ Query
    client = bigquery.Client("med-umich")
    query_job = client.query_and_wait(smoke_query)
    # results = query_job.result()
    smoke_df = query_job.to_dataframe()
    smoke_json_obj = smoke_df.to_dict(orient='records')
    print(smoke_json_obj)

    query_job = client.query_and_wait(kd_query)
    # results = query_job.result()
    kd_df = query_job.to_dataframe()
    kd_json_obj = kd_df.to_dict(orient='records')
    print(kd_json_obj)

    response_json_obj = {
        "smoke_rate": smoke_json_obj,
        "kd_rate": kd_json_obj
    }

    return (response_json_obj, 200, headers)

