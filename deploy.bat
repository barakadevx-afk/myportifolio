@echo off
echo Initializing Git repository...
git init

echo Adding all files...
git add .

echo Creating initial commit...
git commit -m "Initial commit - Baraka DevX cybersecurity platform"

echo Setting main branch...
git branch -M main

echo Adding remote repository...
git remote add origin https://github.com/barakadevx-afk/myportifolio.git

echo Pushing to GitHub...
git push -u origin main

echo.
echo Deployment complete! Your website is now on GitHub.
echo.
pause
