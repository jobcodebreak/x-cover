import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from "../slices/userProfileSlice";
import userRecommendationsReducer from "../slices/userRecommendationsSlice";
import postsReducer from "../slices/postsSlice";
import repliesReducer from "../slices/repliesSlice";
import sidebarRecsReducer from "../slices/sidebarRecsSlice";
import trendsReducer from "../slices/trendsSlice";

const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
    userRecommendations: userRecommendationsReducer,
    posts: postsReducer,
    replies: repliesReducer,
    sidebarRecs: sidebarRecsReducer,
    trends: trendsReducer,
  },
});

export default store;
