module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/greeting', require('./routes/greeting.route'));

};
