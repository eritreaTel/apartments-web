const DateHelper = require('./date_helper');
const ApplicationHelper = require('./application_helper');
const StringHelper = require('./string_helper');
const CookiesHelper = require('./cookies_helper');
const ApartmentHelper = {

    getReservationStatuses(activeStage) {
        let searching = 'active';
        let personal,payment,confirmation;
        if (activeStage == 'personal') {
            searching = 'mg-step-done';
            personal = 'active';
        } else if (activeStage == 'confirmation') {
            searching = 'mg-step-done';
            personal = 'mg-step-done';
            confirmation ='mg-step-done';
        }
        return {searching, personal, confirmation};
    },

    getDefaultSearchDates() {
        let room        =  CookiesHelper.getDataFromCookie('room');
        let adult       =  CookiesHelper.getDataFromCookie('adult');
        let children    =  CookiesHelper.getDataFromCookie('children');
        let checkInDate =  CookiesHelper.getDataFromCookie('checkInDate');
        let checkOutDate = CookiesHelper.getDataFromCookie('checkOutDate');

        room        = (room == null || room == undefined) ? "1" : room ;
        adult       = (adult == null || adult == undefined) ? "1" : adult ;
        children    = (children == null || children == undefined) ? "1" : children ;

        if (checkInDate == null || checkInDate == undefined) {
            checkInDate = DateHelper.getTommorrow();
        } else {
            let checkInFromCookie = DateHelper.getDateFromString(checkInDate);
            checkInDate = DateHelper.isSameOrAfter(checkInFromCookie)? checkInFromCookie: DateHelper.getTommorrow() ;
        }

        if (checkOutDate == null || checkOutDate == undefined) {
            checkOutDate = DateHelper.getNDaysFromToday(2);
        } else {
            let checkOutFromCookie = DateHelper.getDateFromString(checkOutDate);
            checkOutDate = DateHelper.isGreaterThanToday(checkOutFromCookie)? checkOutFromCookie : DateHelper.getNDaysFromToday(2);
        }

        let searchData = {
            'checkInDate'   : checkInDate,
            'checkOutDate'  : checkOutDate,
            'room' : room,
            "adult" : adult,
            "children" : children
        }

        return searchData;
    },

    getCategories(blogMetadatas) {
        const categories = [];
        blogMetadatas.forEach(function(metaData) {
            if (metaData.type == 'category') {
                categories.push(metaData);
            }
        });
        return categories;
    },

    getComboApartmentBestPhoto(apartments) {
        return apartments[0].best_photo;
    },

    generateViewApartmentUrl(apartmentResponse) {
        let {apartments, aptCnt, apartmentKey} = apartmentResponse;
        let urlDescription = apartments[0].guestHouse.city + '-' +apartments[0].guestHouse.name;

        urlDescription = StringHelper.makeStringUrlFriendly(urlDescription);

        let url;
        if (aptCnt ==1) {
            url  = '/apartment/' + urlDescription + '/' + apartments[0].id;
        } else {
            let guestHouseId = apartments[0].guestHouse.id;
            let aptIds = [];
            apartments.forEach(function(apartment) {
                aptIds.push(apartment.id);
            });
            url  = '/combo-apartment/' + urlDescription + '/' + guestHouseId + '/' + apartmentKey;
        }
        return url;
    },

    getAptUrlByApartmentAndGuesthouse(apartment, guesthouse) {
        let urlDescription = guesthouse.city + '-' + guesthouse.name;

        urlDescription = StringHelper.makeStringUrlFriendly(urlDescription);
        let url  = '/apartment/' + urlDescription + '/' + apartment.id;

        return url;
    },

    getSkinyApartmentsRepresentation(apartments) {
        const skinnyApartments = [];
        apartments.forEach(function(apartment) {
            skinnyApartments.push( {'apartmentId' : apartment.id, 'pricingId' : apartment.pricingInfo.apartment_price_id});
        });
        return skinnyApartments;
    },

    getComboAmenities(apartmentResponse) {
        let {apartments, totalBeds} = apartmentResponse;
        let bedAmenityName = totalBeds == 1 ? totalBeds + ' Bed' : totalBeds + ' Beds';

        if (apartments.length > 1) {
            bedAmenityName += ' Total';
        }

        let amenities = apartments[0].amenities;

        let bedAmenity = [{
            'name' : bedAmenityName,
            'icon_name' : 'fp-ht-bed',
            'id' : ApplicationHelper.randomInt(),
            'priority' : 1
        }];

        var newAmenities = _.concat(bedAmenity, amenities);
        return newAmenities;

    },

    getGuestHouse(apartmentResponse) {
        return apartmentResponse.apartments[0].guestHouse;
    },

    getApartmentEntity(apartmentResponse) {
        return apartmentResponse.apartments[0];
    },

    getGalleries(apartmentResponse) {
        let guestHouse =  this.getGuestHouse(apartmentResponse);
        return _.merge(guestHouse.galleries, apartmentResponse.apartments[0].galleries);
    },

    getLongDescription(apartmentResponse) {
        return  apartmentResponse.apartments[0].guestHouse.long_description ;
    },

    getShortDescription(apartmentResponse) {
        let descr = (apartmentResponse.apartments[0].short_description) ? apartmentResponse.apartments[0].short_description + ' ...' : '';
        return descr;
    },

    getDisplayMessage(apartmentResponse) {
        return apartmentResponse.apartments[0].medium_description;
    },

    getAmenitiesByCategory(amenities) {
        let bedroom = [], bathroom = [], livingArea = [], foodAndDrink =[], technology = [], activities =[], kitchen = [], seating =[];
        _.each(amenities, (amenity) => {
            if (amenity.category == 'Bedroom') {
                bedroom.push(amenity);
            } else if (amenity.category == 'Bathroom') {
                bathroom.push(amenity);
            } else if (amenity.category == 'Activities') {
                activities.push(amenity);
            } else if (amenity.category == 'Food & Drink') {
                foodAndDrink.push(amenity);
            }  else if (amenity.category == 'Technology') {
                technology.push(amenity);
            }  else if (amenity.category == 'Kitchen') {
                kitchen.push(amenity);
            }  else if (amenity.category == 'Living Area') {
                livingArea.push(amenity);
            } else if (amenity.category == 'Seating') {
                seating.push(amenity);
            }
        });

        return {bedroom, bathroom, livingArea, foodAndDrink, technology, activities, kitchen, seating};
    },

    getAmenitiesByValue(amenities, value) {
        let amenitiesByVal = [];
        _.each(amenities, (amenity) => {
            if (amenity.value == value) {
                amenitiesByVal.push(amenity);
            }
        });
        return amenitiesByVal;
    }

};

module.exports = ApartmentHelper;
