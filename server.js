var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/app/css"));
app.use(favicon(path.join(__dirname, "/app/public/my_ir_favicon.png")));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


app.listen(PORT, function () {
    console.log(`Server Listening at http://localhost:${PORT}`)
});