const StringHelper = {

    extractNames(full_name) {
        let first_name = '', last_name = '';

        if (full_name) {
            let names = full_name.split(' ');
            first_name = names[0];

            for (var i = 1; i < names.length; i++) {
                last_name = last_name + " " + names[i].trim();
            }
            last_name = last_name.trim();
        }

        return {first_name, last_name};
    },

    makeStringUrlFriendly(inputString) {
        // take out empty space and make guest house, lower case
        let urlString = _.replace(inputString, new RegExp(" & ","g"), '-');
        urlString = _.replace(urlString, new RegExp(" ","g"), '-');
        urlString = _.replace(urlString, new RegExp("`","g"), '-');
        urlString = _.replace(urlString, new RegExp("'","g"), '');
        urlString = _.toLower(urlString);

        return urlString;
    }
};

module.exports = StringHelper;
