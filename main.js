var express = require('express')    //Load express module with `require` directive
var app = express() 
 
//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello Welcome in iauro family')
})
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
