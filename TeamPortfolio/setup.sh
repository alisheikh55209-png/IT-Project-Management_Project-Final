#!/bin/bash

# Quick Nginx Deployment - Copy this entire folder to /var/www/TeamPortfolio
# Then run these commands on your Ubuntu server:

set -e

PROJECT_DIR="/var/www/TeamPortfolio"

echo "Installing dependencies..."
cd $PROJECT_DIR
npm install

echo "Building application..."
npm run build

echo "Starting application..."
pm2 delete team-portfolio 2>/dev/null || true
pm2 start "npm start" --name team-portfolio

echo "Done! Your app is running at http://192.168.160.128"
pm2 status
