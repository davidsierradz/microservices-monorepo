#!/bin/sh

rsync -zavh /usr/src/cache/node_modules /srv/service/node_modules
exec yarn start
