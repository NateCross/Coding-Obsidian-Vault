# Setting Variables
### Syntax
```sh
# Setting a variable
variable=value
complexvar="Hello World"
sampledir=/etc
entries=$( ls /etc | wc -l ) # Command substitution
													   # It actually strips newlines, too

# Reading a variable
echo $variable $complexvar # prints value
ls $sampledir
```
- Bash is case-sensitive.
- When assigning variables, you do not need the $.
	- You only use $ when reading a variable.
<mark style="background: #FFF3A3A6;">	- There are also no spaces before and after the equals sign.</mark> 
- Prefer uppercase for environment variables; lowercase for local.
<mark style="background: #FFF3A3A6;">- Note on double quotes and single quotes</mark> 
	- Single quotes treat every character literally.
	- Double quotes allow for substitution (like including variables within its setting)
# Special Variables
[Source](https://ryanstutorials.net/bash-scripting-tutorial/bash-variables.php)
- **$0** - The name of the Bash script.
- **$1 - $9** - The first 9 arguments to the Bash script. (As mentioned above.)
- **$#** - How many arguments were passed to the Bash script.
- **$@** - All the arguments supplied to the Bash script.
- **$?** - The exit status of the most recently run process.
- **\$\$** - The process ID of the current script.
- **$USER** - The username of the user running the script.
- **$HOSTNAME** - The hostname of the machine the script is running on.
- **$SECONDS** - The number of seconds since the script was started.
- **$RANDOM** - Returns a different random number each time is it referred to.
- **$LINENO** - Returns the current line number in the Bash script.

# Exporting
- Variables are only valid locally, in the process they were created in.
- To use in another script or something, we must do
```sh
export var1
./script2.sh
```
- See full example from website below

**script1.sh**
```sh
#!/bin/bash
# demonstrate variable scope 1.

var1=blah
var2=foo

# Let's verify their current value

echo $0 :: var1 : $var1, var2 : $var2

export var1
./script2.sh

# Let's see what they are now

echo $0 :: var1 : $var1, var2 : $var2
```

**script2.sh**
```sh
#!/bin/bash
# demonstrate variable scope 2

# Let's verify their current value

echo $0 :: var1 : $var1, var2 : $var2

# Let's change their values

var1=flop
var2=bleh
```

*output*
```sh
script1.sh :: var1 : blah, var2 : foo
script2.sh :: var1 : blah, var2 :
script1.sh :: var1 : blah, var2 : foo
```
- script1.sh, after the values were changed in script2.sh, did not change.
- Exporting is necessary to have it changed.