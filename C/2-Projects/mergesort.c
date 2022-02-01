#include <stdio.h>

void merge(int arr[], int l, int m, int r) {
    for (int i = l; i < m; i++) {
        arr[i]
    }
}

void mergeSort(int arr[], int l, int r) {
    if (r > l) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
    }
}
