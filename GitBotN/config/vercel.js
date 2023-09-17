// GitBotN/config/vercel.js

module.exports = {
  env: {
    NODE_ENV: "production",
    PORT: 3000,
    MONGODB_URI: process.env.MONGODB_URI,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    AI_API_KEY: process.env.AI_API_KEY,
  },
  build: {
    env: {
      NODE_ENV: "development",
    },
  },
  deploy: {
    env: {
      NODE_ENV: "production",
    },
  },
};
