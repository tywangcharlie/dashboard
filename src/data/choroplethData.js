import { getKeyFromStateOptionText } from '../components/FilterOptionData';

export function smokeRateDataToChoroplethData(data) {
    const transformedData = data.map(item => ({
        id: getKeyFromStateOptionText(item.id),
        value: item.data.reduce((acc, curr) => acc + curr.y, 0) / item.data.length
      }));
    return transformedData;
}

export const choroplethData = [
    {
        "id": "AL",
        "value": 17.855043674787964
    },
    {
        "id": "AK",
        "value": 19.01267665261731
    },
    {
        "id": "AZ",
        "value": 13.73511744678537
    },
    {
        "id": "AR",
        "value": 18.35762981366877
    },
    {
        "id": "CA",
        "value": 10.799511579873187
    },
    {
        "id": "CO",
        "value": 13.281076693550961
    },
    {
        "id": "CT",
        "value": 12.708766216649765
    },
    {
        "id": "DE",
        "value": 16.10655968338748
    },
    {
        "id": "FL",
        "value": 14.53541383366084
    },
    {
        "id": "GA",
        "value": 14.807865421290618
    },
    {
        "id": "HI",
        "value": 12.97016987630823
    },
    {
        "id": "ID",
        "value": 13.5010941579035
    },
    {
        "id": "IL",
        "value": 14.185756403438742
    },
    {
        "id": "IN",
        "value": 18.179595045835562
    },
    {
        "id": "IA",
        "value": 14.82454943035244
    },
    {
        "id": "KS",
        "value": 15.705635208810623
    },
    {
        "id": "KY",
        "value": 21.64237312556636
    },
    {
        "id": "LA",
        "value": 18.455274452871866
    },
    {
        "id": "ME",
        "value": 15.450104775712301
    },
    {
        "id": "MD",
        "value": 12.65095728313718
    },
    {
        "id": "MA",
        "value": 14.171365050507168
    },
    {
        "id": "MI",
        "value": 16.8214063741595
    },
    {
        "id": "MN",
        "value": 14.7052844987892
    },
    {
        "id": "MS",
        "value": 17.832379994801876
    },
    {
        "id": "MO",
        "value": 19.29215249752879
    },
    {
        "id": "MT",
        "value": 16.914623277028387
    },
    {
        "id": "NE",
        "value": 15.18922795353301
    },
    {
        "id": "NV",
        "value": 16.968102682596015
    },
    {
        "id": "NH",
        "value": 13.576014024889073
    },
    {
        "id": "NJ",
        "value": 13.827381525161195
    },
    {
        "id": "NM",
        "value": 16.001762460839718
    },
    {
        "id": "NY",
        "value": 13.680697498913185
    },
    {
        "id": "NC",
        "value": 17.051510477425097
    },
    {
        "id": "ND",
        "value": 15.843508813581067
    },
    {
        "id": "OH",
        "value": 18.363825990991593
    },
    {
        "id": "OK",
        "value": 19.016412934639096
    },
    {
        "id": "OR",
        "value": 13.791888534832555
    },
    {
        "id": "PA",
        "value": 17.462116511499875
    },
    {
        "id": "RI",
        "value": 14.09971605376452
    },
    {
        "id": "SC",
        "value": 16.80260473778702
    },
    {
        "id": "SD",
        "value": 16.998996538637
    },
    {
        "id": "TN",
        "value": 19.572143128579263
    },
    {
        "id": "TX",
        "value": 13.367396396106292
    },
    {
        "id": "UT",
        "value": 8.570620269005195
    },
    {
        "id": "VT",
        "value": 13.613070294228274
    },
    {
        "id": "VA",
        "value": 15.668773778789287
    },
    {
        "id": "WV",
        "value": 23.11626016224966
    },
    {
        "id": "WI",
        "value": 16.19918738193489
    },
    {
        "id": "WY",
        "value": 15.206388690084287
    }
]