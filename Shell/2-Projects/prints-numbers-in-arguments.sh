#!/bin/bash

# Pass stuff as arguments and I'll pass it to the echo thing to print

var1=$1
var2=$2
var3=$3
var4=$4
var5=$5
var6=$6
var7=$7
var8=$8
var9=$9

export var1 var2 var3 var4 var5 var6 var7 var8 var9
./echo-stuff-you-export-into-me.sh
