# Demo api

## Requirements
* Node.js
* MongoDB

## End-points
*  `GET localhost:1950/api/setup` - DB setup
* `POST localhost:1950/api/user/login` - Login user
* `POST localhost:1950/api/user/register` - Register user
* `GET localhost:1950/api/trips` - Available trips
* `POST localhost:1950/api/trips/3/buy` - Buy ticket
* `POST localhost:1950/api/trips/3/cancel` - Cancel ticket
* `GET localhost:1950/api/user/tickets` - User's tickets

**Note:** If requested, Postman collection can be provided.

## TODO
* Add sentry logging
* Add more tests
* Dockerize app
* Use .env file for configuration


