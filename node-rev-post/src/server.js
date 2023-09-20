// https://chat.openai.com/c/2e41a4e7-5442-4afa-8379-00d67bea7803

const express = require('express');
const app = express();

// To access data sent in the request body, you'll need to use middleware 
// like `express.json()` or `express.urlencoded()` to parse the data.
// app.use(express.json()); // Parse JSON request bodies
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(express.text()); // Parse plain text request bodies

// You can access the HTTP method (GET, POST, PUT, DELETE, etc.) 
// and the URL path of the incoming request using the 
// `req.method` and `req.url` properties, respectively.
// To access HTTP headers, you can use the `req.headers` object, 
// which contains all the headers sent in the request.
// app.get('/example', (req, res) => {
//   console.log(`Request Method: ${req.method}`);
//   console.log(`Request URL: ${req.url}`);
//   const userAgent = req.headers['user-agent'];
//   console.log(`User-Agent Header: ${userAgent}`);
//   res.send('Example Route');
// });

app.get('/hello', (req, res) => {
	res.send("Why, hello there – Franklin D. Roosevelt");
	console.log('Where’s Eleanor?');
});

app.get('/reverse', (req, res) => {
	console.log('We got it backwards');
	let str = req.query.str;
	let rev = [...str].reverse().join('');
	res.send(rev);
});

app.get('/version', (req, res) => {
	console.log('A version of the truth');
	res.send('1.0');
});

app.listen(3000, function () {
	console.log("app glistening on port 3000")
});

app.post('/reverse', (req, res) => {
  const requestBody = req.body;
  console.log('POST Request Body:', requestBody);
  res.send('POST received');
});
