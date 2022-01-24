# Template given in the book
# NOTE: After some checking, the logic is okay
# but the presentation of the data is not exactly correct

import random

numberOfStreaks = 0
streakCounter = 0
for experimentNumber in range(10000):
    headsOrTails = []
    for i in range(100):
        headsOrTails.append(random.randint(0, 1))
        if i == 0:
            pass
        elif headsOrTails[i] == headsOrTails[i - 1]:
            streakCounter += 1
            if streakCounter == 6:
                numberOfStreaks += 1
                streakCounter = 0
        else:
            streakCounter = 0



    # Code that creates a list of 100 'heads' or 'tails' values.

    # Code that checks if there is a streak of 6 heads or tails in a row.
print(numberOfStreaks)
print('Chance of streak: %s%%' % (numberOfStreaks / (100*10000)))
