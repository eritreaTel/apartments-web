const DateHelper = require('./date_helper');
const ApplicationHelper = require('./application_helper');
const ApartmentFilterHelper = {

    filterApartmentByType(propertyTypes, apartments) {
        if (propertyTypes == null || propertyTypes.length == 0) {
            return apartments;
        }

        let filteredApartments = [];
        apartments.forEach(function(apartment) {
            let result =  propertyTypes.find(type => type === apartment.propertyType);
            if (result != undefined) {
                filteredApartments.push(apartment);
            }
        });

        console.log(filteredApartments);




        return filteredApartments;
    }

};

module.exports = ApartmentFilterHelper;
