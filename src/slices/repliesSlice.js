import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    profileImage:
      "https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800",
    displayName: "세종대왕",
    username: "KingSejong_theGreat",
    date: "Oct 10,1434",
    replyingTo: "@jang_youngsil",
    text: "어서와",
    hashtag: "",
    postImage: "",
  },
];

const repliesSlice = createSlice({
  name: "replies",
  initialState,
  reducers: {},
});

export const selectReplies = (state) => state.replies;

export default repliesSlice.reducer;
