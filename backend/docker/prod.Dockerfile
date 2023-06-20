FROM node:18.15-alpine As build

WORKDIR /usr/src/app

# Install dev dependencies for build
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npm run build

# Cleanup node modules to be production only
ENV NODE_ENV production
RUN npm ci --only=production && npm cache clean --force

USER node

FROM node:18.15-alpine As production

WORKDIR /app

# Copy only required production build files, no src
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/package.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN chown node:node .

USER node

CMD [ "npm", "run", "start:prod" ]