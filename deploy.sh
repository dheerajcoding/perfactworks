#!/bin/bash
set -e

APP_DIR="/var/www/perfactworks"
APP_NAME="perfactworks"
BRANCH="main"

echo "🚀 Deploying $APP_NAME..."

cd $APP_DIR

echo "📥 Pulling latest code from GitHub..."
git fetch origin
git reset --hard origin/$BRANCH

echo "📦 Installing dependencies..."
npm install --production=false

echo "🧹 Cleaning old build cache..."
rm -rf .next

echo "🏗️ Building Next.js with static CSS generation..."
npm run build

echo "🔒 Setting full read permissions for Nginx..."
chmod -R 755 .next public

echo "♻️ Restarting PM2 process cleanly..."
pm2 restart $APP_NAME --update-env 2>/dev/null || pm2 start ecosystem.config.js

pm2 save

echo "🌐 Reloading Nginx web server..."
nginx -t
systemctl reload nginx

echo "✅ Deployment complete!"
echo "🌍 Live at: https://perfactworks.com"
