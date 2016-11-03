const FetchHelper = require('../helpers/fetch_helper');


module.exports = {
  async getApartments({data}) {
    try {
      const bestApartments = await FetchHelper.fetchJson(`apartments`, {
        method: 'get',
        data
      });

      this.setStoreVal('bestApartments', bestApartments);
    } catch (error) {
      this.dispatch({type: 'handleRequestError', data: {error, defaultErrorMessage: 'Could not get best apartments'}});
      throw error;
    }
  }
};
