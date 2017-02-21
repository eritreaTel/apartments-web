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

    getComboApartmentUrl(apartments) {
        let url = 'combo-apartment/';
        apartments.forEach(function(apartment) {
            url += apartment.id + '-';
        });

        return url; //remove the one - at the end
    },

    getComboApartmentIds(apartments) {
        const apartmentIds = [];
        apartments.forEach(function(apartment) {
            apartmentIds.push(apartment.id);
        });
        return apartmentIds;
    },

    getComboAmenities(apartments) {
        return apartments[0].amenities;
    }
};

module.exports = ApartmentHelper;
