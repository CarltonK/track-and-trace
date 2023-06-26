# base image
FROM node:18.15-alpine

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json /usr/src/app/
RUN npm i

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . /usr/src/app/

# start app
CMD ["npm", "run", "dev"]