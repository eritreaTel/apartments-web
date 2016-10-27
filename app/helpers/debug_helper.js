function initDebug() {
  if (!window.Ra) {
    window.Ra = {
      debug: {
        history: [],
        store: {},
        log: []
      }
    };
  }
}

const debugEnabled = typeof DEBUG !== 'undefined' && !!DEBUG;

module.exports = {
  trackAction(action) {
    if (debugEnabled) {
      initDebug();
      window.Ra.debug.history.push(action);
    }
  },
  trackStore(store) {
    if (debugEnabled) {
      initDebug();
      window.Ra.debug.store = store;
    }
  },
  log(message) {
    if (debugEnabled) {
      initDebug();
      window.Ra.debug.log.push(message);
    }
  }
};
