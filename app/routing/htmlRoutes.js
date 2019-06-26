const path = require("path");
const friends = require("../data/friends");


module.exports = function (app) {


    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public.home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
}
//     //Respond with the api call
//     app.get("/api/friends", function (req, res) {
//         return res.json(friends);
//     });

//     app.get("*", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/home.html"));
//     });

// }
