const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=191210a66fe6ff4702303acce025f85f&query='+ latitude +','+ longitude +'&units=m'
    
    request({url , json: true} , (error, {body} = {} ) =>{
        if(error){
            callback('You have network issue.', undefined)
        } else if(body.error) {
            callback('Unable to find this location', undefined)
        }else{
            callback(undefined, 'Current temperature is ' + body.current.temperature + ' but it feels like ' + body.current.feelslike)
        }
    })
    }

    module.exports = forecast