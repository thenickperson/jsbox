// helper functions

var http = require("http");
var packages = require("./tmp/packages.json").packages;

exports.getLibraryUrls = function () {
  return packages.map(function (data) {
    return {
      name: data.name,
      url: "//cdnjs.cloudflare.com/ajax/libs/" + data.name + "/" + data.version + "/" + data.filename
    }
  });
};
