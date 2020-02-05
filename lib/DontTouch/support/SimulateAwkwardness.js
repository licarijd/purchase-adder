var Rand = require('../util/Rand');

module.exports = {
  delay: function (milliseconds) {
    try {
      // hack to block the thread in JS
      var now = new Date().getTime();
      while (new Date().getTime() < now + milliseconds) { /* do nothing */ }
    } catch (error) { /**/ }
  },
  randomDelay: function (shortestDelay, longestDelay) {
    var milliseconds = Rand.randomNumber(shortestDelay, longestDelay);
    this.delay(milliseconds);
  }
};
