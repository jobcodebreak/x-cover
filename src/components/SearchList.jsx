import React from 'react';
import styled from "styled-components";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import TabMenu from "./TabMenu";


 const Input = styled.input.attrs(props => ({
  type: "search",
  size: props.size || "500px",
}))`
    width: ${props => props.size};
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
`;



const SearchList = () => {
  return (
    <Container>
      <Header>
        <HeaderSearch>

         <Input placeholder={"검색"}  />
         {/* //아이콘 들어갈자리 */}
        </HeaderSearch>
      </Header>
      <TabMenu/>
      <ContentWrap>
        <ConListWrap>
          {/* <h3>Top</h3>
          <ItemList>
            <UserRecommendItem>
              <Avatar>
                <img   src="https://mblogthumb-phinf.pstatic.net/MjAxNzEwMjZfMjg4/MDAxNTA4OTQ4Nzc5NDMy.VkudoLJUTj96na00-2I7RtrXgeJTbcul5WdzshF5zLYg.8BoK3rq2pWRiYz6zo8NGMQV20R0Y1fJRPJ6gaYzELe4g.JPEG.dnsmking/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_%281%29.jpg?type=w800"
                alt="User1" />
              </Avatar>
              <div>
                <UserName>장영실</UserName>
                <UserHandle>@jang_youngsil</UserHandle>
              </div>
              <FollowingButton>Following</FollowingButton>
            </UserRecommendItem>
            <UserRecommendItem>
              <Avatar>
                <img   src="https://i0.wp.com/yoonsb.com/wp-content/uploads/2016/11/2016-11-03-135719.png?fit=751%2C475&ssl=1"
                alt="User2" />
              </Avatar>
              <div>
                <UserName>이순신</UserName>
                <UserHandle>@lee_soonshin</UserHandle>
              </div>
              <FollowButton>Follow</FollowButton>
            </UserRecommendItem>
            <UserRecommendItem>
              <Avatar>
                <img src="https://i.namu.wiki/i/cmDI70T4ElYmbvqhMauKsmFl5FdhE-5Cg0xl15leKlILTfrb4qhjGRLopJ3aXKpRAKUTGH-uluOhUpUEagSmPPLR-Cf0GnucY3Kieo3hEmZpftmuWdvCudt23GVuzx5qt0LaBW1Fkl-VDGAVeJlw3Q.webp"
                alt="User3" />
              </Avatar>
              <div>
                <UserName>신사임당</UserName>
                <UserHandle>@shin_saimdang</UserHandle>
              </div>
              <FollowButton>Follow</FollowButton>
            </UserRecommendItem>
            <UserRecommendItem>
              <Avatar>
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151123_215%2Fsdkthzzang_1448288298381h3mX5_JPEG%2F%25C8%25AB%25B1%25E6%25B5%25BF.jpeg&type=sc960_832"
                alt="User4" />
              </Avatar>
              <div>
                <UserName>홍길동</UserName>
                <UserHandle>@hong_gildong</UserHandle>
              </div>
              <FollowButton>Follow</FollowButton>
            </UserRecommendItem>
          </ItemList>
          <ViewAll>
            <a href="#">
              View all
            </a>
            </ViewAll> */}
        </ConListWrap>
  
      </ContentWrap>
    </Container>
  );
};

export default SearchList;

// ======================= styled-components =========================

const Container = styled.div`
  font-family: system-ui, sans-serif;
  width: 600px;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 598px;
  align-items: center;
  // padding: 12px;
  background: white;
  position: sticky;
  top: 0;
 // border-bottom: 1px solid #ddd;
  z-index: 99999;
`;

const BackIcon = styled(FaArrowLeft)`
  font-size: 18px;
  margin-right: 16px;
  cursor: pointer;
`;

const HeaderSearch = styled.div`
    display: flex;
    padding:10px;
`;

const ContentWrap = styled.div`
  
`;
const ConListWrap = styled.div`
  padding: 20px;
  border-bottom:1px solid #ddd;
  h3{
    font-weight: bold;
    font-size: 20px;
  }
`;
const ItemList = styled.ul`
  //margin:20px;
  margin-top:20px;
`;
const UserRecommendItem = styled.li`
  display: flex;
  align-items: center;
  //margin-bottom: 10px;
  cursor: pointer;
  padding:10px;

  &:hover {
    background-color: #e8f5fd;
    border-radius: 8px;
  }
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
  overflow:hidden;
  img {
    display:block;
    width:100%;
    height:100%;
  }
`;

const UserName = styled.p`
  font-weight: 600;
`;

const UserHandle = styled.p`
  font-size: 12px;
  padding-top:5px;
  color: #657786;
`;


const FollowButton = styled.a`
  text-decoration-line: none;
  font-size: 14px;
  margin-left: auto;
  background-color: black;
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-weight: bold;
  border: none;
  &:hover {
    background-color: #333;
  }
`;
const FollowingButton = styled.a`
  text-decoration-line: none;
  font-size: 14px;
  margin-left: auto;
  background-color: white;
  color: black;
  padding: 8px 16px;
  border-radius: 25px;
  font-weight: bold;
  border: 1px solid #ddd;
`;
const ViewAll = styled.div`
  //margin:20px;
  margin-top:20px;
  a {
    font-size: 16px;
    color: #34a5f1;
    padding:10px;
    //outline:1px solid red;
  }
`;