require('dotenv').config();


module.exports = {
    /**
     * Environment Variable Constants
     */
    // Server Port
    PORT: process.env.PORT || 5100,
    // Email Sent from
    EMAIL_FROM: process.env.EMAIL_FROM,
    // JWT Managed by Headers/cookies
    JWT_METHOD: process.env.JWT_METHOD || 'HEADER',
    // JWT Cookie name in case if the token is passed through cookies
    COOKIE_NAME: process.env.COOKIE_NAME,
    // Send grid key
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    // MongoDB connection String
    MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
    // Users Service domain
    USERS_SERVICE: process.env.USERS_SERVICE,
    // API end point to fetch user from User services
    TOKEN_VERIFICATION_API: process.env.TOKEN_VERIFICATION_API,
    /**
     * Global Constants
     */
    VERIFICATION_TOKEN_SPLIT: '--',
    SPACE: " ",
    HOUR_IN_MINUTES: 60,
    HEADER_TOKEN: "HEADER",
    COOKIE_TOKEN: "COOKIE"
}


/**
 * Environment file template
 */
/*
PORT=
EMAIL_FROM=
JWT_METHOD= #[HEADER / COOKIE]
COOKIE_NAME=
USERS_SERVICE=
SENDGRID_API_KEY=
MONGO_CONNECTION_STRING=
*/