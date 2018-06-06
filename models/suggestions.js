var orm = require('../config/orm.js');

var suggestion = {
    all: function(cb){
        orm.all('suggestions',function(res){
            cb(res);
        })
    },

    update: function(id,cb){
        orm.update('suggestions',id,cb);
    },

    create: function(name,cb){
        orm.create('suggestions', name, cb);
    }
}

module.exports = suggestion;