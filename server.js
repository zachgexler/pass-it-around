// require packages/dependacies

require("express");

console.log(require("express"))

const express = require("express");

// initialize the express application

const app = express();

//define routes
// 99 Bottles of Redbull
//http://localhost:3000
// I had help from internet and friends. It works, but I don't understand the jQuery, or how it's working or even where it's pulling from.

app.get("/", function(req, res)  {
    res.send(`<h3>99 Bottles of redbull on the wall</h3>
      <a href ="/98">Take one down, pass it around</a>`);
  });
  
  app.get("/:numOfBottles", function(req, res) {
    let bottleNumbers = req.params.numOfBottles;
    if (bottleNumbers > 0) {
      res.send(`<h3>${bottleNumbers} Bottles of redbull on the wall</h3>
          <a href ="/${bottleNumbers - 1}">Take one down, pass it around</a>`);
    } else {
      res.send(`No more redbull! <a href ="/">Please start over</a>`);
    }
  });
  

app.listen(3000, function(){
    console.log("express is listening for requests from the browser")
})