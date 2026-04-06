Write-Host "🚀 Baraka DevX Deployment Script" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

try {
    Write-Host "📋 Checking if Git is available..." -ForegroundColor Yellow
    $gitVersion = git --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Git found: $gitVersion" -ForegroundColor Green
    } else {
        Write-Host "❌ Git not found in PATH" -ForegroundColor Red
        Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
        exit 1
    }

    Write-Host "📁 Initializing Git repository..." -ForegroundColor Yellow
    git init

    Write-Host "➕ Adding all files..." -ForegroundColor Yellow
    git add .

    Write-Host "💾 Creating initial commit..." -ForegroundColor Yellow
    git commit -m "Initial commit - Baraka DevX cybersecurity platform"

    Write-Host "🌿 Setting main branch..." -ForegroundColor Yellow
    git branch -M main

    Write-Host "🔗 Adding remote repository..." -ForegroundColor Yellow
    git remote add origin https://github.com/barakadevx-afk/myportifolio.git

    Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
    git push -u origin main

    Write-Host "🎉 Deployment complete!" -ForegroundColor Green
    Write-Host "🌐 Your website is now live at: https://barakadevx-afk.github.io/myportifolio" -ForegroundColor Green
    
} catch {
    Write-Host "❌ Error occurred during deployment:" -ForegroundColor Red
    Write-Host $_ -ForegroundColor Red
    Write-Host "Please check your Git configuration and try again." -ForegroundColor Yellow
}

Write-Host "Press any key to continue..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
