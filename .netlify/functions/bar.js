exports.handler = function (event, context, callback) {
  const bars = [
    'Shamrock Club',
    'Monk\'s',
    'Snickers',
    'Rossi\'s'
  ]
  callback(null, {
    statusCode: 200,
    body: bars[parseInt(Math.random() * bars.length)]
  })
}
