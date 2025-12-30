module.exports = {
  apps: [
    {
      name: 'team-portfolio',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/TeamPortfolio',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      max_memory_restart: '1G',
      max_restarts: 10,
      min_uptime: '10s',
      listen_timeout: 3000,
      kill_timeout: 5000,
      error_file: '/var/log/pm2/error.log',
      out_file: '/var/log/pm2/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    }
  ]
};
