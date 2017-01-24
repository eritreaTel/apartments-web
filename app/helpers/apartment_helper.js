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
  }
};

module.exports = ApartmentHelper;
