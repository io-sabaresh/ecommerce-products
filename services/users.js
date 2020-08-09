'use strict';
const { ErrorHandler } = require('../interceptors/errors');
const axios = require('axios').default;
const { JWT_METHOD, COOKIE_NAME, HEADER_TOKEN, COOKIE_TOKEN, USERS_SERVICE, TOKEN_VERIFICATION_API } = require('../constants');

const fetchUserFromToken = (token) => {
    return new Promise((resolve, reject) => {
        const request = {
            method: "post",
            url: `${USERS_SERVICE}${TOKEN_VERIFICATION_API}`,
        }

        if(JWT_METHOD === HEADER_TOKEN) {
            request.headers.Authorization = `Bearer ${token}`;
        } else if(JWT_METHOD === COOKIE_TOKEN) {
            request.headers = {
                Cookie: `${COOKIE_NAME}=${token};`, 
                withCredentials:true
            }
        }

        axios(request).then(({ status, data }) => {
            resolve(data);
        }).catch(error => {
            reject(new ErrorHandler(error.response.status, error.response.data));
        });
    });
}
module.exports = {
    fetchUserFromToken
}
