import { createSlice } from '@reduxjs/toolkit';

let userId = 0;
const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    userAdd: (state, action) => {
      state.push({
        id: ++userId,
        name: action.payload.name,
      });
    },
  },
});

export const { userAdd } = slice.actions;
export default slice.reducer;
