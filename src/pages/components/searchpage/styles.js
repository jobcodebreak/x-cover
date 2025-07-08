import styled from 'styled-components';
import { Link } from 'react-router-dom';

//tabmenu
const TabBox = styled.div`
  // outline: 1px solid red;
  border-bottom: 1px solid #eee ;
  position:sticky;
  top:55px;
  z-index: 99;
`;
const TabitemWrap = styled.ul`
  display:flex;
  justify-content: space-between;
`;
const Tabitem = styled.li`
  flex: 1;
  background: none;
  background-color: rgba(255,255,255,0.8);
  border: none;
  font-weight: bold;
  font-size: 16px;
  text-align : center;
  border-width: 10px;
  color: black;
  transition: border-color 0.2s ease;
  margin-top:5px;
  &.on{
    position: relative;
    a {
      span {
        color:black;
      }
    }
    &::after {
      content: "";
      position: absolute;
      left:50%;
      bottom:0;
      transform: translateX(-50%);
      width:70%;
      height:3px;
      background-color:#2ab9fc;
    }
  }
  &:hover {
    background-color: #f7f7f7;
  }
  a{
    width:100%; 
    display:block;
    padding:16px;
  }
`;
const ContentBox = styled.div``;

const TabTit = styled.span`
  color: gray;
`;

// TabContent_Tabforyou
const Cont = styled.div`
  width:600px;
`;
const ImgBox = styled.div`
  width:100%;
  position:relative;
  background: black;
  img {
    width:100%;
    display:block;
    background: black;
    opacity: 0.6;
  }
`;

const ImgTxt = styled.div`
  position: absolute;
  bottom:0;
  p{
    color:white;
    padding: 0 10px 10px;
    &:first-child {
      font-size:22px;
      font-weight:bold;
    }
    &:last-child {
      font-size:16px;
      font-weight:400;
      margin-bottom: 20px;
    }
  }
`;
const ImgBtn = styled(Link)`
  width:40px;
  height:40px;
  display:block;
  position:absolute;
  padding:5px;
  border-radius:50%;
  top:10px;
  right:10px;
  z-index:999;
  &:hover{
    background-color: rgba(0,0,0,0.1);
  }
  img {
    width:100%;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
    z-index:999;
    background:none;
  }
`

const Test = styled.div`
  height:500px;
`;


// trenditem
const TrendBox = styled.ul``;
const Trenditem = styled.li`
  position:relative;
  padding:12px 16px;
  list-style:none;
  &:hover{
    background-color: rgba(0,0,0,0.02);
  }
  div {
    display:flex;
    justify-content: space-between;
  }
`;
const StyledLink = styled(Link)`
  display:block;
    span {
      display:block;
      color: #536471;
      font-size:13px;
      font-weight:500;
      line-height:1.2;
      &:nth-child(2) {
        color:#0F1419;
        font-weight: bold;
        font-size:15px;
        margin:2px 0 4px;
      }
    }
`

const MoreBtn = styled(Link)`
  display:block;
  width:30px;
  height:30px;
  text-align:center;
  padding:5px;
  border-radius:50%;
  overflow:hidden;
  &:hover{
    background-color: rgba(29, 161, 242, 0.1);
    img {
      filter: invert(53%) sepia(82%) saturate(2477%) hue-rotate(176deg) brightness(98%) contrast(93%);
    }
  }
  img {
    width:100%;
  }
`;

// who to follows
const ConListWrap = styled.div`
padding-bottom:10px;
  border-bottom:1px solid #ddd;
`;
const Contit = styled.h3`
    font-weight: bold;
    font-size: 20px;
    padding:12px 16px;
`;

const ItemList = styled.ul`

`;
const UserRecommendItem = styled.li`
  display: flex;
  align-items: center;
  //margin-bottom: 10px;
  cursor: pointer;
  padding:10px;

  &:hover {
    background-color: rgba(0,0,0,0.02);
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
//모달 레이아웃 
const ModalList = styled.li`
  width:100%;
  list-style:none;
  padding:12px 16px;
  &:hover{
    background-color: rgba(0,0,0,0.04);
  }
`;
const ModalItem = styled(Link)`
  width:100%;
  display:block;
`;
const MessageBox = styled.div`
  width:100%;
  padding:10px;
  border-bottom: 1px solid rgb(239, 243, 244);
  p {
  padding:15px 20px;
  background-color: rgba(247, 249, 249, 1.00);
  border-radius: 12px;
  }
`;



export {
  TabBox,
  TabitemWrap,
  Tabitem,
  ContentBox,
  TabTit,
  Cont,
  ImgBox,
  ImgTxt,
  Test,
  TrendBox,
  Trenditem,
  StyledLink,
  MoreBtn,
  ConListWrap,
  Contit,
  ItemList,
  UserRecommendItem,
  Avatar,
  UserName,
  UserHandle,
  FollowButton,
  FollowingButton,
  ViewAll,
  ImgBtn,
  ModalList,
  ModalItem,
  MessageBox
};