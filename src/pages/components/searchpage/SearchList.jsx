import React from 'react';
import styled from "styled-components";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import searchIcon from "../../../assets/icons/fillMagnifying-glass.svg";
import TabMenu from "./TabMenu";


 const Input = styled.input.attrs(props => ({
  type: "search",
  size: props.size || "450px",
}))`
    width: ${props => props.size};
    padding: 10px 5px;
    border:none;
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
        </HeaderSearch>
      </Header>
      <TabMenu/>
      <ContentWrap>
        <ConListWrap>
        
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
    padding:10px;
`;

const SearchBox = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 20px;
  overflow:hidden;
  background-color: #fff;
  &:focus-within{
    border: 2px solid rgb(29, 155, 240);
  }
  img{
    width:15px;
    height:15px;
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
