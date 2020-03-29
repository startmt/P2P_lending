export const mapInterestToObject = (result) => {
  return {
    interest: result['allInterest'],
    fee: result['fee'],
  }
}
