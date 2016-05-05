var LogExporter = require('../exporters/logExporter.js');
var parser = require('../parsers/apiaxleParser.js');
var formatter = require('../formatters/trafficSpaces.js');

module.exports = function apiaxleLog(args) {
  var exporter = new LogExporter({ logfile: args.logfile });

  this.processHit = function processHit(hit, cb) {
    try {
      var payload = parser(hit);
      var formattedPayload = formatter(payload);
      exporter.add(formattedPayload);
    } catch (err) {
      console.log(err);
    } finally {
      cb(null);
    }
  };
};