import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      avatar:
        "https://i0.wp.com/yoonsb.com/wp-content/uploads/2016/11/2016-11-03-135719.png?fit=751%2C475&ssl=1",
      name: "이순신",
      handle: "@lee_soonshin",
      comment: "아직 신에게는 12척의 배가 남아 있사옵니다.",
    },
    {
      avatar: "/shin_saimdang.jpg",
      name: "신사임당",
      handle: "@shin_saimdang",
      comment: "기품을 지키되 사치하지 말 것이고, 지성을 갖추되 자랑하지 말라.",
    },
    {
      avatar: "/yi_hwang.jpg",
      name: "이황",
      handle: "@yi_hwang",
      comment:
        "천하의 의리가 끝이 없는데, 어찌 자기만 옳고 남은 그르다고 할 수 있겠는가?",
    },
  ],
};

const userRecommendationsSlice = createSlice({
  name: "userRecommendations",
  initialState,
  reducers: {},
});

export const selectUserRecommendations = (state) =>
  state.userRecommendations.users;

export default userRecommendationsSlice.reducer;
