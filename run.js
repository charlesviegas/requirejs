var express = require("express"),
    app = express();
app.use(express.static(__dirname + "/src"));
app.listen(3000, function () {
    console.log("O servidor está no ar.");
});