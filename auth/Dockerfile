FROM node:10

WORKDIR /work/auth


COPY package*.json ./

RUN npm install

COPY . .


CMD npm start