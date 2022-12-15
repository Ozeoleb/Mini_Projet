var si = require('systeminformation');
// promises style - new since version 3
si.cpu()
    .then(function (data) { return console.log(data); })["catch"](function (error) { return console.error(error); });
