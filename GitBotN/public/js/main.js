```javascript
// Importing necessary modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Importing custom components and store
import App from './reactComponents';
import store from './reduxStore';

// Rendering the main App component inside the Provider to make the Redux store available to all components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```