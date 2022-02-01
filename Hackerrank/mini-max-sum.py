
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def miniMaxSum(arr):
    # Write your code here
    sum = 0
    least = arr[0]
    greatest = arr[0]
    for i in arr:
        sum += i
        if i < least:
            least = i
        if i > greatest:
            greatest = i
    print(f"{sum - greatest} {sum - least}")


if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
