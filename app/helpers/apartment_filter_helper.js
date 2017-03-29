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

        return filteredApartments;
    },

    filterApartmentByPriceRange(priceRange, apartments) {
        if (priceRange == null || priceRange.length == 0) {
            return apartments;
        }

        let minPrice = priceRange[0];
        let maxPrice = priceRange[1];

        let filteredApartments = [];
        apartments.forEach(function(apartment) {
            if (apartment.pricePerDay >= minPrice && apartment.pricePerDay <= maxPrice) {
                filteredApartments.push(apartment);
            }
        });

        return filteredApartments;
    },

    filterApartmentByStarRating(starRating, apartments) {
        if (starRating == null || starRating.length == 0) {
            return apartments;
        }

        let filteredApartments = [];
        apartments.forEach(function(apartment) {
            console.log( apartment);
            console.log("ratig is" + apartment.apartments[0].guestHouse.star_rating);
            let result =  starRating.find(rating => rating == apartment.apartments[0].guestHouse.star_rating);
            if (result != undefined) {
                filteredApartments.push(apartment);
            }
        });

        return filteredApartments;
    },

};

module.exports = ApartmentFilterHelper;
