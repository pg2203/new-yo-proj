var gzippo = require('gzippo');
var express = require('express');
var request = require('request');
var apiUrl = process.env.api_url || 'http://changme/api/';
var app = express();

// Authenticator
app.use(function(req, res, next) {
    var auth;

    // check whether an autorization header was send
    if (req.headers.authorization) {
        // only accepting basic auth, so:
        // * cut the starting "Basic " from the header
        // * decode the base64 encoded username:password
        // * split the string at the colon
        // -> should result in an array
        auth = new Buffer(req.headers.authorization.substring(6), 'base64').toString().split(':');
    }

    // checks if:
    // * auth array exists
    // * first value matches the expected user
    // * second value the expected password
    if (!auth || auth[0] !== 'user' || auth[1] !== 'pass') {
        // any of the tests failed
        // send an Basic Auth request (HTTP Code: 401 Unauthorized)
        res.statusCode = 401;
        // MyRealmName can be changed to anything, will be prompted to the user
        res.setHeader('WWW-Authenticate', 'Basic realm="Authentication"');
        // this will displayed in the browser when authorization is cancelled
        res.end('Unauthorized');
    } else {
        // continue with processing, user was authenticated
        next();
    }
});

app.use('/api', function(req, res) {
  url = apiUrl + req.url;
  console.log('Using api:', url);
  req.pipe(request(url)).pipe(res);
});

app.use(gzippo.staticGzip("" + __dirname ));


app.listen(process.env.VCAP_APP_PORT || 5000);
