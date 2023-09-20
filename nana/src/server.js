const express = require('express');
const app = express();

app.get('/', (req,res)=>{
	res.send("Welcome to my awful app!");
});

app.listen(3000, function () {
	console.log("app glistening on port 3000")
});
