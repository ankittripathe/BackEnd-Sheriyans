// npm => node package manager

// npm ek jagah hai jaha par khoob saare packages milte hai.
// bani banaai cheejein/features kehlaate hai packages.

// npm = packages ka playstore | package = files of codes

// npm se kuch install karna => npm i

/*******************************************/
//  Example.1 With one-liner-joke
// installation:-  npm i one-liner-joke

// usage:-
var oneLinerJoke = require('one-liner-joke'); 
console.log(oneLinerJoke.getRandomJoke())

// Example.2  figlet (art)
// installation:- npm install figlet

// usage:-
var figlet = require("figlet");

figlet("Ankit", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});



