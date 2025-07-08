import { createSlice } from "@reduxjs/toolkit";
//====================사용자 프로필의 초기 데이터
const initialState = {
  name: "세종대왕",
  username: "@KingSejong_theGreat",
  postsCount: 3,
  avatar:
    "https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800",
  bio: "king of Joseon, The creator of Hangul",
  joinedDate: "June 1418",
  followingCount: 1,
  followersCount: 1,
};
//====================이 슬라이스는 위에서 정의한 initialState를 기본값으로 사용
const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  //====================reducers 안에는 상태를 변경하는 함수들을 정의
  reducers: {},
});

export const selectUserProfile = (state) => state.userProfile;

export default userProfileSlice.reducer;
