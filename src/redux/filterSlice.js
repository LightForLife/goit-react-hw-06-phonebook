import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filterValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
      return {
        ...state,
        filterValue: action.payload,
      };
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// export const filterReducer = createReducer(filterInitialState, {
//   [filterContacts]: (state, action) => {
//     return {
//       ...state,
//       filterValue: action.payload,
//     };
//   },
// });
