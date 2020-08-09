'use strict';
const { ErrorHandler } = require('../interceptors/errors');
const { isNullOrUndefined, mongoId } = require('../utils/utilities');
const { INTERNAL_SERVER_ERROR, UNAUTHORIZED } = require('http-status-codes');
const { JWT_METHOD, COOKIE_NAME, SPACE, HEADER_TOKEN, COOKIE_TOKEN } = require('../constants');
const { fetchUserFromToken } = require('../services/users');

module.exports = async (req, res, next) => {
    try {
        let token;
        if (JWT_METHOD === HEADER_TOKEN) { // If token managed through Request Headers
            if (isNullOrUndefined(req.headers.authorization) || (req.headers.authorization).split(SPACE).length != 2)
                return res.status(UNAUTHORIZED).json({ success: false, message: `Token missing` });

            token = req.headers.authorization.split(SPACE)[1];
        } else if (JWT_METHOD === COOKIE_TOKEN) { // If the token managed through cookies
            if (isNullOrUndefined(req.cookies[COOKIE_NAME]))
                return res.status(UNAUTHORIZED).json({ success: false, message: `Token missing` });

            token = req.cookies[COOKIE_NAME];
        }

        const userData = await fetchUserFromToken(token);

        req.user = userData.message;
        next();
    } catch (error) {
        if(!(error instanceof ErrorHandler)) {
            error = new ErrorHandler(INTERNAL_SERVER_ERROR, error);
        }
        next(error);
    }
}