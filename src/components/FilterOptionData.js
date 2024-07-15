export const stateOptions = [
// _STATE
  { key: 'AL', value: '1', text: 'Alabama' },
  { key: 'AK', value: '2', text: 'Alaska' },
  { key: 'AZ', value: '4', text: 'Arizona' },
  { key: 'AR', value: '5', text: 'Arkansas' },
  { key: 'CA', value: '6', text: 'California' },
  { key: 'CO', value: '8', text: 'Colorado' },
  { key: 'CT', value: '9', text: 'Connecticut' },
  { key: 'DE', value: '10', text: 'Delaware' },
  { key: 'FL', value: '12', text: 'Florida' },
  { key: 'GA', value: '13', text: 'Georgia' },
  { key: 'HI', value: '15', text: 'Hawaii' },
  { key: 'ID', value: '16', text: 'Idaho' },
  { key: 'IL', value: '17', text: 'Illinois' },
  { key: 'IN', value: '18', text: 'Indiana' },
  { key: 'IA', value: '19', text: 'Iowa' },
  { key: 'KS', value: '20', text: 'Kansas' },
  { key: 'KY', value: '21', text: 'Kentucky' },
  { key: 'LA', value: '22', text: 'Louisiana' },
  { key: 'ME', value: '23', text: 'Maine' },
  { key: 'MD', value: '24', text: 'Maryland' },
  { key: 'MA', value: '25', text: 'Massachusetts' },
  { key: 'MI', value: '26', text: 'Michigan' },
  { key: 'MN', value: '27', text: 'Minnesota' },
  { key: 'MS', value: '28', text: 'Mississippi' },
  { key: 'MO', value: '29', text: 'Missouri' },
  { key: 'MT', value: '30', text: 'Montana' },
  { key: 'NE', value: '31', text: 'Nebraska' },
  { key: 'NV', value: '32', text: 'Nevada' },
  { key: 'NH', value: '33', text: 'New Hampshire' },
  { key: 'NJ', value: '34', text: 'New Jersey' },
  { key: 'NM', value: '35', text: 'New Mexico' },
  { key: 'NY', value: '36', text: 'New York' },
  { key: 'NC', value: '37', text: 'North Carolina' },
  { key: 'ND', value: '38', text: 'North Dakota' },
  { key: 'OH', value: '39', text: 'Ohio' },
  { key: 'OK', value: '40', text: 'Oklahoma' },
  { key: 'OR', value: '41', text: 'Oregon' },
  { key: 'PA', value: '42', text: 'Pennsylvania' },
  { key: 'RI', value: '44', text: 'Rhode Island' },
  { key: 'SC', value: '45', text: 'South Carolina' },
  { key: 'SD', value: '46', text: 'South Dakota' },
  { key: 'TN', value: '47', text: 'Tennessee' },
  { key: 'TX', value: '48', text: 'Texas' },
  { key: 'UT', value: '49', text: 'Utah' },
  { key: 'VT', value: '50', text: 'Vermont' },
  { key: 'VA', value: '51', text: 'Virginia' },
  { key: 'WA', value: '52', text: 'Washington' },
  { key: 'WV', value: '54', text: 'West Virginia' },
  { key: 'WI', value: '55', text: 'Wisconsin' },
  { key: 'WY', value: '56', text: 'Wyoming' },
  { key: 'GU', value: '66', text: 'Guam' },
  { key: 'PR', value: '72', text: 'Puerto Rico' },
];

export function getTextFromStateOptionKey(key) {
  const stateOption = stateOptions.find(option => option.value === key.toString());
  return stateOption.text
}

export const ageOptions = [
    //_AGE_G
  { key: '1', text: '18-24', value: '1' },
  { key: '2', text: '25-34', value: '2' },
  { key: '3', text: '35-44', value: '3' },
  { key: '4', text: '45-54', value: '4' },
  { key: '5', text: '55-64', value: '5' },
  { key: '6', text: '65 or older', value: '6' },
];

export function getTextFromAgeOptionKey(key) {
  const ageOption = ageOptions.find(option => option.value === key.toString());
  return ageOption.text
}

export const eduOptions = [
  //_EDUCAG
  { key: '1', text: 'Did not graduate High School', value: '1' },
  { key: '2', text: 'Graduated High School', value: '2' },
  { key: '3', text: 'Attended College or Technical School', value: '3' },
  { key: '4', text: 'Graduated from College or Technical School', value: '4' },
  { key: '9', text: 'Don’t know/Not sure/Missing', value: '9' },
];

export function getTextFromEduOptionKey(key) {
  const eduOption = eduOptions.find(option => option.value === key.toString());
  return eduOption.text
}