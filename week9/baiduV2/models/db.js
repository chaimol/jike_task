// db.js
//News.js
var express = require('express');
var mysql = require('mysql');
var DB_NAME = 'phplesson1';
var dbSQl = require('./db.json');
var pool = mysql.createPool(dbSQl);

pool.on('connection', function(connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});
var numSelect = true;

function News(news) {
    news.newsid = news.newsid;
    news.newstype = news.newstype;
    news.newstitle = news.newstitle;
    news.newstime = news.newstime;
    news.newscontent = news.newscontent;
}
module.exports = News;
pool.getConnection(function(err, connection) {
    connection.query("set names 'utf-8'");
    var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function(err) {
        if (err) {
            console.log("USE Error: " + err.message);
            return;
        }
        console.log('USE succeed');
    });
    //判断是否存在该项
    News.exist = function exist(news, callback) {
            var News = {newsid:news.newsid};
            var userSelSql = "SELECT * FROM lesson1 WHERE newsid= ?";
            var userSelSql_Params = [News.newsid];
            connection.query(userSelSql, userSelSql_Params, function(err, result) {
                if (err) {
                    console.log("userSelSql Error: " + err.message);
                    numSelect = false;
                    //return;
                }
                console.log("invoked[select]" + result);
                var ajaxText = result;
                if (ajaxText.length == 0) {
                    numSelect = false;
                } else {
                    numSelect = true;
                }
                callback(err, numSelect);
            });
        }
        //增加数据
    News.add = function add(news, callback) {
        var News = {
            newsid: news.newsid,
            newstype: news.newstype,
            newstitle: news.newstitle,
            newstime: news.newstime,
            newscontent: news.newscontent
        };
        var userAddSql = "INSERT INTO lesson1(`newsid`,`newstitle`,`newstime`,`newscontent`,`newstype`)VALUES(?,?,?,?,?)";
        var useADDcontent = [News.newsid, News.newstitle, News.newstime, News.newscontent, News.newstype];
        connection.query("set names 'utf-8'");
        connection.query(userAddSql, useADDcontent, function(err, result) {
            if (err) {
                console.log("userAddSql Error: " + err.message);
            }
            //console.log("invoked[save]" + result);
            callback(err, result);
        });
    };
    //删除数据
    News.del = function del(news, callback) {
        var News = {
            newsid: news.newsid,
        };
        var userDelSql = "DELETE FROM lesson1 WHERE newsid = ?";
        var userDelSql_Params = [News.newsid];
        connection.query(userDelSql, userDelSql_Params, function(err, result) {
            if (err) {
                console.log("userDelSql Error: " + err.message);
                return;
            }
            console.log("invoked[del]");
            callback(err, result);
        });
    };
    //更改数据
    News.update = function update(news, callback) {
        var News = {
            newsid: news.newsid,
            newstype: news.newstype,
            newstitle: news.newstitle,
            newstime: news.newstime,
            newscontent: news.newscontent
        };

        var userModSql = 'UPDATE lesson1 SET newstitle = ?,newstime=?,newscontent=?,newstype=? WHERE newsid = ?';
        var userModSql_Params = [News.newstitle, News.newstime, News.newscontent, News.newstype, News.newsid];
        connection.query(userModSql, userModSql_Params, function(err, result) {
            if (err) {
                console.log("userModSql Error: " + err.message);
                return;
            }
            console.log("invoked[update]" + result);
            callback(err, result);
        });
    };
    //查询全部数据
    News.select = function select(news, callback) {
        var userSelSql = "SELECT * FROM lesson1";
        connection.query(userSelSql, function(err, result) {
            if (err) {
                console.log("userSelSql Error: " + err.message);
            }
           // console.log("invoked[select]" + result);
            callback(err, result);
        });
    };
    //查询单项数据
    News.selectOne = function select(news, callback) {
        var News = {
            newsid: news.newsid,
            newstype:news.newstype,
        };
        var userSelSql = "SELECT * FROM lesson1 WHERE newstype=?";
        var userSelSql_Params = [News.newstype];
        connection.query(userSelSql, userSelSql_Params, function(err, result) {
            if (err) {
                console.log("userSelSql Error: " + err.message);
                //return;
            }
            //console.log("invoked[select]" + result);
            callback(err, result);
        });
    };



});
