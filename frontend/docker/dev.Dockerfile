# base image
FROM node:18.15-alpine

# set working directory
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json /usr/src/app
RUN npm i

COPY . /usr/src/app

# start app
CMD ["npm", "run", "dev"]