import { getTextFromStateOptionKey, getTextFromEduOptionKey } from '../components/FilterOptionData';

export function kdRateDataToChartData(data) {
  const groupedByState = {};
  // Group data by state
  data.forEach(({edu_level, kd_rate, state}) => {
    state = getTextFromStateOptionKey(state);
    if (!groupedByState[state]) {
        groupedByState[state] = {};
    }
    groupedByState[state][getTextFromEduOptionKey(edu_level)] = parseFloat(kd_rate.toFixed(2));
  });
  // Transform each group into the desired format
  const resultArray = Object.keys(groupedByState).map(state => {
      const eduLevels = groupedByState[state];
      return {
          state,
          ...eduLevels
      };
  });
  return resultArray;
} 

export const barChartData = [
  {
      "state": "6",
      "Did not graduate High School": 0.44,
      "Graduated High School": 0.66,
      "Attended College or Technical School": 0.94,
      "Graduated from College or Technical School": 1.16,
      "Don’t know/Not sure/Missing": 0.04
  },
  {
      "state": "26",
      "Did not graduate High School": 0.33,
      "Graduated High School": 1.42,
      "Attended College or Technical School": 1.17,
      "Graduated from College or Technical School": 1.19,
      "Don’t know/Not sure/Missing": 0.02
  },
  {
      "state": "36",
      "Did not graduate High School": 0.4,
      "Graduated High School": 0.7,
      "Attended College or Technical School": 0.65,
      "Graduated from College or Technical School": 0.85,
      "Don’t know/Not sure/Missing": 0.02
  },
  {
      "state": "48",
      "Did not graduate High School": 0.7,
      "Graduated High School": 1.02,
      "Attended College or Technical School": 1.05,
      "Graduated from College or Technical School": 1.1,
      "Don’t know/Not sure/Missing": 0.02
  }
]

  export const barChartData2 = [
    {
      "state": "AD",
      "hot dog": 109,
      "hot dogColor": "hsl(330, 70%, 50%)",
      "burger": 179,
      "burgerColor": "hsl(24, 70%, 50%)",
      "sandwich": 112,
      "sandwichColor": "hsl(186, 70%, 50%)",
      "kebab": 48,
      "kebabColor": "hsl(131, 70%, 50%)",
      "fries": 70,
      "friesColor": "hsl(64, 70%, 50%)",
      "donut": 138,
      "donutColor": "hsl(307, 70%, 50%)"
    },
    {
      "state": "AE",
      "hot dog": 31,
      "hot dogColor": "hsl(28, 70%, 50%)",
      "burger": 195,
      "burgerColor": "hsl(253, 70%, 50%)",
      "sandwich": 124,
      "sandwichColor": "hsl(297, 70%, 50%)",
      "kebab": 134,
      "kebabColor": "hsl(339, 70%, 50%)",
      "fries": 110,
      "friesColor": "hsl(142, 70%, 50%)",
      "donut": 109,
      "donutColor": "hsl(140, 70%, 50%)"
    },
    {
      "state": "AF",
      "hot dog": 6,
      "hot dogColor": "hsl(70, 70%, 50%)",
      "burger": 181,
      "burgerColor": "hsl(112, 70%, 50%)",
      "sandwich": 29,
      "sandwichColor": "hsl(127, 70%, 50%)",
      "kebab": 182,
      "kebabColor": "hsl(355, 70%, 50%)",
      "fries": 162,
      "friesColor": "hsl(117, 70%, 50%)",
      "donut": 86,
      "donutColor": "hsl(245, 70%, 50%)"
    },
    {
      "state": "AG",
      "hot dog": 157,
      "hot dogColor": "hsl(42, 70%, 50%)",
      "burger": 147,
      "burgerColor": "hsl(295, 70%, 50%)",
      "sandwich": 149,
      "sandwichColor": "hsl(180, 70%, 50%)",
      "kebab": 13,
      "kebabColor": "hsl(326, 70%, 50%)",
      "fries": 49,
      "friesColor": "hsl(195, 70%, 50%)",
      "donut": 146,
      "donutColor": "hsl(106, 70%, 50%)"
    },
    {
      "state": "AI",
      "hot dog": 134,
      "hot dogColor": "hsl(99, 70%, 50%)",
      "burger": 51,
      "burgerColor": "hsl(269, 70%, 50%)",
      "sandwich": 158,
      "sandwichColor": "hsl(118, 70%, 50%)",
      "kebab": 35,
      "kebabColor": "hsl(129, 70%, 50%)",
      "fries": 78,
      "friesColor": "hsl(192, 70%, 50%)",
      "donut": 143,
      "donutColor": "hsl(36, 70%, 50%)"
    }
  ]
