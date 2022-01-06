#!/bin/bash
# Taken from https://ryanstutorials.net/bash-scripting-tutorial/bash-variables.php
# A simple copy script

cp $1 $2

# Let's verify the copy worked

echo Details for $2
ls -lh $2
