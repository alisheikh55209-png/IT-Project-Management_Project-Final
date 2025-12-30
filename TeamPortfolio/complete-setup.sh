#!/bin/bash

# Complete Nginx Deployment Setup for Ubuntu
# Run this script once on your Ubuntu server to configure everything

set -e

echo "======================================"
echo "Team Portfolio - Complete Setup"
echo "======================================"

# 1. Update and install necessary packages
echo "Step 1: Installing packages..."
sudo apt-get update
sudo apt-get install -y curl wget git nginx

# 2. Install Node.js 18
echo "Step 2: Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Install PM2 globally
echo "Step 3: Installing PM2..."
sudo npm install -g pm2

# 4. Create project directory
echo "Step 4: Creating project directory..."
sudo mkdir -p /var/www/TeamPortfolio
sudo chown -R $USER:$USER /var/www/TeamPortfolio

# 5. Copy Nginx configuration
echo "Step 5: Configuring Nginx..."
sudo cp nginx-config.conf /etc/nginx/sites-available/team-portfolio
sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -sf /etc/nginx/sites-available/team-portfolio /etc/nginx/sites-enabled/team-portfolio

# 6. Test Nginx config
echo "Step 6: Testing Nginx configuration..."
sudo nginx -t

# 7. Start Nginx
echo "Step 7: Starting Nginx..."
sudo systemctl start nginx
sudo systemctl enable nginx

# 8. Build and start application
echo "Step 8: Installing dependencies and building..."
npm install
npm run build

echo "Step 9: Starting application with PM2..."
pm2 delete team-portfolio 2>/dev/null || true
pm2 start "npm start" --name "team-portfolio"
pm2 startup
pm2 save

# 10. Reload Nginx
echo "Step 10: Reloading Nginx..."
sudo systemctl reload nginx

echo ""
echo "======================================"
echo "✓ Deployment Complete!"
echo "======================================"
echo ""
echo "Your application is now running at:"
echo "→ http://192.168.160.128"
echo ""
echo "Check status with:"
echo "  pm2 status"
echo "  pm2 logs team-portfolio"
echo "======================================"
