import { getLoginData } from "@/utils/funcs";
import { createSlice } from "@reduxjs/toolkit";
import { getLogedinUser } from "../thunks/user.thunk";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    isLoggedIn: false,
    logginData: getLoginData() as any,
    isInitialising: true,
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.logginData = null;
      state.profile = null;
    },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getLogedinUser.pending, (state) => {
//         state.isInitialising = true;
//       })
//       .addCase(getLogedinUser.fulfilled, (state, action) => {
//         const res = action.payload as any;
//         state.profile = res?.data ?? null;
//         if (state.logginData?.id) state.isLoggedIn = true;
//         state.isInitialising = false;
//       })
//       .addCase(getLogedinUser.rejected, (state) => {
//         state.isInitialising = false;
//       });
//   },
});

export const { setProfile, loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
