FROM node:latest

WORKDIR /ctapompier

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install --save-dev sequelize-cli
RUN npm install -g nodemon
RUN npm install

COPY . .

CMD ["nodemon", "-L", "server.js"]
