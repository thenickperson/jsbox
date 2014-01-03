
/*
 * GET home page.
 */

var helpers = require('../helpers');

exports.index = function(req, res){
  res.render('index', {
    title: 'JS Box',
    libraryUrls: helpers.getLibraryUrls(),
    file: req.query.file
  });
};
