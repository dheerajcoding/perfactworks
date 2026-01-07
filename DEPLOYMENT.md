# PerfactWorks - VPS Deployment Guide

## Pre-requisites
- VPS Access: `ssh root@72.62.192.33`
- Domain: perfactworks.online

## Step 1: Connect to VPS
```bash
ssh root@72.62.192.33
```

## Step 2: Install Node.js & PM2
```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verify installation
node -v
npm -v

# Install PM2 globally
npm install -g pm2
```

## Step 3: Install Nginx
```bash
apt install -y nginx

# Enable and start Nginx
systemctl enable nginx
systemctl start nginx
```

## Step 4: Create Project Directory
```bash
mkdir -p /var/www/perfactworks
cd /var/www/perfactworks
```

## Step 5: Upload Project Files (From Local Machine)
```powershell
# On your local machine, compress the project
cd "C:\Users\int0003\OneDrive - REDDINGTON GLOBAL CONSULTANCY PRIVATE LIMITED\Desktop\prftwk"
tar -czf perfactworks.tar.gz --exclude=node_modules --exclude=.next --exclude=.git .

# Upload to VPS using SCP
scp perfactworks.tar.gz root@72.62.192.33:/var/www/perfactworks/
```

## Step 6: Extract & Install Dependencies (On VPS)
```bash
cd /var/www/perfactworks
tar -xzf perfactworks.tar.gz
rm perfactworks.tar.gz

# Install dependencies
npm install

# Build for production
npm run build
```

## Step 7: Configure PM2
```bash
# Start the app with PM2
pm2 start ecosystem.config.js

# Save PM2 process list
pm2 save

# Setup PM2 to start on boot
pm2 startup
# Run the command it outputs

# Check status
pm2 status
pm2 logs perfactworks
```

## Step 8: Configure Nginx
```bash
# Create Nginx configuration
nano /etc/nginx/sites-available/perfactworks
```

Paste this configuration:
```nginx
server {
    listen 80;
    server_name perfactworks.online www.perfactworks.online;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:
```bash
ln -s /etc/nginx/sites-available/perfactworks /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

## Step 9: Install SSL Certificate (Optional but Recommended)
```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot --nginx -d perfactworks.online -d www.perfactworks.online

# Follow the prompts and select option 2 to redirect HTTP to HTTPS
```

## Step 10: Configure Firewall
```bash
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

## Useful Commands

### PM2 Management
```bash
pm2 restart perfactworks    # Restart app
pm2 stop perfactworks        # Stop app
pm2 start perfactworks       # Start app
pm2 delete perfactworks      # Delete app
pm2 logs perfactworks        # View logs
pm2 monit                    # Monitor resources
```

### Update Deployment
```bash
cd /var/www/perfactworks
git pull origin main         # If using Git
# OR upload new files via SCP
npm install
npm run build
pm2 restart perfactworks
```

### Check App Status
```bash
pm2 status
curl http://localhost:3000   # Test local access
systemctl status nginx        # Check Nginx status
```

### View Logs
```bash
pm2 logs perfactworks --lines 100
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

## Troubleshooting

### If app won't start:
```bash
pm2 logs perfactworks
# Check for errors and missing dependencies
```

### If domain not accessible:
```bash
# Check Nginx config
nginx -t

# Check if app is running
pm2 status

# Check firewall
ufw status
```

### Port already in use:
```bash
# Find process using port 3000
lsof -i :3000

# Kill process if needed
kill -9 <PID>
```

## Performance Optimization

### Enable Gzip in Nginx
Add to Nginx config inside `http` block:
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;
```

### PM2 Auto-restart on High Memory
Already configured in ecosystem.config.js with `max_memory_restart: '1G'`

## Done!
Your website should now be live at: https://perfactworks.online
