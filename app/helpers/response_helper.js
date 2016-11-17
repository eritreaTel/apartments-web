const _ = require('lodash');

const ResponseHelper = {

    processResponseReturnOne(response) {
        let object = null, errors = null ;
        if (response) {
            if (response.data) {
                object = response.data.results[0];
            } else if(response.errors) {
                //console.log('raw error response is ');
                //console.log(response.errors);
                // @TODO:Amanuel please parse the errors and return an array. - Hint, use lodash
                //errors = response.errors.map(error => {return _keys(error)});
                errors = ['The email must be a valid email address.'];
                //console.log('proccessed error response is ');
                //console.log(errors);
            }
        }
        return {object, errors};
    },

    processResponseReturnMany(response) {
        let result ;

        if (response && response.data && response.data.results && response.data.results.length > 0) {
            result = response.data.results;
        }
        return result;
    }
};

module.exports = ResponseHelper;
