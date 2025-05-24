// import React from 'react';
// import { useState } from 'react';
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import ellipsisIcon from "../assets/icons/ellipsis-circle.svg";


// //tab list
// const Tab = ({ tab, isActive, onClick }) => {
//     return (
//         <Tabitem className={isActive ? 'on' : ''}>
//             <a
//                 href="#"
//                 onClick={(e) => {
//                     e.preventDefault();
//                     onClick(tab.id);
//                 }}
//             >
//                 <TabText>{tab.tabName}</TabText>
//             </a>
//         </Tabitem>
//     );
// };
// //tab content list
// const TabForyou = () => {
//   const trendItems = [
//     { subtit: 'Trending in Joseon', tit: '거중기', post: '1,514 posts' },
//     { subtit: 'Trending in Joseon', tit: '한글사랑', post: '95.5k posts' },
//     { subtit: 'Trending in Joseon', tit: '경복궁', post: '42.5k posts' },
//   ];

//   return (
//     <Cont>
//       <ImgBox>
//         <img
//           src="https://cdn.pixabay.com/photo/2022/10/01/01/53/gyeongbokgung-palace-7490465_640.jpg"
//           alt="한옥 이미지"
//         />
//         <ImgTxt>
//           <p>#경복궁_Gyeongbokgung Palace</p>
//           <p>화려한가? 견고한가? 왕실의 권위를 높이기 위한 상징적인 공간, 경복궁이올시다.</p>
//         </ImgTxt>
//       </ImgBox>

//       <ul>
//         {trendItems.map((item, index) => (
//           <Trenditem key={index}>
//             <StyledLink to="#">
//               <span>{item.subtit}</span>
//               <span>{item.tit}</span>
//               <span>{item.post}</span>
//             </StyledLink>
//             <MoreBtn>
//               <img src={ellipsisIcon} alt="더보기 아이콘" />
//             </MoreBtn>
//           </Trenditem>
//         ))}
//       </ul>
//        <ConListWrap>
//           <h3>Who to follow</h3>
//           <ItemList>
//             <UserRecommendItem>
//               <Avatar>
//                 <img   src="https://mblogthumb-phinf.pstatic.net/MjAxNzEwMjZfMjg4/MDAxNTA4OTQ4Nzc5NDMy.VkudoLJUTj96na00-2I7RtrXgeJTbcul5WdzshF5zLYg.8BoK3rq2pWRiYz6zo8NGMQV20R0Y1fJRPJ6gaYzELe4g.JPEG.dnsmking/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_%281%29.jpg?type=w800"
//                 alt="User1" />
//               </Avatar>
//               <div>
//                 <UserName>장영실</UserName>
//                 <UserHandle>@jang_youngsil</UserHandle>
//               </div>
//               <FollowingButton>Following</FollowingButton>
//             </UserRecommendItem>
//             <UserRecommendItem>
//               <Avatar>
//                 <img   src="https://i0.wp.com/yoonsb.com/wp-content/uploads/2016/11/2016-11-03-135719.png?fit=751%2C475&ssl=1"
//                 alt="User2" />
//               </Avatar>
//               <div>
//                 <UserName>이순신</UserName>
//                 <UserHandle>@lee_soonshin</UserHandle>
//               </div>
//               <FollowButton>Follow</FollowButton>
//             </UserRecommendItem>
//             <UserRecommendItem>
//               <Avatar>
//                 <img src="https://i.namu.wiki/i/cmDI70T4ElYmbvqhMauKsmFl5FdhE-5Cg0xl15leKlILTfrb4qhjGRLopJ3aXKpRAKUTGH-uluOhUpUEagSmPPLR-Cf0GnucY3Kieo3hEmZpftmuWdvCudt23GVuzx5qt0LaBW1Fkl-VDGAVeJlw3Q.webp"
//                 alt="User3" />
//               </Avatar>
//               <div>
//                 <UserName>신사임당</UserName>
//                 <UserHandle>@shin_saimdang</UserHandle>
//               </div>
//               <FollowButton>Follow</FollowButton>
//             </UserRecommendItem>
//             <UserRecommendItem>
//               <Avatar>
//                 <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151123_215%2Fsdkthzzang_1448288298381h3mX5_JPEG%2F%25C8%25AB%25B1%25E6%25B5%25BF.jpeg&type=sc960_832"
//                 alt="User4" />
//               </Avatar>
//               <div>
//                 <UserName>홍길동</UserName>
//                 <UserHandle>@hong_gildong</UserHandle>
//               </div>
//               <FollowButton>Follow</FollowButton>
//             </UserRecommendItem>
//           </ItemList>
//           <ViewAll>
//             <a href="#">
//               View all
//             </a>
//             </ViewAll>
//         </ConListWrap>
        
//     </Cont>
//   );
// };

// //메인 
// const TabMenu = () => {
//     const [activeTabId, setActiveTabId] = useState(1);

//     const tabs = [
//         { id: 1, tabName: 'For You' },
//         { id: 2, tabName: 'Trending' },
//         { id: 3, tabName: 'News' },
//         { id: 4, tabName: 'Sports' },
//         { id: 5, tabName: 'Entertainment' },
//     ];

//     const tabContents = {
//         1: <TabForyou/>,
//         2: <p>실시간 인기 콘텐츠입니다.</p>,
//         3: <p>최신 뉴스입니다.</p>,
//         4: <p>스포츠 관련 소식입니다.</p>,
//         5: <p>연예계 뉴스를 볼 수 있습니다.</p>,
//     };

//     const handleTabClick = (id) => {
//         setActiveTabId(id);
//     };

//     return (
//         <>
//             <TabBox>
//                 <TabitemWrap className="TabMenu">
//                     {tabs.map((tab) => (
//                         <Tab
//                             key={tab.id}
//                             tab={tab}
//                             isActive={tab.id === activeTabId}
//                             onClick={handleTabClick}
//                         />
//                     ))}
//                 </TabitemWrap>
//             </TabBox>

//             <ContentBox>
//                 {tabContents[activeTabId]}
//             </ContentBox>
//         </>
//     );
// };

// export default TabMenu;
// // ======================= styled-components =========================

// const TabBox = styled.div`
//   // outline: 1px solid red;
//   border-bottom: 1px solid #eee ;
//   position:sticky;
//   top:52px;
//   z-index: 99999;
// `;
// const TabitemWrap = styled.ul`
//   display:flex;
//   justify-content: space-between;
// `;
// const Tabitem = styled.li`
//   flex: 1;
//   background: none;
//   background-color: rgba(255,255,255,0.8);
//   border: none;
//   font-weight: bold;
//   font-size: 16px;
//   text-align : center;
//   border-width: 10px;
//   color: black;
//   transition: border-color 0.2s ease;
//   margin-top:5px;
//   &.on{
//     position: relative;
//     a {
//       span {
//         color:black;
//       }
//     }
//     &::after {
//       content: "";
//       position: absolute;
//       left:50%;
//       bottom:0;
//       transform: translateX(-50%);
//       width:70%;
//       height:3px;
//       background-color:#2ab9fc;
//     }
//   }
//   &:hover {
//     background-color: #f7f7f7;
//   }
//   a{
//     width:100%; 
//     display:block;
//     padding:16px;
//   }
// `;
// const ContentBox = styled.div``;
// const TabText = styled.span`
//   color: gray;
// `;

// // TabContent css
// const Cont = styled.div`
//   width:600px;
// `;
// const ImgBox = styled.div`
//   width:100%;
//   position:relative;
//   background: black;
//   img {
//     width:100%;
//     display:block;
//     background: black;
//     opacity: 0.6;
//   }
// `;

// const ImgTxt = styled.div`
//   position: absolute;
//   bottom:0;
//   p{
//     color:white;
//     padding: 0 10px 10px;
//     &:first-child {
//       font-size:22px;
//       font-weight:bold;
//     }
//     &:last-child {
//       font-size:16px;
//       font-weight:400;
//       margin-bottom: 20px;
//     }
//   }
// `;


// const Test = styled.div`
//   height:500px;
// `;

// const Trenditem = styled.li`
//   display:flex;
//   justify-content: space-between;
//   padding:12px 16px;
//   &:hover{
//     background-color: rgba(0,0,0,0.02);
//   }
// `;
// const StyledLink = styled(Link)`
//   display:block;
//     span {
//       display:block;
//       color: #536471;
//       font-size:13px;
//       font-weight:500;
//       line-height:1.2;
//       &:nth-child(2) {
//         color:#0F1419;
//         font-weight: bold;
//         font-size:15px;
//         margin:2px 0 4px;
//       }
//     }
// `

// const MoreBtn = styled(Link)`
//   display:block;
//   width:30px;
//   height:30px;
//   text-align:center;
//   padding:5px;
//   border-radius:50%;
//   overflow:hidden;
//   &:hover{
//     background-color: rgba(29, 161, 242, 0.1);
//     img {
//       filter: invert(53%) sepia(82%) saturate(2477%) hue-rotate(176deg) brightness(98%) contrast(93%);
//     }
//   }
//   img {
//     width:100%;
//   }
// `;

// // 팔로우 추천
// const ConListWrap = styled.div`
//   padding: 20px;
//   border-bottom:1px solid #ddd;
//   h3{
//     font-weight: bold;
//     font-size: 20px;
//   }
// `;
// const ItemList = styled.ul`
//   //margin:20px;
//   margin-top:20px;
// `;
// const UserRecommendItem = styled.li`
//   display: flex;
//   align-items: center;
//   //margin-bottom: 10px;
//   cursor: pointer;
//   padding:10px;

//   &:hover {
//     background-color: #e8f5fd;
//     border-radius: 8px;
//   }
// `;

// const Avatar = styled.div`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   margin-right: 20px;
//   overflow:hidden;
//   img {
//     display:block;
//     width:100%;
//     height:100%;
//   }
// `;

// const UserName = styled.p`
//   font-weight: 600;
// `;

// const UserHandle = styled.p`
//   font-size: 12px;
//   padding-top:5px;
//   color: #657786;
// `;


// const FollowButton = styled.a`
//   text-decoration-line: none;
//   font-size: 14px;
//   margin-left: auto;
//   background-color: black;
//   color: white;
//   padding: 8px 16px;
//   border-radius: 25px;
//   font-weight: bold;
//   border: none;
//   &:hover {
//     background-color: #333;
//   }
// `;
// const FollowingButton = styled.a`
//   text-decoration-line: none;
//   font-size: 14px;
//   margin-left: auto;
//   background-color: white;
//   color: black;
//   padding: 8px 16px;
//   border-radius: 25px;
//   font-weight: bold;
//   border: 1px solid #ddd;
// `;
// const ViewAll = styled.div`
//   //margin:20px;
//   margin-top:20px;
//   a {
//     font-size: 16px;
//     color: #34a5f1;
//     padding:10px;
//     //outline:1px solid red;
//   }
// `;