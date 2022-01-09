#!/bin/bash
# This script returns a random word from the dictionary

# RANDOM=$$ # RANDOM must be initialized this way to work

# Looking for dictionary
if test -f /usr/dict/words
then
    dictionary=/usr/dict/words
elif test -f /usr/share/dict/words
then
    dictionary=/usr/share/dict/words
else
    echo "Dictionary not found."
    exit
fi

# Uses the dictionary as input directed to word count, lines
numberofwords=$( wc -l < $dictionary )

# Shuf generates a random number larger than $RANDOM
# This is used because dictionaries have a larger num of words
# than the limit of $RANDOM
generatednum=$( shuf -i 1-$numberofwords -n 1 )

randomword=$( cat $dictionary | head -$generatednum | tail -1 )
echo "Your word of the day is..."
echo $randomword

# If there is the dict app, it gets the dictionary definition
if [ -x "$(command -v dict -d gcide)" ]
then
    dict -d gcide $randomword
fi

