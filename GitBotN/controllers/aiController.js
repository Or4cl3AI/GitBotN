```javascript
const express = require('express');
const router = express.Router();
const aiModel = require('../models/aiModel');

// Handle incoming messages from users
router.post('/message', async (req, res) => {
    try {
        const message = req.body.message;
        const response = await aiModel.processMessage(message);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

module.exports = router;
```