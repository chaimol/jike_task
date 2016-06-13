// control.js
//后台数据管理
var express = require('express');
var router = express.Router();
var dbSQL = require('../models/db.json'); //请求数据库的设置信息，用户名，端口，密码等
var News = require('../models/db.js'); //数据库操作
/*后台管理*/
router.get('/', function(req, res) {
    res.render('control', {
        text: ""
    });
});
router.get('/newsid', function(req, res, next) {
    var
        newsid = req.query.newsid,
        newstype = req.query.newstype,
        newstime = req.query.newstime,
        newstitle = req.query.newstitle,
        newscontent = req.query.newscontent,
        newslesson = req.query.lesson,
        newsid = Number(newsid),
        newslesson = Number(newslesson);
    var News1 = {
        newsid: newsid,
        newstype: newstype,
        newstime: newstime,
        newstitle: newstitle,
        newscontent: newscontent
    };
    //console.log("control接口的id" + newsid);

    News.exist(News1, function(err, result) {
        idExist = result;
        console.log("idExist" + idExist);
    });
    switch (newslesson) {
        case 1: //添加
            News.add(News1, function(err, result) {
                if (err) {
                    console.log('插入错误', err.message);
                    addText = [{
                        newsid: "第" + newsid + "条已存在",
                        newstitle: "添加失败",
                        newstime: "insert error",
                        newstype: newstype
                    }];
                    res.send(addText);
                    return;
                }
                addText = [{
                    newsid: "成功添加条目" + News1.newsid,
                    newstitle: newstitle,
                    newstype: newstype,
                    newstime: newstime
                }];
                res.send(addText);
            });
            break;
        case 2: //删除
        //console.log("外部的存在" + idExist);
            News.del(News1, function(err, result) {
                console.log(result+"from del");
                if (!idExist) {
                    delText = [{
                        newsid: "条目" + newsid + "不存在",
                        newstitle: "请先查询已有条目后再删除",
                        newstime: "删除失败",
                        newstype: ""
                    }];
                } else {
                    delText = [{
                        newsid: "成功删除第" + newsid + "条",
                        newstitle: "",
                        newstime: "",
                        newstype: ""
                    }];
                }
                res.send(delText);
            });
            break;
        case 3: //更改
            News.update(News1, function(err, result) {
                if (err||!idExist) {
                    updateText = [{
                        newsid: "条目" + newsid + "不存在",
                        newstitle: "请先查询已有条目后再更新",
                        newstime: "更新失败",
                        newstype: ""
                    }];
                } else {
                    updateText = [{
                        newsid: "成功更新条目" + newsid,
                        newstype: newstype,
                        newstitle: newstitle,
                        newstime: newstime
                    }];
                }
                res.send(updateText);
            });
            break;
        case 4: //按类型查询
            News.selectOne(News1, function(err, result) {
                if (err) {
                    console.log("control的错误" + err);
                }
                if (result.length == 0) {
                    result = [{
                        newsid: "该类型不存在",
                        newstype: "newstype",
                        newstitle: "select error  donot exist this type news",
                        newstime: ""
                    }];
                }
                res.send(result);
            });
            break;
        case 5: //查询全部
            News.select(News1, function(err, result) {
                if (err) {
                    console.log("查询错误" + err);
                }
                res.send(result);
            });
            break;
        default:
            break;
    }

});
module.exports = router;
