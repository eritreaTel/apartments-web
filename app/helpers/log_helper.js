var loggly = require('loggly');


const debugEnabled = true; // Make it configurable - send only from production


const LogHelper = {
  initDebug() {
    var client = loggly.createClient({
      token: "5c85d379-9dad-4c13-a0e2-43cc078c7c67",
      subdomain: "ugandabooking",
      auth: {
        username: "ugandabooking",
        password: "Uganda6ook!ng"
      },
      tags: ["Production-WebServer"],
      json:true
    });

    client.log("This is it. logged from react");

  },

  log(message) {
    if (debugEnabled) {
      this.initDebug();
      //winston.log('info', message);
    }
  },

  error(error) {
    if (debugEnabled) {
      this.initDebug();

    }
  }
};

module.exports = LogHelper;
