const request = require("request")

const forecast = (longitude, latitude, callback) => {
    const url = "https://api.darksky.net/forecast/6b0513928d30cc081cd9f68a11a6b46e/" + longitude + "," + latitude + "?units=si&lang=pt"
 
    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback("Unable to connect to server service!", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " Actualmente, temperatura de: " + body.currently.temperature + " graus Cº em " + body.timezone +
            " Probabilidade de chuva de: " + body.currently.precipProbability * 100 + "%")
        }
    })
}

module.exports = forecast