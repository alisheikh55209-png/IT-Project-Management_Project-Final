#!/bin/bash

# Team Portfolio Deployment Script for Ubuntu/Nginx
# This script automates the deployment of the Next.js application

set -e

echo "=========================================="
echo "Team Portfolio Deployment Script"
echo "=========================================="

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="team-portfolio"
PROJECT_DIR="/var/www/TeamPortfolio"
APP_PORT=3000
NODE_VERSION="18"

echo -e "${BLUE}Step 1: Updating system packages...${NC}"
sudo apt-get update
sudo apt-get upgrade -y

echo -e "${BLUE}Step 2: Installing Node.js and npm...${NC}"
curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
sudo apt-get install -y nodejs

echo -e "${BLUE}Step 3: Installing PM2 globally...${NC}"
sudo npm install -g pm2

echo -e "${BLUE}Step 4: Checking if project directory exists...${NC}"
if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "${YELLOW}Creating project directory...${NC}"
    sudo mkdir -p $PROJECT_DIR
    sudo chown $USER:$USER $PROJECT_DIR
fi

echo -e "${BLUE}Step 5: Installing project dependencies...${NC}"
cd $PROJECT_DIR
npm install

echo -e "${BLUE}Step 6: Building Next.js application...${NC}"
npm run build

echo -e "${BLUE}Step 7: Creating Nginx configuration...${NC}"
sudo tee /etc/nginx/sites-available/team-portfolio > /dev/null <<EOF
upstream team_portfolio {
    server 127.0.0.1:${APP_PORT};
}

server {
    listen 80;
    listen [::]:80;
    server_name _;

    client_max_body_size 10M;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json;

    location / {
        proxy_pass http://team_portfolio;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 365d;
        add_header Cache-Control "public, immutable";
    }
}
EOF

echo -e "${BLUE}Step 8: Enabling Nginx configuration...${NC}"
sudo ln -sf /etc/nginx/sites-available/team-portfolio /etc/nginx/sites-enabled/

# Remove default site if it exists
if [ -L /etc/nginx/sites-enabled/default ]; then
    sudo rm /etc/nginx/sites-enabled/default
fi

echo -e "${BLUE}Step 9: Testing Nginx configuration...${NC}"
sudo nginx -t

echo -e "${BLUE}Step 10: Restarting Nginx...${NC}"
sudo systemctl restart nginx

echo -e "${BLUE}Step 11: Starting application with PM2...${NC}"
cd $PROJECT_DIR
pm2 delete $PROJECT_NAME 2>/dev/null || true
pm2 start "npm start" --name $PROJECT_NAME --max-memory-restart 1G

echo -e "${BLUE}Step 12: Setting up PM2 to restart on server reboot...${NC}"
pm2 startup -u $USER --hp /home/$USER
pm2 save

echo ""
echo -e "${GREEN}=========================================="
echo "Deployment Complete!"
echo "=========================================="
echo -e "${GREEN}Your application is running at: http://192.168.160.128${NC}"
echo -e "${GREEN}PM2 Application: ${NC}${BLUE}$PROJECT_NAME${NC}"
echo ""
echo "Useful commands:"
echo "  - Check status:      pm2 status"
echo "  - View logs:         pm2 logs $PROJECT_NAME"
echo "  - Restart app:       pm2 restart $PROJECT_NAME"
echo "  - Stop app:          pm2 stop $PROJECT_NAME"
echo "  - Restart Nginx:     sudo systemctl restart nginx"
echo "=========================================="
