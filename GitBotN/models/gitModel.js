```javascript
const mongoose = require('mongoose');

// Define the schema for the GitHub data
const gitSchema = new mongoose.Schema({
  repoName: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  pullRequests: {
    type: Array,
    required: true
  },
  issues: {
    type: Array,
    required: true
  }
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Git', gitSchema);
```