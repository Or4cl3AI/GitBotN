```javascript
const axios = require('axios');
const gitModel = require('../models/gitModel');

// GitHub API base URL
const baseURL = 'https://api.github.com';

// GitHub API token
const token = process.env.GITHUB_API_TOKEN;

// Axios instance for GitHub API
const github = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json',
  },
});

// Function to handle GitHub events
async function handleGitHubEvent(event, payload) {
  switch (event) {
    case 'pull_request':
      await handlePullRequestEvent(payload);
      break;
    case 'issues':
      await handleIssuesEvent(payload);
      break;
    // Add more cases as needed
    default:
      console.log(`Unhandled event: ${event}`);
  }
}

// Function to handle pull request events
async function handlePullRequestEvent(payload) {
  const pullRequest = payload.pull_request;
  const action = payload.action;

  // Save pull request data to MongoDB
  const prData = new gitModel.PullRequest({
    id: pullRequest.id,
    number: pullRequest.number,
    state: pullRequest.state,
    title: pullRequest.title,
    body: pullRequest.body,
    user: pullRequest.user.login,
    action,
  });

  await prData.save();
}

// Function to handle issues events
async function handleIssuesEvent(payload) {
  const issue = payload.issue;
  const action = payload.action;

  // Save issue data to MongoDB
  const issueData = new gitModel.Issue({
    id: issue.id,
    number: issue.number,
    state: issue.state,
    title: issue.title,
    body: issue.body,
    user: issue.user.login,
    action,
  });

  await issueData.save();
}

module.exports = {
  github,
  handleGitHubEvent,
};
```