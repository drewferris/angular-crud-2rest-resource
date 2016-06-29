module.exports = function(app) {
  require('./man_united_form')(app);
  require('./barca_form')(app);
  require('./barca_list')(app);
  require('./man_united_list')(app);
};
