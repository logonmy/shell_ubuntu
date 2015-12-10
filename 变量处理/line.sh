#!/bin/bash
while read line
do
    num=`echo "$line" | awk '{print $1}'`
    
    lennum=${#num}
    
    lenline=${#line}

    echo "${line:$lennum:$lenline-$lennum}"
    #echo $line
done



#echo $linedone是不是一目了然？把上面的代码存入denu.sh文件中，为denu.sh加上可执行权限。原理是把每行的第一个单词去掉就可以了。用法如下：假设code.cpp.txt是从网上复制下来的带行号的代码，则使用如下的命令就可以去掉行号了：

#while read line  do  num=`echo "$line" | awk '{print $1}'`      lennum=${#num}  //#是将字符串长度取到   lenline=${#line}  echo "${line:$lennum:$lenline-$lennum}" //这里是对字符串中字符有选择的显示  
