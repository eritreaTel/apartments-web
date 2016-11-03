function initDebug() {
  if (!window.Gh) {
    window.Gh = {
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
      window.Gh.debug.history.push(action);
    }
  },
  trackStore(store) {
    if (debugEnabled) {
      initDebug();
      window.Gh.debug.store = store;
    }
  },
  log(message) {
    if (debugEnabled) {
      initDebug();
      window.Gh.debug.log.push(message);
    }
  }
};
