exports.handler = (even, context, callback) => {
    return {
        statusCode: 200,
        body: JSON.stringify({msg: 'Hello World'}),
    }
}