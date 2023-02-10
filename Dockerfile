FROM node:16.14.0-alpine3.14

WORKDIR /app

RUN apk add \
      python3


ADD package.json ./
ADD yarn.lock ./

RUN yarn install --frozen-lockfile
