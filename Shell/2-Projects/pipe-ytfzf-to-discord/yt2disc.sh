#!/bin/bash

# This program seeks to use ytfzf to get a Youtube link
# then, the link changed to a proper Youtube link
# which will be used to type in a command in Discord
# Thus, you can search a Youtube vid in command line and have it play
# through a Discord bot

# USAGE
#   -h                   help
#   "A video name"       Yeah

# The "-x" tests if the file is executable
if ! [ -x "$(command -v xdotool)" ]; then
    echo "No xdotool found.\nExiting..."
    exit 1
fi

if ! [ -x "$(command -v ytfzf)" ]; then
    echo "No ytfzf found.\nExiting..."
    exit 1
fi

# Credit: https://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux
RED='\033[0;31m'
BLUE='\033[0;34m'
NO_COLOR='\033[0m' # No Color

# We aim to get the current active window
# so that we can refocus after the script is done
original_focused_window=$(xdotool getactivewindow)

discord_window_id=$(xdotool search --class Discord | tail -1)

# MAIN DRIVER

if (( $# > 0 )); then
    userinput=$1
else
    echo -e "${RED}Enter Youtube video name: ${BLUE}"
    read userinput
    echo -e "${NO_COLOR}"
fi

original_link=$(ytfzf -L "${userinput}")

if [ -z "$original_link" ]; then
    echo "Exiting..."
    exit 1
fi

# https://vid.puffyan.us/watch?v=dQw4w9WgXcQ
# The links produced by ytfzf result in that
# this is not supported by Discord bots
# Thus, it must be converted into a proper Youtube link

converted_link=$(echo $original_link | sed 's/vid\.puffyan\.us/youtube\.com/')

xdotool windowactivate --sync $discord_window_id type ";;play ${converted_link}"
xdotool key Return
xdotool windowactivate $original_focused_window

echo "Finished"
