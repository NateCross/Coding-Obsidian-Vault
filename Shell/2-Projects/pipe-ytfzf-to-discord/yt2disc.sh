#!/bin/bash

# This program seeks to use ytfzf to get a Youtube link
# then, the link is changed to a proper Youtube link
# which will be used to type in a command in Discord
# Thus, you can search a Youtube vid in command line and have it play
# through a Discord bot

# USAGE
# ./yt2disc.sh "name of video"

# If the command line argument is not supplied, it will prompt
# a search for a video. It is already enclosed in parentheses so
# you can search directly.

thumbviewer=

# The "-x" tests if the file is executable
if ! [ -x "$(command -v xdotool)" ]; then
    echo "No xdotool found.\nExiting..."
    exit 1
fi

if ! [ -x "$(command -v ytfzf)" ]; then
    echo "No ytfzf found.\nExiting..."
    exit 1
fi

if [ -x "$(command -v catimg)" ]; then
    thumbviewer=catimg
    echo "catimg not found. Disabling thumbnail support..."
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

original_link=$(ytfzf -t --thumb-viewer=${thumbviewer} -L "${userinput}")

if [ -z "$original_link" ]; then
    echo "Exiting..."
    exit 1
fi

# https://vid.puffyan.us/watch?v=dQw4w9WgXcQ
# The links produced by ytfzf result in that
# this is not supported by Discord bots
# Thus, it must be converted into a proper Youtube link

converted_link=$(echo $original_link | sed 's/vid\.puffyan\.us/youtube\.com/')
eval $(xdotool getmouselocation --shell)

xdotool windowactivate --sync $discord_window_id
xdotool mousemove 2335 710 click 1
xdotool type ";;play ${converted_link}"
xdotool key Return
xdotool windowactivate $original_focused_window
xdotool mousemove $X $Y     # Values taken from the eval

echo "Finished"
