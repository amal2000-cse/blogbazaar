import { createSlice } from "@reduxjs/toolkit";

//we use redux persist to store the state inside the redux to store inside the localStorage
//so that the data wont get lost if the brower gets refreshed
const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  //now inside the reducers we will be creating all the logic that we need
  reducers: {
    //this is for when the sign in process start
    //if there we an error earlier, we will use state.error = null
    //to clear out that errror
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    //action : it is the information that we get and that we wantt to add
    //in our case the reponse that we receive is the action
    signInSucces: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //this is for updating the user profile
    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signoutSuccess:(state)=>{
        state.currentUser=null;
        state.loading=false;
        state.error=null;

    }
  },
});

//here we are exporting all the actions
export const {
  signInStart,
  signInSucces,
  signInFailure,
  updateStart,
  updateFailure,
  updateSuccess,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signoutSuccess
} = userSlice.actions;

export default userSlice.reducer;
