const DateHelper = require('./date_helper');
const ApplicationHelper = require('./application_helper');
const StringHelper = require('./string_helper');
const ApartmentHelper = {

    getReservationStatuses(activeStage) {
        let searching = 'active';
        let personal,payment,confirmation, additional;
        if (activeStage == 'additional') {
            searching = 'mg-step-done';
            additional = 'active';
        } else if (activeStage == 'personal') {
            additional = 'mg-step-done';
            searching = 'mg-step-done';
            personal = 'active';
        } else if (activeStage == 'confirmation') {
            additional = 'mg-step-done';
            searching = 'mg-step-done';
            personal = 'mg-step-done';
            confirmation ='mg-step-done';
        }
        return {searching, additional, personal, confirmation};
    },

    getDefaultSearchDates() {
        let searchData = {
            'checkInDate'   : DateHelper.getOneWeeksFromNow(),
            'checkOutDate'  : DateHelper.getTwoWeeksFromNow(),
            'room' : "1",
            "adult" : "1",
            "children" : "0"
        };
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
        let {apartments, aptCnt} = apartmentResponse;
        let urlDescription = apartments[0].guestHouse.city + '-' +apartments[0].guestHouse.name;

        urlDescription = StringHelper.makeStringUrlFriendly(urlDescription);

        let url;
        if (aptCnt ==1) {
            url  = 'apartment/' + urlDescription + '/' + apartments[0].id;
        } else {
            let aptIds = [];
            apartments.forEach(function(apartment) {
                aptIds.push(apartment.id);
            });
            url  = 'combo-apartment/' + urlDescription + '/' + _.join(aptIds, '-');
        }
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
        return apartmentResponse.galleries;
    }

};

module.exports = ApartmentHelper;
