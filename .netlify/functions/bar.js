exports.handler = function (event, context, callback) {
  const bars = [
    'Shamrock Club',
    'Monk\'s',
    'Snickers',
    'Rossi\'s',
    'Green St. Local',
    'Public House',
    'Dugans',
    'Wise Owl',
    'Garbage Bar',
    'Richard\'s',
    'Ceres',
    'Boss Bar'
  ]
  callback(null, {
    statusCode: 200,
    body: bars[parseInt(Math.random() * bars.length)]
  })
}
