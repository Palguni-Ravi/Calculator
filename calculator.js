const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post('/',function(req,res){
    var num1 = Number(req.body.no1);
    var num2 = Number(req.body.no2);
    var num3 = num1 + num2;
    res.send("The result of addition is "+num3);
});
app.get('/bmicalculator',function(req,res){
    // console.log(__dirname);
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post('/bmicalculator', function(req,res){
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    var bmi = w/(h*h);
    res.send("Your BMI is "+bmi);
});


app.listen(3000,function(){
    console.log("Server started on the port 3000.");
});