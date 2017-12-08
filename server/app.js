require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
var path = require('path');
var sha256 = require('sha256');
var base64 = require('base64url');
// var base64 = require('url-safe-base64');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(8080, function(){
  console.log('listening on port 8080');
})
const config = {
  client_id: process.env.CLIENT_ID,
  redirect_uri: 'http://localhost:8080',
  response_type: 'code',
  code_verifier: 'NTM3MDAyOTk0OGEwMjZmOWE0YTA5MGM3MDVjZGFiOWYyOTVmZGQ3ZmY0OTA2OTVlMTQ3MjFiZWIwN2E1Y2E3YQ',
  code_challenge: base64(sha256('NTM3MDAyOTk0OGEwMjZmOWE0YTA5MGM3MDVjZGFiOWYyOTVmZGQ3ZmY0OTA2OTVlMTQ3MjFiZWIwN2E1Y2E3YQ'))
}
app.get('/authorize', function(req, res) {
  console.log('~~~~~AUTHORIZING')
  const client_id = process.env.CLIENT_ID;
  const redirect_uri = process.env.REDIRECT_URI;
  const endpoint = process.env.AUTHORIZATION_ENDPOINT;
  res.redirect(`https://data.world/oauth/authorize?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}&response_type=code&code_challenge_method=S256&code_challenge=${config.code_challenge}`)
});

app.get('/', function (req, res) {
  var code = req.query.code;
  if (code){
    axios.post(`https://data.world/oauth/access_token?code=${code}&client_id=${config.client_id}&client_secret=${process.env.DATAWORLD_SECRET}&grant_type=authorization_code&code_verifier=${config.code_verifier}`).then((response) =>{
      if (response.data.access_token){
        console.log('response token',response.data.access_token);
      }
      else {
        const errorMessage = response.status.message || 'unknown error';
        // console.log('-------------------------',errorMessage);
      }
    }).catch(err =>{
      console.log('------------------------------',err.response.data)
    })
  }
  res.sendFile(path.resolve('./app/index.html'))
});









app.get('/getdata', (req,res) =>{
  console.log('In server /getdata');
  res.send('hi');
});




// app.use(express.static('./app/app.html'));
// app.get('/',(req,res) => {
//   res.end();
// })
