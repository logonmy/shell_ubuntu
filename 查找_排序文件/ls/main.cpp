#include <iostream>
#include <sys/types.h>
#include <dirent.h>
#include <sys/stat.h>
#include <stdio.h>
#include <time.h>
#include <stdlib.h>

#include <string.h>
#include <pwd.h>
#include <grp.h>

using namespace std;


void display_file(char * filename)
{
//d.最后文件所以信息可以打印
  passwd*  pw = getpwuid(stat.st_uid);
  group*  gr = getgrgid(stat.st_gid);
    printf("%2d %s %s %4ld", stat.st_nlink, pw->pw_name, gr->gr_name, stat.st_size);

    tm = localtime(&st.st_ctime);
    printf(" %04d-%02d-%02d %02d:%02d",tm->tm_year + 1900, tm->tm_mon + 1, tm->tm_mday, tm->tm_hour, tm->tm_min);

    printf(" %s\n", filename);
}

void display_dir(char * dirname)
{
    //获取目录文件描述符，并且读取目录信息，判断目录不为空则继续读取。
    //如果读取到的是目录，则递归调用，否则直接调用display_file()即可。
    DIR * dir = opendir(dirname);
    char *buf;
    while((dirent = readdir(dir)) != NULL)
    {
        strcpy(buf, dirname);
        strcat(buf, "/");
        strcat(buf, dirent->d_name);
        if(stat(buf, &stat))
        {
            perror("stat");
            return -1;
        }

        if(dirent->d_name[0] != '.')
            display_file(buf, dirent->d_name);
    }

}
int main(int argc, char **argv)
{
///获取文件argv[1]的属性信息，并保存在st结构体中：
    if(stat(argv[1], &st) < 0)
        {
            perror("stat");
            return -1;
        }
///2）判断是否是目录
    if((st.st_mode & S_IFMT) == S_IFDIR)
        display_dir(argv[1]);
    else
        display_file(argv[1]); //如果是文件则直接获取文件信息即可，如果是目录则要进入到目录中进行遍历，
                                        //我们封装两个函数display_file()和display_dir()来分别实现

///3）目录与文件的实现
    //    a.由属性信息获得文件的类型
    //    用stat结构体中的st_mode与掩码S_IFMT相与，得到文件类型：
    switch(st.st_mode & S_IFMT)
        {
        case S_IFREG:  printf("-");    break;
        case S_IFDIR:  printf("d");    break;
        case S_IFLNK:  printf("l");    break;
        case S_IFBLK:  printf("b");    break;
        case S_IFCHR:  printf("c");    break;
        case S_IFIFO:  printf("p");    break;
        case S_IFSOCK: printf("s");    break;
        }
     //b.由属性信息获得文件的可读写权限
    for(i = 8; i >= 0; i--)
        {
            if(st.st_mode & (1 << i))
            {
                switch(i%3)
                {
                case 2: printf("r"); break;
                case 1: printf("w"); break;
                case 0: printf("x"); break;
                }
            }
            else
                printf("-");
        }
    //c.由属性信息获得文件的owner和所在的group信息

    return 0;
}
