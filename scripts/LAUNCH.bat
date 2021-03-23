@echo off

set app="%CD%/../app.js"
set node_loc="%1"

cd "%node_loc%"

node %app%