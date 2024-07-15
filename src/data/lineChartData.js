import { getTextFromStateOptionKey } from '../components/FilterOptionData';

export function smokeRateDataToChartData(data) {
    const lineChartTransformedData = data.reduce((acc, item) => {
      const year = item.year.replace(/b'|'/g, "");
      const state = getTextFromStateOptionKey(item.state);
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
      "id": "TX",
      "data": [{
          "x": "2011",
          "y": 50
      },
      {
          "x": "2012",
          "y": 60
      },
      {
          "x": "2013",
          "y": 70
      },
      {
          "x": "2014",
          "y": 80
      },
      {
          "x": "2015",
          "y": 90
      }]
    },
    {
      "id": "NY",
      "data": [{
          "x": "2011",
          "y": 30
      },
      {
          "x": "2012",
          "y": 25
      },
      {
          "x": "2013",
          "y": 45
      },
      {
          "x": "2014",
          "y": 73
      },
      {
          "x": "2015",
          "y": 82
      }]
    },
    {
      "id": "NJ",
      "data": [{
          "x": "2011",
          "y": 17
      },
      {
          "x": "2012",
          "y": 45
      },
      {
          "x": "2013",
          "y": 65
      },
      {
          "x": "2014",
          "y": 71
      },
      {
          "x": "2015",
          "y": 75
      }]
    },
    {
      "id": "MI",
      "data": [{
          "x": "2011",
          "y": 20
      },
      {
          "x": "2012",
          "y": 80
      },
      {
          "x": "2013",
          "y": 70
      },
      {
          "x": "2014",
          "y": 90
      },
      {
          "x": "2015",
          "y": 90
      }]
    },
    {
      "id": "CA",
      "data": [{
          "x": "2011",
          "y": 32
      },
      {
          "x": "2012",
          "y": 41
      },
      {
          "x": "2013",
          "y": 62
      },
      {
          "x": "2014",
          "y": 82
      },
      {
          "x": "2015",
          "y": 93
      }]
    }
]

export const lineChartData2 = [
  {
    "id": "TX",
    "data": [{
        "x": "2011",
        "y": 50
    },
    {
        "x": "2012",
        "y": 60
    },
    {
        "x": "2013",
        "y": 70
    },
    {
        "x": "2014",
        "y": 80
    },
    {
        "x": "2015",
        "y": 90
    }]
  },
  {
    "id": "NY",
    "data": [{
        "x": "2011",
        "y": 30
    },
    {
        "x": "2012",
        "y": 25
    },
    {
        "x": "2013",
        "y": 45
    },
    {
        "x": "2014",
        "y": 73
    },
    {
        "x": "2015",
        "y": 82
    }]
  },
  {
    "id": "NJ",
    "data": [{
        "x": "2011",
        "y": 17
    },
    {
        "x": "2012",
        "y": 45
    },
    {
        "x": "2013",
        "y": 65
    },
    {
        "x": "2014",
        "y": 71
    },
    {
        "x": "2015",
        "y": 75
    }]
  }
]