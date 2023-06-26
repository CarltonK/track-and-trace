############################
# STAGE 1: Build artifacts #
############################
FROM node:18.15-alpine As build

RUN mkdir -p /app

# set working directory
WORKDIR /app

# install dependencies
COPY package*.json /app/
RUN npm i

COPY . /app/

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# build
RUN npm run build

# remove development dependencies
RUN npm prune --omit=dev
#################################
# STAGE 2: Take build artifacts #
#################################
FROM node:18.15-alpine As production

WORKDIR /usr/src/app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# start app
CMD ["npm", "start"]