#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
    if (argc > 1) {
        char command[100];
        strcpy(command, "./yt2disc.sh");
        strcat(command, " \"");
        for (int i = 1; i <= argc; i++) {
            strcat(command, argv[i]);
        }
        strcat(command, "\"");
        system(command);
    }

    return 0;
}
