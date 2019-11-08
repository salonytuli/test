const request = require('request')

const reqData = (req, res) => {
    request(`https://api.ebird.org/v2/ref/hotspot/geo?lat=${req.query.lat}&lng=${req.query.long}&fmt=json`,
        {json: true}, (err, response, body) => {
            res.send(body)
        })
}
module.exports = reqData
