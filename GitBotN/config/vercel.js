// GitBotN/config/vercel.js

module.exports = {
  env: {
    NODE_ENV: 'production',
    PORT: 3000,
    MONGODB_URI: 'your_mongodb_uri',
    GITHUB_TOKEN: 'your_github_token',
    AI_API_KEY: 'your_ai_api_key'
  },
  build: {
    env: {
      NODE_ENV: 'development'
    }
  },
  deploy: {
    env: {
      NODE_ENV: 'production'
    }
  }
};