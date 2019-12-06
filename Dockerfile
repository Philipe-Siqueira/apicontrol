FROM node:10-alpine
WORKDIR /Developer/Dockers

COPY package*.json ./
COPY yarn.lock ./
RUN npm install

COPY . .

EXPOSE 80

CMD ["yarn", "dev" ]