import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    projectAdded: (state, { payload }) => {
      state.push({
        id: ++lastId,
        name: payload.name,
      });
    },
  },
});

export const { projectAdded } = slice.actions;
export default slice.reducer;
