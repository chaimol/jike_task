index.php  baidu新闻首页  主页面
login.php  百度新闻管理登录页面 >-登陆后跳转到sql.php
sql.php   baidu新闻管理页面

使用前先导入lesson1（新闻内容数据库）和userinfo(用户名密码数据库)。

更改的内容为：
1.更改query连接为mysqli连接，采用预处理。
2.采用php的过滤器函数。
3.在前后台同时增加了用户名和密码校验正则表达式。启用MD5加密用户密码。
4.采用了php的htmlspecialchars()函数过滤实体符号，防治xss攻击。
5.添加隐藏的token防止csrf攻击
6.启用session。后台管理界面，非登录用户无法管理后台数据。
7.启用addslashes() 函数，转义” ’ \  null解决了有这类符号时，无法插入的问题。


http://www.111cn.net/phper/30/PHP-Session-0606.htm 
XSS: php htmlspecialchars() 
CSRF: http://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html 
http://rrylee.github.io/2015/10/15/php-csrf-quick-and-useful/