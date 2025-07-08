import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NoPosts = () => {
  return (
    <ConWrap>
      <div>
        <p>This page does not exist. Try searching for another page.</p>
        <Btn to="/search"><span>검색</span></Btn>
      </div>
    </ConWrap>

  );
};


export default NoPosts;

// ======================= styled-components =========================

const ConWrap = styled.div`
  padding:40px 20px;

  div {
    text-align:center;
    padding:20px 12px;

    p {
      font-size:15px;  
      color:#536471;
      padding:10px 0;
      margin-bottom:20px;
    }
  }
`;
const Btn = styled(Link)`
  display:inline-block;
  background-color:#1D9BF0;
  padding:8px 16px;
  border-radius:15px;
  margin:5px 0;
  span {
    font-size:15px;
    color:white;
  }
`;