module.exports = {
  apps: [{
    name: 'perfactworks',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/perfactworks',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
