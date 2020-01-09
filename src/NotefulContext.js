import React from 'react';

// UserContext.js
// Create a new context object

// Argument contains default values to use
// Not required, but useful for testing
const NotefulContext = React.createContext({
  notes: [],
  folders: [],
  delete: () => {}
});

export default NotefulContext;