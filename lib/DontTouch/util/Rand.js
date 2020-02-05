module.exports = {
  randomNumber: function (lowEnd, highEnd) {
    return Math.random() * (highEnd - lowEnd) + lowEnd;
  }
};
