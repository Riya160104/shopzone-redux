import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'all',
  minPrice: 0,
  maxPrice: 1000,
  sortBy: 'default',
  searchQuery: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    resetFilters: (state) => {
      state.category = 'all';
      state.minPrice = 0;
      state.maxPrice = 1000;
      state.sortBy = 'default';
      state.searchQuery = '';
    },
  },
});

export const { setCategory, setPriceRange, setSortBy, setSearchQuery, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;