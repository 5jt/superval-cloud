# Containerised app to reverse a string sent to an API gateway
FROM node:19-alpine

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN npm install 

CMD ["node", "server.js"]