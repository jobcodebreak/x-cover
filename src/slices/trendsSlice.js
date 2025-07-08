import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    trendingIn: "Trending in Joseon",
    itemName: "무인정사",
    trendTweets: "20.7K posts",
  },
  {
    id: 2,
    trendingIn: "Trending in Joseon",
    itemName: "박포의 난",
    trendTweets: "18.1K posts",
  },
  {
    id: 3,
    trendingIn: "Trending in Joseon",
    itemName: "한양 대화재",
    trendTweets: "43.8K posts",
  },
  {
    id: 4,
    trendingIn: "Trending in Joseon",
    itemName: "노비종모법",
    trendTweets: "2,096 posts",
  },
];

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {},
});

export const selectTrends = (state) => state.trends;

export default trendsSlice.reducer;
