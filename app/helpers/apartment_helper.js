const ApartmentHelper = {

    getReservationStatuses(activeStage) {
        let searching = 'active';
        let personal,payment,confirmation;
        if (activeStage == 'personal') {
            searching = 'mg-step-done';
            personal = 'active';
        } else if (activeStage == 'payment') {
            searching = 'mg-step-done';
            personal = 'mg-step-done';
            payment='active';
        } else if (activeStage == 'confirmation') {
            searching = 'mg-step-done';
            personal = 'mg-step-done';
            payment='mg-step-done';
            confirmation ='mg-step-done';
        }
        return {searching, personal, payment, confirmation};
    },

  getCategories(blogMetadatas) {
    const categories = [];
    blogMetadatas.forEach(function(metaData) {
      if (metaData.type == 'category') {
        categories.push(metaData);
      }
    });
    return categories;
  }
};

module.exports = ApartmentHelper;
