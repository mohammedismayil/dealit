FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm install

RUN mkdir node_modules / .cache && chmod - R 777 node_modules / .cache

COPY . /usr/src/app

EXPOSE 3000

CMD ["server.js"]