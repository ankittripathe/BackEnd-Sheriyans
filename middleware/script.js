// request aane ke badd aur route tak pahuchne se pahle ka process jo hota hai use middleware bolte hai.

// middleware ek aaisa function haijo route se pahle chalta hai, jiska matlab aapke route chalne se pahle agar aap koie kaam karana chaahte ho to middleware kaupyog kiya ja skta hai

// Eska matlab har route chalne se pahle jo chalega o hai middleware.
// Notes: Ek dikkat hai agar middleware chal gaya toh request jam ho jaati hai aur route tak nhi pahuch pati hai.


const express = require('express')
const app = express()

// middle wala function
app.use(function(req, res, next){
    console.log('hello from middleware');
    next();    // jab vi koie kaam app.use me kar rhe hai oha next() chalana compulsary hai.
})

app.use(function(req, res, next){
    console.log('hello from middleware2');
    next();    // jab vi koie kaam app.use me kar rhe hai oha next() chalana compulsary hai.
})

app.get('/', (req, res) => {
  res.send('Hi, Ankit Tripathi Here')
})


app.get('/profile', (req, res) => {
  res.send('Visited My Profile')
})

app.listen(3000)