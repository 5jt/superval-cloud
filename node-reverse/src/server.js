const express = require('express');
const app = express();

app.get('/hello', (req,res)=>{
	res.send("It is not for us to greet each other or say goodbye – Zbigniew Herbert");
	console.log('We live on archipelagos.');
});

app.get('/reverse', (req,res)=>{
	console.log('We got it backwards');
	let str = req.query.str;
	let rev = [...str].reverse().join('');
	res.send(rev);
});

app.get('/version', (req,res)=>{
	console.log('A version of the truth');
	res.send('The current version of SuperVal is 9.39.');
});

app.listen(3000, function () {
	console.log("app glistening on port 3000")
});
