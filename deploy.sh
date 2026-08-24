#!/bin/bash
set -e

APP_DIR="/var/www/perfactworks"
APP_NAME="perfactworks"
BRANCH="main"

echo "🚀 Deploying $APP_NAME..."

cd $APP_DIR

echo "📥 Pulling latest code..."
git fetch origin
git reset --hard origin/$BRANCH

echo "📦 Installing dependencies..."
npm install --production=false

echo "🧹 Cleaning old build..."
rm -rf .next

echo "🏗️ Building Next.js..."
npm run build

echo "♻️ Restarting Next.js via PM2..."
pm2 reload ecosystem.config.js --update-env || pm2 start ecosystem.config.js

pm2 save

echo "🌐 Reloading Nginx..."
nginx -t
systemctl reload nginx

echo "✅ Deployment complete!"
echo "🌍 Live at: https://perfactworks.com"
