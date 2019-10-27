#!/bin/sh

cp -r /usr/src/cache/node_modules/. /srv/service/node_modules/
exec npm start
