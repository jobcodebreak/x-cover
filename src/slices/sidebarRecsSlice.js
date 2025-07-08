import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    avatar:
      "https://i0.wp.com/yoonsb.com/wp-content/uploads/2016/11/2016-11-03-135719.png?fit=751%2C475&ssl=1",
    alt: "User1",
    name: "이순신",
    handle: "@lee_soonshin",
  },
  {
    id: 2,
    avatar: "/shin_saimdang.jpg",
    alt: "User2",
    name: "신사임당",
    handle: "@shin_saimdang",
  },
  {
    id: 3,
    avatar: "/yi_hwang.jpg",
    alt: "User3",
    name: "이황",
    handle: "@yi_hwang",
  },
];

const sidebarRecsSlice = createSlice({
  name: "sidebarRecs",
  initialState,
  reducers: {},
});

export const selectSidebarRecs = (state) => state.sidebarRecs;

export default sidebarRecsSlice.reducer;
