FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
COPY --chown=node:node package.json .
RUN npm install
RUN mkdir /usr/src/app/node_modules/.cache/ && chmod -R 777 /usr/src/app/node_modules/.cache/
COPY --chown=node:node  . .
USER node
COPY . /usr/src/app

EXPOSE 3000

CMD ["server.js"]