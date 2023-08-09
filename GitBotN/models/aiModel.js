```javascript
const mongoose = require('mongoose');

// Define the AI model schema
const aiSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  conversation: [{
    message: String,
    timestamp: Date
  }]
}, {
  timestamps: true
});

// Export the AI model
module.exports = mongoose.model('AI', aiSchema);
```