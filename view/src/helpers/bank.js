const bankCodeList = [
  {
    key: 'internet_banking_bbl',
    value: 'internet_banking_bbl',
    text: 'ธนาคารกรุงเทพ',
  },
  {
    key: 'internet_banking_ktb',
    value: 'internet_banking_ktb',
    text: 'ธนาคารกรุงไทย',
  },
  {
    key: 'internet_banking_scb',
    value: 'internet_banking_scb',
    text: 'ธนาคารไทยพาณิชย์',
  },
  {
    key: 'internet_banking_bay',
    value: 'internet_banking_bay',
    text: 'ธนาคารกรุงศรีอยุธยา',
  },
]

export const getBanknameFromtext = (name) => {
  return bankCodeList.find((bank) => bank.text === name)
}
