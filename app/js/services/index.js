module.exports = function(app) {
  require('./get_service')(app);
  require('./add_service')(app);
  require('./auth')(app);
};
