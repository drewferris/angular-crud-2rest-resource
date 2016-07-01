module.exports = function(app) {
  require('./barca_list')(app);
  require('./man_united_list')(app);
  require('./player_form')(app);
  require('./dummy')(app);
};
