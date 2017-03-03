var Logger = require('logdna');
var options = {
  hostname: "local.ugandaBooking.com",
  ip: "127.0.1.1",
  mac: "2c:f0:ee:2e:0d:66",
  app: "ugandaBooking"
};

options.index_meta = true;

var logger = Logger.setupDefaultLogger("9b8168b9d3454816a3d7629c16bb5785", options);


const debugEnabled = true; // Make it configurable - send only from production


const LogHelper = {
  initDebug() {


  },

  log(message) {
    if (debugEnabled) {
      this.initDebug();
      logger.info(message);
    }
  },

  error(error) {
    if (debugEnabled) {
      this.initDebug();

    }
  }
};

module.exports = LogHelper;
