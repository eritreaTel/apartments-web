const FetchHelper = require('../helpers/fetch_helper');

module.exports = {
    setLastEvent(e){
        e.persist();
        const {screenX, screenY, clientX, clientY, currentTarget} = e;
        const rect = e.currentTarget.getBoundingClientRect();
        const lastEvent = {
            clientX,
            clientY,
            rect,
            screenX,
            screenY,
            target: currentTarget
        };
        this.setStoreVal('lastEvent', lastEvent);
    },

    setView(data) {
        this.setStoreVal('view', data);
    },

    setRoute(data) {
        this.router.setRoute(data);
    }
};
