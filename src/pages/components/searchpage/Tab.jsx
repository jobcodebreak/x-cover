import React from 'react';
import { Tabitem, TabTit } from './styles';

const Tab = ({ tab, isActive, onClick }) => (
  <Tabitem className={isActive ? 'on' : ''}>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick(tab.id);
      }}
    >
      <TabTit>{tab.tabName}</TabTit>
    </a>
  </Tabitem>
);

export default Tab;