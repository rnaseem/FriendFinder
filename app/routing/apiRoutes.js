var app = require("express");


function friendFinder(latestProfile) {
   var store = [];
   var store2 = [];
   var store3 = [];
   var sum = latestProfile.reduce((partial_sum, a) => partial_sum + a, 0);

   for (let i = 0; i < profiles.length - 1; i++) {
      store.push(profiles[i].scores);
      store.push(profiles[i].name);
   }
   for (let i = 0; i < store.length; i++) {
      if (i % 2 === 0) {
         store2.push(store[i].reduce((partial_sum, a) => partial_sum + a, 0));
      } else {
         store2.push(store[i]);
      }
   }
   for (let i = 0; i < store2.length; i++) {
      if (i % 2 === 0) {
         store3.push(Math.abs(store2[i] - sum));
      } else {
         store3.push(store2[i]);
      }
   }
   console.log(store3);
}

// friendFinder(latestProfile.scores);

/////////////////////////////////////////////////////////////////

module.exports = function (app) {
   app.get("/api/friends", function (req, res) {
      return res.json(profiles);
   });

   app.post("/api/friends", function (req, res) {
      var profile = req.body;

      profiles.push(profile);
      res.json(profile);
   });
}

