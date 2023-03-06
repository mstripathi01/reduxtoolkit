import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState : [],
  reducers : {
    addUser(state,action){
      state.push(action.payload);
    },
    deleteUsers(state,action){
      clearAllUsers(state,action)
      {
        state.push(action,payload);
      }
    },
    removeUser(state,action){},
  },
})

export default userSlice.reducer;
export const { addUser } = userSlice.actions;