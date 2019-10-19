export default {
    // TODO: use .env for this
    app: {
        port: '1950',
        dbUrl: 'mongodb://localhost:27017/demo-api-db',
    },
    auth: {
        jwtSecretKey: 'demoAppKey',
        tokenDuration: '24h',
    },
    businessRules: {
        ticketCancelPeriod: 1,
    },
};
