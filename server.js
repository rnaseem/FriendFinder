var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join((__dirname + "app/public"))));


require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


app.listen(PORT, function () {
    console.log(`Server Listening at http://localhost:${PORT}`)
});