exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: 'hello world'
    })
  }
}