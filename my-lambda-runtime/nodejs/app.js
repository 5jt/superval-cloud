const querystring = require('querystring');

exports.handler = async (event) => {
  try {
    const queryStringParameters = event.queryStringParameters || {};
    const inputString = queryStringParameters.s || '';

    // Reverse the input string
    const reversedString = inputString.split('').reverse().join('');

    // Prepare the response
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: reversedString,
    };

    return response;
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
