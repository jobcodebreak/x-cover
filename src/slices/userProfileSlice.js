import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "세종대왕",
  username: "@KingSejong_theGreat",
  postsCount: 2,
  avatar:
    "https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800",
  bio: "king of Joseon, The creator of Hangul",
  joinedDate: "June 1418",
  followingCount: 1,
  followersCount: 1,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    updateUserProfile(state, action) {
      return { ...state, ...action.payload };
    },
    incrementFollowers(state) {
      state.followersCount += 1;
    },
    decrementFollowers(state) {
      state.followersCount = Math.max(0, state.followersCount - 1);
    },
  },
});

export const { updateUserProfile, incrementFollowers, decrementFollowers } =
  userProfileSlice.actions;

export default userProfileSlice.reducer;
