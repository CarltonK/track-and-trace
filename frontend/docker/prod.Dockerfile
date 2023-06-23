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
FROM nginx:stable-alpine As production
ENV NODE_ENV production

# remove existing files from nginx directory
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/.next /usr/share/nginx/html
COPY --from=build /app/docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]