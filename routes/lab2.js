var express = require("express");
var router = express.Router();

//GET lab2
router.get('/', function (req, res) {

    //Error checks
    if (!(req.query.method && req.query.x && req.query.y)) {
        Console.log('please provide method, x and y queries');

    } else {
        //storing values 
        var method = req.query.method;
        var x = parseInt(req.query.x);
        var y = parseInt(req.query.y);
        var result = 0; 
        var operator = "";

        if (method == "add") {

            result = x + y;
            operator = "+";

        } else if (method == "subtract") {

            result = x - y;
            operator = "-";

        } else if (method == "multiply") {

            result = x * y;
            operator = "*";

        } else if (method == "divide") {
            result = x / y;
            operator = "/";
        }

        res.send("Result output is = " + x + operator + y + " = " + result);
    }
    
})

module.exports = router;