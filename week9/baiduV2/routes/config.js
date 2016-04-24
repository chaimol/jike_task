// config.js
/*var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : '127.0.0.1',       
  user     : 'root',              
  password : '123',       
  port: '3306',                   
  database: 'phplesson1'  
});
*/
function testconnect(newsid) {
    pool.getConnection(function(err, connection) {

        //测试
        var user_Select = "SELECT * FROM lesson1 WHERE newsid = ?";
        var user_Id = [newsid];
        connection.query(user_Select, user_Id, function(err, result) {
            console.log(result);
            var ajaxText = result;
            if (ajaxText.length == 0) {
                ajaxText = [{
                    newsid: '-1',
                    newstitle: '此项不存在'
                }];
            }
            console.log(ajaxText);
            res.send(ajaxText);
            return ajaxText.newsid;
            connection.release();
        });

        //测试

    });
}
module.exports.testconnect = testconnect;
