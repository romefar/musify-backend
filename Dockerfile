FROM node:14-alpine3.10
WORKDIR /musify-backed
COPY package.json /musify-backed
RUN npm i
COPY . /musify-backed