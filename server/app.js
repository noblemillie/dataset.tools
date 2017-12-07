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
  code_verifier: 'g0KGoCuzBjaEYmbIHdci2UGoeCmp7uBRnJrbESi5nXp1FiBayGySC4bJiqNVWiAb',
  code_challenge: base64(sha256('g0KGoCuzBjaEYmbIHdci2UGoeCmp7uBRnJrbESi5nXp1FiBayGySC4bJiqNVWiAb'))
}
app.get('/authorize', function(req, res) {
  console.log('-----------------------',config.code_challenge)
  console.log('~~~~~AUTHORIZING')
  const client_id = process.env.CLIENT_ID;
  const redirect_uri = process.env.REDIRECT_URI;
  const endpoint = process.env.AUTHORIZATION_ENDPOINT;
  res.redirect(`https://data.world/oauth/authorize?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}&response_type=code&code_challenge_method=S256&code_challenge=${config.code_challenge}`)
});

app.get('/', function (req, res) {
  var code = req.query.code;
  // console.log('code',code);
  if (code){
    axios.post(`https://data.world/oauth/access_token?code=${code}&client_id=${config.client_id}&client_secret=${process.env.DATAWORLD_SECRET}&grant_type=authorization_code&code_verifier=${config.code_verifier}`).then((response) =>{
      console.log('response',response)
      if (response.data.access_token){
        console.log('response token',response.data.access_token);
      }
      // else {
      //   const errorMessage = response.data.message || 'unknown error';
      //   console.log('errorMessage',errorMessage);
      // }
    })
  }
  res.sendFile(path.resolve('./app/index.html'))
});



// app.use(express.static('./app/app.html'));
// app.get('/',(req,res) => {
//   res.end();
// })
