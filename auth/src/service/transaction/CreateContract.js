import moment from 'moment'
export default async (request) => {
  const currentDate = moment([2010, 0, 31])
  const contract = []
  contract.push({
    date: currentDate,
  })
  const { loanTenor, amount, interestRate } = request
  const net = (amount + (amount * interestRate) / 100) / loanTenor
  for (let i = 1; i < loanTenor; i++) {
    let date = currentDate.add(30, 'days').toDate()
    contract.push({ date, amount: net })
  }
  return contract
}
