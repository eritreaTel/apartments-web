const ResponseHelper = {

    processResponseReturnOne(response) {
        let object = null, errors = [], errorMessage = '' ;
        if (response) {
            if (response.data) {
                object = response.data.results[0];
            } else if(response.errors) {

                try {
                    _.each(response.errors[0], (error) => {
                        errors.push(error);
                    });

                } catch (e) {
                    errors.push("Run in to error. Please contact  us if you believe you getting this error by mistake.");
                }
            }
        }
        return {object, errors};
    },

    processResponseReturnMany(response) {
        let results = [], errors = [] ;

        if (response && response.data && response.data.results && response.data.results.length > 0) {
            results = response.data.results;
        } else if (response.errors) {
            try {
                _.each(response.errors[0], (error) => {
                    errors.push(error);
            });

            } catch (e) {
                errors.push("Run in to error. Please contact  us if you believe you getting this error by mistake.");
            }
        }
        return {results, errors};
    }
};

module.exports = ResponseHelper;
