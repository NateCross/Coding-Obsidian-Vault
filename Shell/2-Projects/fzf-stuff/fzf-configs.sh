#!/bin/bash

# This shell script facilitates the use of
# the fzf program to jump to your config files
# and edit them directly using your preferred editor
# Works in Bash 4.0+ because it uses associative arrays
# Written by Nate Cross

usage="[PLEASE WRITE USAGE THANKS]

-h                          Brings up help
"

# configs=(
#     "Neovim $HOME/\\.config/nvim/init\\.lua"
#     "Zsh $HOME/\\.zshrc"
#     "Doom Emacs $HOME/\\.zshrc"
# )

if [ -x declare ]; then
    echo "ERROR: Cannot declare an associative array."
    exit 1
fi

declare -A configs=(
    ['Neovim']="$HOME/.config/nvim/init.lua"
    ['Zsh']="$HOME/.zshrc"
)

echo

# The proper way to check when we use declare for an array
if [ -z "${configs[@]+_}" ]; then
    echo 'ERROR: No "configs" environment variable found.'
    echo 'Please set configs as an array in your .bashrc/.zshrc'
    echo 'For example:'
    echo
    echo 'configs=(
    "Neovim $HOME/.config/nvim/init.lua"
    "Zsh $HOME/.zshrc"
    "Doom Emacs $HOME/.zshrc"
    )'
    exit 1
fi

config_name=()
# config_location=()

# for config in ${configs[@]}; do
#     config_location+=( $config )
# done

for config in ${!configs[@]}; do
    config_name+=( $config )
done

# selected=$(printf "%s\n" "${config_name[@]}" | fzf --preview "batcat --style=numbers --color=always --line-range :500 ${configs[{}]}" )
selected=$(printf "%s\n" "${config_name[@]}" | fzf)

if [ ! -n "${selected}" ]; then
    echo "Exiting..."
    exit 1
fi

"$EDITOR" "${configs[$selected]}"

