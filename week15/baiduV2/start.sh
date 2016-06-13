#!/bin/bash
#Author:chaimo
pm2 stop all
echo "success 在浏览器打开http://localhost:5000,访问主页。"
pm2 start ./bin/www --name "baidu"
sleep 3

maxCPU=95

while [ true ]
do
	#得到pid
	PID=`ps x|grep '[0-9].node./'|awk '{print $1}'`

	#判断node进程是否存在
	if [ ! '{$PID}' ]
	then
		echo "nodejs进程不存在，程序将退出"
		break
	fi
	
	#得到cpu使用率
	cpu1=`ps aux|grep $PID`
	#处理后的cpu使用率为0-100之间的数值
	cpu=`ps aux|grep $PID|awk 'NR==1'|awk '{print $3}'|cut -d . -f 1`
	echo "cpu使用率为$cpu%"
	#判断cpu使用率
	
	if [ "$cpu" -gt $maxCPU ]
	then
		echo "nodejs程序的cpu使用率已经超过95%，将会重启系统。"
		pm2 restart all
	else
		echo "nodejs程序cpu使用情况正常，20s后会再次检查"
	fi
	echo "****************分割线*************************"
	
	sleep 20s
	
done


