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
    avatar:
      "https://i.namu.wiki/i/cmDI70T4ElYmbvqhMauKsmFl5FdhE-5Cg0xl15leKlILTfrb4qhjGRLopJ3aXKpRAKUTGH-uluOhUpUEagSmPPLR-Cf0GnucY3Kieo3hEmZpftmuWdvCudt23GVuzx5qt0LaBW1Fkl-VDGAVeJlw3Q.webp",
    alt: "User2",
    name: "신사임당",
    handle: "@shin_saimdang",
  },
  {
    id: 3,
    avatar:
      "https://i.namu.wiki/i/vpUa0g7EoXzqchiUVKsRW74FQDQ9e2LgMoJMduYKddgaf29SGt1vOBn1ise7MKXyJR9tf-_FADCpi2SrqwNPT1pJCP0M6-hTYY6z8csebJ6LX1iS8zUW6WD18KK81ohBwqVoOJPG75wThC9F-ar4UA.webp",
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
