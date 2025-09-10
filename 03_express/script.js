// express framework for node.js
// express ka use case => routing
// routing => GET POST   PUT PATCH DELETE

// https://www.facebook.com/profile/ankit/like/goodboyisthereforfff/dd
// /profile => route
// /ankit => Router
// /like => route

// GET route(url) me data dikhega.
// POST route(url) me data nhi dikhega.

// twitter.com
// https://www.facebook.com     // bydefault / route pe hote hai par dikhta nhi hai.

// Express usage
// const Chacha = require('express')
const express = require('express')

const app = express()

app.get('/', function (req, res) {     
  res.send('Hello Jee Kaise ho Sare')
})

// profile
app.get('/profile', function (req, res) {     
  res.send('hello form profile')
})

// like
app.get('/like', function (req, res) {     
  res.send('you like the video')
})

app.listen(3000);

// npm i nodemon -g => hamesa ke liye install ho gaya
// nodemon .\scripts.js => server update hota rhega band open nhi karna padega.

