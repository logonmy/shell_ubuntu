#include <stdio.h>
#include "./lib/string.h" //静态库对应函数的头文件


int main(int argc, char* argv[])
{
    char str[] = {"hello world"};
    unsigned long ulLength = 0;

    printf("The string is : %s\n", str);
    ulLength = Strlen(str);
    printf("The string length is : %d(use Strlen)\n", ulLength);
    ulLength = StrNlen(str, 10);
    printf("The string length is : %d(use StrNlen)\n", ulLength);

    return 0;
}
