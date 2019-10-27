FROM node:12.13-alpine

RUN mkdir /srv/service && chown -R node:node /srv/service
RUN mkdir -p /usr/src/cache && chown -R node:node /usr/src/cache

USER node

WORKDIR /usr/src/cache

COPY --chown=node:node ./packages/service-a/package.json ./packages/service-a/yarn.lock ./

RUN yarn install

WORKDIR /srv/service
