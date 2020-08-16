const request = require('request')

const geocode = ( address, callback ) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2FzaGllc2giLCJhIjoiY2tkdWJmcjF6MDV3dzJzbDdpeGI3azUxdCJ9.FpXKKnZS79j95vWUXvdolw&limit=1'
    
    request({url , json: true} , (error, {body} = {} ) =>{
        if(error){
            callback('You have network issue.', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find this location', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
    }

    module.exports = geocode