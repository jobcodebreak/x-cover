import React from "react";
import styled from "styled-components";
import ellipsisIcon from "../assets/icons/ellipsis-circle.svg";
import searchIcon from "../assets/icons/fillMagnifying-glass.svg";

export default function RightSidebar() {
  return (
    <SidebarContainer>
      <SearchBarWrapper>
        <SearchInputWrapper>
          <SearchIconImg src={searchIcon} alt="Search" />
          <SearchInput type="text" placeholder="Search" />
        </SearchInputWrapper>
      </SearchBarWrapper>

      <Section>
        <SectionTitle>You might like</SectionTitle>
        <UserRecommendList>
          <UserRecommendItem>
            <Avatar
              src="https://i0.wp.com/yoonsb.com/wp-content/uploads/2016/11/2016-11-03-135719.png?fit=751%2C475&ssl=1"
              alt="User1"
            />
            <div>
              <UserName>이순신</UserName>
              <UserHandle>@lee_soonshin</UserHandle>
            </div>
            <FollowButton>Follow</FollowButton>
          </UserRecommendItem>

          <UserRecommendItem>
            <Avatar
              src="https://i.namu.wiki/i/cmDI70T4ElYmbvqhMauKsmFl5FdhE-5Cg0xl15leKlILTfrb4qhjGRLopJ3aXKpRAKUTGH-uluOhUpUEagSmPPLR-Cf0GnucY3Kieo3hEmZpftmuWdvCudt23GVuzx5qt0LaBW1Fkl-VDGAVeJlw3Q.webp"
              alt="User2"
            />
            <div>
              <UserName>신사임당</UserName>
              <UserHandle>@shin_saimdang</UserHandle>
            </div>
            <FollowButton>Follow</FollowButton>
          </UserRecommendItem>
        </UserRecommendList>
        <ShowMore>Show more</ShowMore>
      </Section>

      <Section>
        <SectionTitle>What’s happening</SectionTitle>
        <TrendList>
          <TrendItem>
            <ItemBox>
              <ItemInfoWrapper>
                <ItemTag>
                  <TrendingIn>Trending in Joseon</TrendingIn>
                  <Itemname>무인정사</Itemname>
                  <TrendTweets>20.7K posts</TrendTweets>
                </ItemTag>
              </ItemInfoWrapper>
              <EllipsisIcon src={ellipsisIcon} />
            </ItemBox>
          </TrendItem>
          <TrendItem>
            <ItemBox>
              <ItemInfoWrapper>
                <ItemTag>
                  <TrendingIn>Trending in Joseon</TrendingIn>
                  <Itemname>박포의 난</Itemname>
                  <TrendTweets>18.1K posts</TrendTweets>
                </ItemTag>
              </ItemInfoWrapper>
              <EllipsisIcon src={ellipsisIcon} />
            </ItemBox>
          </TrendItem>
          <TrendItem>
            <ItemBox>
              <ItemInfoWrapper>
                <ItemTag>
                  <TrendingIn>Trending in Joseon</TrendingIn>
                  <Itemname>한양 대화재</Itemname>
                  <TrendTweets>43.8K posts</TrendTweets>
                </ItemTag>
              </ItemInfoWrapper>
              <EllipsisIcon src={ellipsisIcon} />
            </ItemBox>
          </TrendItem>
          <TrendItem>
            <ItemBox>
              <ItemInfoWrapper>
                <ItemTag>
                  <TrendingIn>Trending in Joseon</TrendingIn>
                  <Itemname>노비종모법</Itemname>
                  <TrendTweets>2,096 posts</TrendTweets>
                </ItemTag>
              </ItemInfoWrapper>
              <EllipsisIcon src={ellipsisIcon} />
            </ItemBox>
          </TrendItem>
        </TrendList>
        <ShowMore>Show more</ShowMore>
      </Section>
    </SidebarContainer>
  );
}

// ======================= styled-components =========================

const SidebarContainer = styled.aside`
  font-family: system-ui, sans-serif;
  flex: 1;
  min-width: 350px;
  height: fit-content;
  padding: 20px 0px;
`;

const Section = styled.section`
  margin-bottom: 10px;
  border: 1px solid #e6ecf0;
  border-radius: 15px;
  padding: 10px 20px 10px 20px;
`;

const SectionTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const TrendList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TrendItem = styled.li`
  padding: 6px 14px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const UserRecommendList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UserRecommendItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 6px 14px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.div`
  font-weight: 600;
`;

const UserHandle = styled.div`
  font-size: 12px;
  color: #657786;
`;

const ShowMore = styled.div`
  margin-top: 30px;
  font-size: 15px;
  color: #34a5f1;
  cursor: pointer;
`;

const FollowButton = styled.div`
  font-size: 13px;
  margin-left: auto;
  background-color: black;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const Itemname = styled.div`
  font-size: 15px;
  font-weight: 900;
  margin-bottom: 7px;
`;

const TrendingIn = styled.div`
  margin-bottom: 5px;
  color: #5b6b78;
  font-size: 13px;
`;

const TrendTweets = styled.div`
  margin-bottom: 5px;
  color: #5b6b78;
  font-size: 13px;
`;

const ItemTag = styled.div``;

const ItemInfoWrapper = styled.div``;

const ItemBox = styled.div`
  display: flex;
`;

const EllipsisIcon = styled.img`
  color: black;
  width: 20px;
  height: 20px;
  margin-left: auto;
`;

const SearchBarWrapper = styled.div`
  padding: 12px 16px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 8px 12px;
  border: 1px solid #ccd6dd;

  &:focus-within {
    border-color: #1d9bf0;
  }
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 15px;
  color: #0f1419;
  width: 100%;

  &::placeholder {
    color: #536471;
  }
`;

const SearchIconImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  opacity: 0.6;
`;
