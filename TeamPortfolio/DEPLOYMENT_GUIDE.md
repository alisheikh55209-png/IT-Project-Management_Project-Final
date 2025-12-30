# Team Portfolio - Nginx Deployment Guide

## Prerequisites
- Ubuntu Server (18.04 or later)
- SSH access to the server
- Sudo privileges

## Automatic Deployment (Recommended)

### Step 1: Copy Files to Your Server
From your local machine (Windows), upload the project files to your Ubuntu server:

```powershell
# In PowerShell on your Windows machine
scp -r "TeamPortfolio" ubuntu@192.168.160.128:/home/ubuntu/
```

### Step 2: Run the Deployment Script
SSH into your server and execute the deployment script:

```bash
ssh ubuntu@192.168.160.128
cd ~/TeamPortfolio
chmod +x deploy.sh
./deploy.sh
```

The script will automatically:
- Install Node.js 18
- Install PM2 for process management
- Install dependencies with `npm install`
- Build the Next.js application with `npm run build`
- Configure Nginx as a reverse proxy
- Start your application
- Enable auto-restart on server reboot

## Manual Deployment Steps

If you prefer to deploy manually, follow these steps on your Ubuntu server:

### 1. Install Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Create Project Directory
```bash
sudo mkdir -p /var/www/TeamPortfolio
sudo chown $USER:$USER /var/www/TeamPortfolio
```

### 3. Copy Project Files
```bash
# Copy your files to the server
cp -r ~/TeamPortfolio/* /var/www/TeamPortfolio/
cd /var/www/TeamPortfolio
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Build the Application
```bash
npm run build
```

### 6. Install PM2
```bash
sudo npm install -g pm2
```

### 7. Start Application with PM2
```bash
pm2 start "npm start" --name "team-portfolio"
pm2 startup
pm2 save
```

### 8. Configure Nginx
Create or edit `/etc/nginx/sites-available/team-portfolio`:

```nginx
upstream team_portfolio {
    server 127.0.0.1:3000;
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
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 365d;
        add_header Cache-Control "public, immutable";
    }
}
```

### 9. Enable Nginx Configuration
```bash
sudo ln -sf /etc/nginx/sites-available/team-portfolio /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

## Verification

### Check Application Status
```bash
pm2 status
pm2 logs team-portfolio
```

### Check Nginx Status
```bash
sudo systemctl status nginx
```

### Test the Application
Open your browser and visit: `http://192.168.160.128`

## Useful PM2 Commands

```bash
# View application logs
pm2 logs team-portfolio

# Restart application
pm2 restart team-portfolio

# Stop application
pm2 stop team-portfolio

# Start application
pm2 start team-portfolio

# Restart with more memory
pm2 restart team-portfolio --max-memory-restart 1G

# Monitor in real-time
pm2 monit
```

## Useful Nginx Commands

```bash
# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Reload configuration (graceful)
sudo sudo systemctl reload nginx

# Check status
sudo systemctl status nginx
```

## Troubleshooting

### Application not running
```bash
pm2 logs team-portfolio
```

### Nginx not proxying correctly
```bash
sudo nginx -t
sudo systemctl status nginx
curl http://localhost:3000  # Check if app is running locally
```

### Port 3000 already in use
```bash
sudo lsof -i :3000
sudo kill -9 <PID>
```

### Check system resources
```bash
pm2 monit
htop
```

## SSL/HTTPS Setup (Optional)

To add HTTPS with Let's Encrypt:

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot certonly --nginx -d your-domain.com
```

Then update Nginx configuration with SSL certificates.

## Environment Variables

If you need environment variables, create `.env.production` in the project root:

```bash
# /var/www/TeamPortfolio/.env.production
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Backup & Recovery

Create regular backups of your project:

```bash
sudo tar -czf /backups/team-portfolio-$(date +%Y%m%d).tar.gz /var/www/TeamPortfolio
```

---

## Support

If you encounter any issues, check:
1. Application logs: `pm2 logs team-portfolio`
2. Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. System resources: `pm2 monit` and `htop`
