export const mapUserToObject = (result) => {
  return {
    id: result['id'],
    address: result['manner'],
    withdrawn: result['withdrawn'],
    evidence: result['evidence'],
  }
}

export const mapUserDetailToObject = (result) => {
  return {
    score: result[0],
    id: result[1],
    firstname: result[2],
    lastname: result[3],
    state: result[4],
  }
}

export const mapContractListToObject = (result) => {
  return {
    date: result['date'],
    amount: result['amount'],
    isPaid: result['isPaid'],
    evidence: result['evidence'],
    paidDate: result['paidDate'],
  }
}

export const mapLendingContractToObject = (result) => {
  return {
    fee: result['fee'],
    amount: result['amount'],
  }
}
