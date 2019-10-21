# Demo api

**Important:** This is proof of concept api.

## Requirements
* Node.js
* MongoDB

## Setup
1. start MongoDB
2. create `demo-api-db` database
2. run `npm i`
3. run `npm run dev`

## Endpoints
*  `GET localhost:1950/api/setup` - DB setup
* `POST localhost:1950/api/user/login` - Login user
* `POST localhost:1950/api/user/register` - Register user
* `GET localhost:1950/api/trips` - Available trips
* `POST localhost:1950/api/trips/{id}/buy` - Buy ticket for trip with id
* `POST localhost:1950/api/trips/{id}/cancel` - Cancel ticket for trip with id
* `GET localhost:1950/api/user/tickets` - User's tickets

**Note:** If requested, Postman collection can be provided.

## TODO
* Add sentry logging
* Add more tests
* Dockerize app
* Use .env file for configuration
* Improve security


