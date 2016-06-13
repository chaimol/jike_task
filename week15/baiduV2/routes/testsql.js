//使用nodejs 的MySQL库，直接管理MySQL数据库
//2015/12/12  @chaimol
//使用连接池方法连接数据库

var mysql = require('mysql');

var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: '3306',
    database: 'phplesson1'
});

pool.getConnection(function(err, connection) {
    //查询全部
    // connection.query( 'SELECT * FROM lesson1;', function(err, result) {    
    //     console.log(result);
    //     res.render(result);
    //     connection.release();
    // });
    /*        //查
        connection.query( 'SELECT * FROM lesson1 WHERE newsid=5;', function(err, result) {
            
            console.log(result);
            
            connection.release();
        });
           //增加
        var userAddSql = "INSERT INTO lesson1(`newsid`,`newstitle`,`newstime`,`newscontent`,`newstype`)VALUES('2',?,?,?,?)";
        var useADDcontent = ['我是新插入的','2015-1-6','测试测试测试','2'];
        connection.query("set names 'utf-8'");
        connection.query(userAddSql,useADDcontent,function(err,result){
          if(err){
            console.log('insert error-',err.message);
            return;
          }

          console.log("insert",result);
         connection.release();
        });

    */ //改
    var userModSql = 'UPDATE lesson1 SET newstitle = ?,newstime=?,newscontent=?,newstype=? WHERE newsid = 5';
    var userModSql_Params = ['更新后的内容', '2015-1-1', '我是更新后的', '5'];
    connection.query(userModSql, userModSql_Params, function(err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            return;
        }
        connection.release();
    });

    /*          //删
    var  userDelSql = 'DELETE FROM lesson1 WHERE newsid=2';
    connection.query(userDelSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        

       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
       connection.release();
    });

*/

});
//连接池使用示例源码
