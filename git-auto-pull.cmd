@echo off
set messagegit="%date% commit by %username%"
git pull
git add .
git commit -m messagegit
git push
pause