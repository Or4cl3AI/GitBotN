```javascript
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');
const apiRoutes = require('./routes/api');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/gitbotn', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Bodyparser Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/', indexRoutes);
app.use('/api', apiRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
```