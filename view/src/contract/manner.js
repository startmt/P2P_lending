export const mapMannerToObject = (result) => {
  return {
    id: result['id'],
    firstname: result['firstname'],
    lastname: result['lastname'],
    score: result['score'],
  }
}
