FROM --platform=linux/amd64 node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm","run", "start"]
