#!/bin/bash
clear

node asciiCommands.js "ESC[42;36H"
echo
node asciiCommands.js "ESC[1;22f"
echo
node asciiCommands.js "ESC[7A"
echo
node asciiCommands.js "ESC[18B"
echo
node asciiCommands.js "ESC[8C"
echo
node asciiCommands.js "ESC[27D"
echo
node asciiCommands.js "ESC[s"
echo
node asciiCommands.js "ESC[u"
echo
node asciiCommands.js "ESC[2J"
echo
node asciiCommands.js "ESC[K"
echo
node asciiCommands.js "[2;43;37;8;46;7;33;40m"
echo
node asciiCommands.js "ESC[=2h"
echo
node asciiCommands.js "ESC[=13l"
echo
