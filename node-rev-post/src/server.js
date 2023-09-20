// https://chat.openai.com/c/2e41a4e7-5442-4afa-8379-00d67bea7803

const express = require('express');
const fs = require('fs/promises'); // Using the Promises version of the fs module
const app = express();
const my_version = '2.0'
// https://stackoverflow.com/questions/7790811/how-do-i-put-variables-inside-javascript-strings

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
	res.send("Hello sailor");
	console.log('Where’d you get him from?');
});

app.get('/reverse', (req, res) => {
	console.log('We got it backwards');
	let str = req.query.str;
	let rev = [...str].reverse().join('');
	res.send(rev);
});

app.get('/version', (req, res) => {
	console.log('Another version of the truth');
	res.send(`${{my_version}}`);
});

app.listen(3000, function () {
	console.log(`Version ${my_version} listening on port 3000`)
});

app.post('/reverse', async (req, res) => {
  const requestBody = req.body;
  
  try {
    // Step 1: Write the received string to input.txt
    await fs.writeFile('input.txt', requestBody);
    console.log('Received string written to input.txt');
    
    // Step 2: Read input.txt
    const inputText = await fs.readFile('input.txt', 'utf-8');
    
    // Step 3: Reverse the string
    const reversedText = [...inputText].reverse().join('');
    
    // Step 4: Write the reversed string to output.txt
    await fs.writeFile('output.txt', reversedText);
    console.log('Reversed string written to output.txt');
    
    // Step 5: Return output.txt as the response body
    res.sendFile('output.txt', { root: __dirname }, (err) => {
      if (err) {
        console.error('Error sending file', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Response sent successfully');
      }
    });
  } catch (error) {
    console.error('ERROR during file operations', error);
    res.status(500).send('Internal Server Error');
  }
});
