FROM node:10-alpine
WORKDIR /work/frontend


COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY . .

CMD npm start