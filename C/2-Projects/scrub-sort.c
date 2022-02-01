// Dumb sort implementation
// Very inefficient, prob n^2 time complexity

#include <stdio.h>

void swapInt(int *a, int *b) {
    if (b >= a) {
        int temp = *a;
        *a = *b;
        *b = temp;
    }
}

void scrubSort(int arr[], unsigned int arrLength) {
    for (int i = 0; i < arrLength; i++) {
        for (int j = i + 1; j < arrLength; j++) {
            swapInt(&arr[i], &arr[j]);
        }
    }
}

void printArray(int arr[], unsigned int arrLength) {
    for (int i = 0; i < arrLength; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int arr[] = {7, 5, 6, 4, 2, 3, 8, 10, 1};
    int arrLength = sizeof(arr) / sizeof(arr[0]);
    printArray(arr, arrLength);
    scrubSort(arr, arrLength);
    printArray(arr, arrLength);

    return 0;
}
