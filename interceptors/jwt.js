'use strict';
const { ErrorHandler } = require('../interceptors/errors');
const { isNullOrUndefined, mongoId } = require('../utils/utilities');
const { INTERNAL_SERVER_ERROR, UNAUTHORIZED } = require('http-status-codes');
const { JWT_METHOD, COOKIE_NAME, SPACE, HEADER_TOKEN, COOKIE_TOKEN } = require('../constants');

module.exports = async (req, res, next) => {
    
}