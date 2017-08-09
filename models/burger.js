  var orm = require('../config/orm.js')

  var burger = {

    all: function(callback) {
      orm.all("burgers", function(res) {
        callback(res);
      });
    },

    create: function(name, callback) {
      var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      orm.create("burgers", ["burger_name", "devoured", "date"], [name, "false", date], function(res) {
        callback(res);
      });
    },

    devour: function(id, callback) {
      var condition = "id = " + id;
      orm.update("burgers", { devoured: "true" }, condition, function(res) {
        callback(res);
      });
    },

  }
