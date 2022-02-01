#include <stdio.h>

#define ARRAY_SIZE 10

struct ArrSort {
    int arr[ARRAY_SIZE];
    int length;
};

void printArray(int arr[], unsigned int arrLength) {
    for (int i = 0; i < arrLength; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

void quickSort(int arr[], unsigned int arrSize) {
    if (arrSize == 1)
        return;

    printArray(arr, arrSize);

    int pivot = arrSize - 1;
    int pivotVal = arr[pivot];
    int lesser[arrSize];
    int lesserFreePosition = 0;
    int greater[arrSize];
    int greaterFreePosition = 0;
    // struct ArrSort 

    for (int i = 0; i < pivot; i++) {
        if (arr[i] <= arr[pivot]) {
            lesser[lesserFreePosition] = arr[i];
            ++lesserFreePosition;
        } else {
            greater[greaterFreePosition] = arr[i];
            ++greaterFreePosition;
        }
    }
    printf("Lesser free: %d\n", lesserFreePosition);
    printf("greater free: %d\n", greaterFreePosition);
    quickSort(lesser, lesserFreePosition + 1);
    quickSort(greater, greaterFreePosition + 1);

    for (int i = 0; i < lesserFreePosition; i++) {
        arr[i] = lesser[i];
    }
    arr[lesserFreePosition] = pivotVal;
    for (int i = 0; i < greaterFreePosition; i++) {
        arr[i + lesserFreePosition + 1] = greater[i];
    }
}

int main() {
    int arr[] = {7, 5, 6, 4, 2, 3, 8, 10, 1};
    int arrLength = sizeof(arr) / sizeof(arr[0]);
    printf("arr size: %d\n", arrLength);
    printArray(arr, arrLength);
    quickSort(arr, arrLength);
    printArray(arr, arrLength);
}
