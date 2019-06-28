const path = require("path");

// These routes are use to route out he forntend
module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"))
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

}
