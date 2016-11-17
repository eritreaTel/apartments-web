const _ = require('lodash');

const ResponseHelper = {

    processResponseReturnOne(response) {
        let object = null, errors = null ;
        if (response) {
            if (response.data) {
                object = response.data.results[0];
            } else if(response.errors) {

                try {
                    const text =  response.errors.text();
                    console.log('parsed text is ');
                    console.log(text);

                    const parsed = JSON.parse(text);

                    console.log('parsed is ');
                    console.log(parsed);
                    if (parsed.messages && parsed.messages.length) errorMessages = parsed.messages;

                    console.log('error messages');
                    console.log(errorMessages);
                } catch (e) {
                    console.log('run in to error');
                    console.log(e);
                    //add airbrake once it is figure out
                }

                //errors = response.errors.map(error => {return _keys(error)});
                errors = 'The email must be a valid email address.';
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
