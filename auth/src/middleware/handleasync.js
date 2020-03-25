export function to(promise) {
  return promise.then((data) => {
    return {
      error: data.error,
      result: data.result,
    }
  })
}
