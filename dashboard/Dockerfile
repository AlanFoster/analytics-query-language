FROM node:10.9-alpine

WORKDIR /srv/aql

COPY package.json yarn.lock ./
RUN yarn && yarn cache clean

COPY . .
