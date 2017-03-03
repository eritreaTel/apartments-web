const debugEnabled = true; // Make it configurable - send only from production


const LogHelper = {
  initDebug() {


  },

  log(message) {
    if (debugEnabled) {
      this.initDebug();
    }
  },

  error(error) {
    if (debugEnabled) {
      this.initDebug();

    }
  }
};

module.exports = LogHelper;
