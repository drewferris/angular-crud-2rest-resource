module.exports = function(app) {
  require('./teams_controller')(app);
  require('./sign_in_controller')(app);
};
