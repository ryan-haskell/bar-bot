import axios from 'axios'
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

exports.handler = function (event, context, callback) {
  const bar = bars[parseInt(Math.random() * bars.length)]
  try {
    const payload = JSON.parse(event.body || '{}')
    if (payload.event.type === "app_mention") {
      console.log('Get mentioned, bro.')
    }
  } catch (e) {
    console.log('Something ain\'t rite.', e)
  }

  callback(null, {
    statusCode: 200,
    body: bar
  })
}
