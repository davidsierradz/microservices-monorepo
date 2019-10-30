# Node.js monorepo with docker

## Introduction

The idea is to have a full microservice environment setup inside containers, so the requirements on the host machine should be only docker and docker-compose and hopefully implementing tooling to manage the life-cycle of a modern microservice architecture avoiding DX pain as much as possible.

Is this possible?

## Installation

```sh
docker-compose --file scripts/docker/docker-compose.yml build
```

## Running

```sh
docker-compose --file scripts/docker/docker-compose.yml up
```
