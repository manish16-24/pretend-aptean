module.exports = {
  apps: [
    {
      name: 'Pretend-aptean',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
      }
    }
  ]
};
