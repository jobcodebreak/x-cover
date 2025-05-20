import React from 'react';
import { useState } from 'react';
import styled from "styled-components";



const Tab = (props) => {
  
  const tabName = props.tab.tabName;
  const on = props.tab.on;
  const tabId = props.tab.id;

    const changeTab = (id) => {
        document.querySelector('.TabMenu. li.on').classList.remove('on');
        document.querySelector('.TabMenu li#' + id).classList.add('on');
    };

    return (
        <Tabitem>
            <a href="#"
                id={tabId}
                // className={on ? 'on' : ''}
                onClick={() => {changeTab(tabId)}}>
                <TabText>{tabName}</TabText>
            </a>
        </Tabitem>
    );
};

const TabMenu = () => {
  const tabs = [
    {id:1, tabName:'Top'},
    {id:2, tabName:'Latest'},
    {id:3, tabName:'People'},
    {id:4, tabName:'Photos'},
    {id:5, tabName:'Videos'}
  ]


    return (
      <>
        <TabBox>
            <TabitemWrap className='TapMenu'>{
                  tabs.map((v, inx) => {
                      return <Tab key={inx} tab={v} />
                  })
              } 
            </TabitemWrap>
        </TabBox>
      </>
    );

};

export default TabMenu;

// ======================= styled-components =========================

const TabBox = styled.div`
  // outline: 1px solid red;
  padding-top:70px;
  border-bottom: 1px solid #eee ;
`;
const TabitemWrap = styled.ul`
  display:flex;
  justify-content: space-between;
`;
const Tabitem = styled.li`
  flex: 1;
  padding: 16px;
  background: none;
  border: none;
  font-weight: bold;
  font-size: 16px;
  text-align : center;
  cursor: pointer;
  border-width: 10px;
  //border-bottom: 2px solid ${({ active }) => (active ? "#2ab9fc" : "transparent")};
  color: black;
  transition: border-color 0.2s ease;

  &:hover {
    background-color: #f7f7f7;
  }
  a {
    
  }
  a.on {
  border-bottom: 2px solid #2ab9fc;
  }
`;

const TabText = styled.span`
  position: relative;
  color: black;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -20px;
    height: 4px;
    width: 100%;
    background-color: ${({ active }) => (active ? "#2ab9fc" : "transparent")};
    border-radius: 2px;
    transition: background-color 0.2s ease;
  }
`;

