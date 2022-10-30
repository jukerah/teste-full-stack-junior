module.exports = {
  apps : [{
    name: "teste-full-stack-junior",
    script: "./build/server.js",
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}