# Use the official AWS Lambda base image for Node.js 14
FROM public.ecr.aws/lambda/nodejs:14

# Set the working directory to /var/task
WORKDIR /var/task

# Copy the AWS SDK extension code into the container
COPY aws/extensions/aws-sdk.js /opt/extensions/aws-sdk.js

# Copy the Node.js code and package.json into the container
COPY nodejs/app.js .
COPY nodejs/package.json .

# Install Node.js dependencies
RUN npm install

# Command to run the Lambda function
CMD [ "app.handler" ]
