#include <stdio.h>

int main()
{
    char color[10];
    printf("What's your favourite color? ");
    fgets(color, 10, stdin);
    printf("Your favourite color is %s", color);
    return 0;
}
