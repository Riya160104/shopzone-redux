Prompt 1: Redux Toolkit Setup
Question: How to set up Redux Toolkit in React app?

Help Received: Installation and basic configuration of Redux Toolkit.

My Implementation:

Installed @reduxjs/toolkit and react-redux

Created store.js with configureStore

Wrapped app with Provider in index.js

Created separate slices for cart, filters, theme

Prompt 2: Creating Redux Slices
Question: What is a slice and how to create one?

Help Received: Slice contains reducer logic and actions for a feature.

My Implementation:

javascript
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // logic here
    }
  }
});
Prompt 3: Cart Persistence
Question: Cart disappears on refresh, how to fix?

Help Received: Use localStorage to persist data.

My Implementation:

Load cart from localStorage on initial state

Save to localStorage on every cart update

Created loadCartFromStorage function

