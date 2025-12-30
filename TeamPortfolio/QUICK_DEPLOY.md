# TeamPortfolio Deployment Instructions

## Quick Start - Copy & Paste Commands

### On Your Ubuntu Server (192.168.160.128):

**Step 1: Navigate to your web directory**
```bash
cd /var/www/TeamPortfolio
```

**Step 2: Copy the complete-setup.sh from your TeamPortfolio folder, then run:**
```bash
chmod +x complete-setup.sh
./complete-setup.sh
```

OR run these commands one by one:

### Manual Setup (Step by Step)

**1. Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**2. Install Nginx and PM2**
```bash
sudo apt-get update
sudo apt-get install -y nginx
sudo npm install -g pm2
```

**3. Create project directory**
```bash
sudo mkdir -p /var/www/TeamPortfolio
cd /var/www/TeamPortfolio
```

**4. Copy your project files here** (via FTP, SFTP, or SCP)

**5. Install dependencies**
```bash
npm install
```

**6. Build the Next.js application**
```bash
npm run build
```

**7. Configure Nginx**
```bash
# Copy the nginx-config.conf to Nginx
sudo cp nginx-config.conf /etc/nginx/sites-available/team-portfolio

# Remove default site
sudo rm -f /etc/nginx/sites-enabled/default

# Enable your site
sudo ln -sf /etc/nginx/sites-available/team-portfolio /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Start/restart Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

**8. Start your application with PM2**
```bash
pm2 start "npm start" --name "team-portfolio"
pm2 startup
pm2 save
```

**9. Reload Nginx**
```bash
sudo systemctl reload nginx
```

---

## Verification

Check if everything is working:

```bash
# Check PM2 status
pm2 status

# View application logs
pm2 logs team-portfolio

# Check Nginx status
sudo systemctl status nginx

# Test locally
curl http://localhost:3000
```

Visit `http://192.168.160.128` in your browser - you should see your portfolio!

---

## Common Issues & Solutions

### Application won't start
```bash
pm2 logs team-portfolio
# Check for error messages and fix them
```

### Nginx shows "Connection refused"
```bash
# Make sure app is running
pm2 status

# Restart it
pm2 restart team-portfolio
```

### Port 3000 already in use
```bash
sudo lsof -i :3000
sudo kill -9 <PID>
pm2 restart team-portfolio
```

### Permission denied errors
```bash
# Fix permissions
sudo chown -R ubuntu:ubuntu /var/www/TeamPortfolio
```

---

## File Locations

- **Application**: `/var/www/TeamPortlolio`
- **Nginx config**: `/etc/nginx/sites-enabled/team-portfolio`
- **PM2 logs**: `.pm2/logs/`
- **Nginx logs**: `/var/log/nginx/`

---

## Useful Commands

```bash
# View all PM2 processes
pm2 status

# Watch logs in real-time
pm2 logs team-portfolio

# Restart application
pm2 restart team-portfolio

# Stop application
pm2 stop team-portfolio

# Restart Nginx
sudo systemctl restart nginx

# View Nginx errors
sudo tail -f /var/log/nginx/error.log
```

---

## Next Steps

Once deployed:
1. Verify all pages load correctly at http://192.168.160.128
2. Check the console for any JavaScript errors
3. Test all links and functionality
4. Configure SSL/HTTPS (optional but recommended)

---

**Need help?** Check the logs:
- Application: `pm2 logs team-portfolio`
- Server: `sudo tail -f /var/log/nginx/error.log`
