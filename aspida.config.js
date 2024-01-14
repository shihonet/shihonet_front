/**
 * https://github.com/aspida/aspida/tree/main/packages/aspida/docs/ja#aspidaconfigjs-%E3%81%AE%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3
 * */
const axios = require("axios");
module.exports = {
    input: 'src/api',
    outputEachDir: false,
    trailingSlash: false,
};

module.exports = { baseURL: 'https://shihonet-api-29ca225d2dcb.herokuapp.com/' };
axios.defaults.withCredentials = true;
