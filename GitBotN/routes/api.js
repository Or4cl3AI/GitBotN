```javascript
const express = require('express');
const router = express.Router();

const gitController = require('../controllers/gitController');
const aiController = require('../controllers/aiController');

// Route for GitHub events
router.post('/github', gitController.handleGithubEvent);

// Route for AI interactions
router.post('/ai', aiController.handleUserInteraction);

module.exports = router;
```