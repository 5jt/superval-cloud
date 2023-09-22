# Containerised app to reverse a string sent to an API gateway
FROM node
WORKDIR /app

RUN dpkg --add-architecture i386
RUN apt-get update && apt-get -y install wine32

COPY package.json /app/
COPY src /app/

RUN npm install 

CMD ["node", "server.js"]