import { getTextFromStateOptionValue } from '../components/FilterOptionData';

export function smokeRateDataToChartData(data) {
    const lineChartTransformedData = data.reduce((acc, item) => {
      const year = item.year.replace(/b'|'/g, "");
      const state = getTextFromStateOptionValue(item.state);
      const smoke_rate = item.smoke_rate;
      const existingStates = acc.filter(obj => obj.id === state);
    
      if (existingStates.length === 0) {
        acc.push({ id: state, data: [{ x: year, y: smoke_rate }] });
      } else {
        existingStates[0].data.push({ x: year, y: smoke_rate });
      }
      return acc;
    }, []);
    return lineChartTransformedData;
}

export const lineChartData = [
    {
        "id": "California",
        "data": [
            {
                "x": "2011",
                "y": 11.398100316613897
            },
            {
                "x": "2012",
                "y": 11.200329421453572
            },
            {
                "x": "2013",
                "y": 10.62461992876379
            },
            {
                "x": "2014",
                "y": 10.732062644166566
            },
            {
                "x": "2015",
                "y": 10.042445588368103
            }
        ]
    },
    {
        "id": "Michigan",
        "data": [
            {
                "x": "2011",
                "y": 18.101185627658612
            },
            {
                "x": "2012",
                "y": 17.477855033812745
            },
            {
                "x": "2013",
                "y": 16.869169867523713
            },
            {
                "x": "2014",
                "y": 15.301902398676592
            },
            {
                "x": "2015",
                "y": 16.35691894312584
            }
        ]
    },
    {
        "id": "New Jersey",
        "data": [
            {
                "x": "2011",
                "y": 14.808554898264317
            },
            {
                "x": "2012",
                "y": 14.497811052598186
            },
            {
                "x": "2013",
                "y": 14.328402808904826
            },
            {
                "x": "2014",
                "y": 12.867111417836055
            },
            {
                "x": "2015",
                "y": 12.635027448202585
            }
        ]
    },
    {
        "id": "New York",
        "data": [
            {
                "x": "2011",
                "y": 15.681965093729799
            },
            {
                "x": "2012",
                "y": 14.521452145214521
            },
            {
                "x": "2013",
                "y": 13.297694620781824
            },
            {
                "x": "2014",
                "y": 12.16908000585052
            },
            {
                "x": "2015",
                "y": 12.733295628989254
            }
        ]
    },
    {
        "id": "Texas",
        "data": [
            {
                "x": "2011",
                "y": 14.522378089512358
            },
            {
                "x": "2012",
                "y": 14.558210918658189
            },
            {
                "x": "2013",
                "y": 13.42189647274393
            },
            {
                "x": "2014",
                "y": 11.981835874148556
            },
            {
                "x": "2015",
                "y": 12.35266062546842
            }
        ]
    }
]