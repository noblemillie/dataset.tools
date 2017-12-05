var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(8080, function(){
  console.log('listening on port 8080');
})



var path = require('path')
app.get('/', function (req, res) {
  res.sendFile(path.resolve('./app/index.html'))
});





// app.use(express.static('./app/app.html'));
// app.get('/',(req,res) => {
//   res.end();
// })
