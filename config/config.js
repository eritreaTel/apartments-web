const camelCase = require('lodash.camelcase');
let enviroment = process.env["NODE_ENV"];
console.log(enviroment);

const env = require('./env.json').reduce((memo, key) => {
        if (key in process.env) {
    const keyCamelCase = camelCase(key);
    if (key.startsWith('USE_')) {
        memo[keyCamelCase] = String(process.env[key]) !== 'false';
    } else {
        memo[keyCamelCase] = process.env[key];
    }
}
return memo;
}, {});

module.exports = Object.assign({}, require('./application.json'), require(`./${enviroment}.json`), env);
