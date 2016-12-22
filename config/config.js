const camelCase = require('lodash.camelcase');
let localConfig;

try {
    localConfig = process.env.NODE_ENV === 'development' ? require('./local.json') : {};
} catch(e) {
    localConfig = {};
}

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

module.exports = Object.assign({}, require('./application.json'), require(`./local.json`), env, localConfig);
