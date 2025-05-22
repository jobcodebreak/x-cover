import React from 'react';
import styled from "styled-components";
import { FaArrowLeft, FaSearch} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import searchIcon from "../../../assets/icons/fillMagnifying-glass.svg";
import TabMenu from "./TabMenu";
import { Link } from 'react-router-dom';


const Input = styled.input.attrs(props => ({
  type: "search",
  size: props.size || "460px",
}))`
    width: ${props => props.size};
    padding: 12px 2px;
    border:none;
    font-size:14px;
    &:focus {
      outline:none;
    }
`;



const SearchList = () => {
  return (
    <Container>
      <Header>
        <HeaderSearch>
          <SearchBox>
            <img src={searchIcon} alt="검색아이콘" />
            <Input placeholder={"검색"}  />
          </SearchBox>
          <SettingBtn>
              <FiSettings alt="설정아이콘" size={18} />
          </SettingBtn>
        </HeaderSearch>
      </Header>
      <TabMenu/>
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
  width: 600px;
  align-items: center;
  // padding: 12px;
  background: rgba(255,255,255,0.8);
  position: sticky;
  top: 0;
 // border-bottom: 1px solid #ddd;
  z-index: 99999;
`;


const HeaderSearch = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding:10px;
`;

const SearchBox = styled.div`
  height:40px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 25px;
  overflow:hidden;
  background-color: #fff;
  box-sizing: border-box;
  &:focus-within{
    border: 2px solid rgb(29, 155, 240);
  }
  img{
    width:15px;
    height:15px;
    display:inline-block;
    margin:12px 6px 12px 12px ;
    filter: invert(32%) sepia(20%) saturate(13%) hue-rotate(74deg) brightness(102%) contrast(87%);
  }
`;

const SettingBtn = styled(Link)`
  padding:10px;
  border-radius: 20px;
  overflow:hidden;
  &:hover{
    background-color:rgba(0, 0, 0,0.1);
  }
  img{
    width:20px;
    height:20px;
    display:inline-block;
    margin:10px;
    filter: invert(32%) sepia(20%) saturate(13%) hue-rotate(74deg) brightness(102%) contrast(87%);
  }
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
