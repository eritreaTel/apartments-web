const DateHelper = require('./date_helper');
const ApplicationHelper = require('./application_helper');
const Actions = require('../actions/actions');
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

        //If maxPrice is 200, then set max price to 500.. basically get all hotels up to 500 per night
        maxPrice = (maxPrice == 200) ? 500 : maxPrice;

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
            let result =  starRating.find(rating => rating == apartment.apartments[0].guestHouse.star_rating);
            if (result != undefined) {
                filteredApartments.push(apartment);
            }
        });

        return filteredApartments;
    },


    filterApartmentByLocation(locations, apartments) {
        if (locations == null || locations.length == 0) {
            return apartments;
        }

        let filteredApartments = [];
        apartments.forEach(function(apartment) {
            let result =  locations.find(location => location === apartment.apartments[0].guestHouse.neighborhood);
            if (result != undefined) {
                filteredApartments.push(apartment);
            }
        });

        return filteredApartments;
    },

    filterByShowMe(showMe, apartments) {
        if (showMe == null || showMe == undefined || showMe == '500') {
            return apartments;
        }
        return _.slice(apartments, 0, showMe);
    },

    sortByCriteria(sortBy, apartments){
        if (sortBy == null || sortBy == undefined || sortBy =='popularity') {
            return apartments;
        }

        //Parameters of _.orderBy looks weird, but it works, so we are good for now.
        if (sortBy == 'cheapest-first') {
            return _.orderBy(apartments, ['apartment', 'totalPrice'], ['desc', 'asc']);
        } else if (sortBy == 'expensive-first') {
            return _.orderBy(apartments, ['apartment', 'totalPrice'], ['asc', 'desc'])
        }
    },

    resetSearchCriteria() {

    },

    getNeighborhoods() {
        return (
            [
                {'name' :'Bugolobi' , 'count' : 5},
                {'name' :'Bukoto'	, 'count' : 2},
                {'name' :'Bunga'	, 'count' : 2},
                {'name' :'Busega'	, 'count' : 1},
                {'name' :'City Center', 'count' : 7},
                {'name' :'Ggaba', 'count' : 3},
                {'name' :'Kabalagala'	, 'count' : 4},
                {'name' :'Kabusu'		, 'count' : 2},
                {'name' :'Kamwokya', 'count' : 1},
                {'name' :'Kansanga', 'count' : 4},
                {'name' :'Katwe', 'count' : 1},
                {'name' :'Kawempe', 'count' : 3},
                {'name' :'Kibuye'	, 'count' : 3},
                {'name' :'Kireka'	, 'count' : 3},
                {'name' :'Kirinya', 'count' : 1},
                {'name' :'Kiwatule', 'count' : 1},
                {'name' :'Kololo', 'count' : 3},
                {'name' :'Makindye', 'count' : 1},
                {'name' :'Mbuya', 'count' : 1},
                {'name' :'Mengo', 'count' : 8},
                {'name' :'Mulago', 'count' : 2},
                {'name' :'Munyonyo', 'count' : 2},
                {'name' :'Mutundwe', 'count' : 1},
                {'name' :'Mutungo', 'count' : 1},
                {'name' :'Muyenga', 'count' : 4},
                {'name' :'Naalya', 'count' : 1},
                {'name' :'Naguru', 'count' : 1},
                {'name' :'Nakasero', 'count' : 1},
                {'name' :'Namugongo', 'count' : 1},
                {'name' :'Ndeeba', 'count' : 3},
                {'name' :'Nsambya', 'count' : 2},
                {'name' :'Ntinda', 'count' : 5},
                {'name' :'Wakaliga', 'count' : 1},
                {'name' :'Zana', 'count' : 1}
            ]
        )
    }
};

module.exports = ApartmentFilterHelper;
