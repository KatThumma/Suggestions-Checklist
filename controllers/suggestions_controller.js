var express = require('express');
var router = express.Router();
var suggestion = require('../models/suggestions.js');

router.get('/', function(req,res){
    suggestion.all(function(suggestion_data){
        console.log(suggestion_data);
        res.render('index', {suggestion_data});
    })
})

router.put('suggestions/update',function(req,res){
    suggestion.update(req.body.suggestion_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

module.exports = router;