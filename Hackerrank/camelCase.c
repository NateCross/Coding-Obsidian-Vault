// https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem?h_l=interview&h_r=next-challenge&h_v=zen&isFullScreen=true&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

#define UPPERCASE "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

void switchCase(char *letter)
{
    if ('A' <= *letter && *letter <= 'Z')
        *letter += 32;
    else
        *letter -= 32;
}

int main()
{

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */

    // char *line = NULL;
    char line[256];
    size_t lineLength = 0;
    fgets(line, 256, stdin);
    // getline(&line, &lineLength, stdin);
    char *operation = strtok(line, ";");
    char *type = strtok(NULL, ";");
    char *name = strtok(NULL, ";");

    int matchedChar;
    char finalString[256] = "";

    if (strcmp(operation, "S") == 0) {
        while (*name) {
            if (*name == '\n')
                break;
            if ('A' <= *name && *name <= 'Z')
                switchCase(&(*name));
            strncat(finalString, name, 1);
            if ('A' <= *(name+1) && *(name+1) <= 'Z')
                strncat(finalString, " ", 2);
            else if (*(name+1) == '(')
                break;
            ++name;
        }
    } else {
        if (strcmp(type, "C") == 0)
            switchCase(&(*name));
        while (*name) {
            if (*name == '\n')
                break;
            if (*name == ' ') {
                ++name;
                switchCase(&(*name));
            }
            strncat(finalString, name, 1);
            ++name;
        }
        if (strcmp(type, "M") == 0)
            strncat(finalString, "()", 3);
    }
    strncat(finalString, "\0", 1);

    printf("%s\n", finalString);

    // free(line);
    return 0;
}
