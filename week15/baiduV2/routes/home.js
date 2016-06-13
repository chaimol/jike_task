// home.js
//网站主页
var express = require('express');
var router = express.Router();
var dbSQL = require('../models/db.json');
router.get('/', function(req, res) {
    res.render('home', {});
});
router.get('/news', function(req, res, next) {
    var newstype = req.query.newstype;
    newstype = Number(newstype);
    var mysql = require('mysql');
    console.log("类型是" + typeof(newstype));
    console.log(newstype);
    var connection = mysql.createConnection(dbSQL);
    connection.connect(function(err) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        console.log('[connection connect]  succeed!');
    });

    //test  
    var selTxt = [newstype];
    var selSel = "SELECT * FROM lesson1 WHERE newstype = ?";

    connection.query(selSel, selTxt, function(err, result) {
        if (err) {
            return;
        }
        // console.log(result);
        var aText = result;
        res.send(aText);

    });
    connection.end();
});

module.exports = router;
