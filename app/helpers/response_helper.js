const ResponseHelper = {

    processResponseReturnOne(response) {
        let object = null, errors = [] ;
        if (response) {
            if (response.data) {
                object = response.data.results[0];
            } else if(response.errors) {

                try {
                    _.each(response.errors[0], (error) => {
                        errors.push(error);
                    });
                    console.log(errors);
                } catch (e) {
                    console.log('run in to error');
                    //console.log(e);
                    //TODO.Amanuel, please change this to json error
                    errors.push("Run in to error. Please contact  us if you believe you getting this error by mistake.");
                }
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
