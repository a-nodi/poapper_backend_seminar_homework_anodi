const http = require('http')
const moment = require('moment')

current_date = moment().format('YYYY-MM-DD kk:mm:ss')

let _port = 8080
http.createServer((req, res) => {
  res.write('<h1>'+ current_date +'</h1>');
  res.end()
}).listen(_port, () => {
  console.log("server is running on " + _port + " port.")
})