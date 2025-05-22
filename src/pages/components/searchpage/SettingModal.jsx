import React from 'react';
import styled from "styled-components";

const SettingModal = ({children}) => {
  return (
    <ModalWrap>
      <Dimmed></Dimmed>
      {children}
    </ModalWrap>
  );
};

export default SettingModal;


// ======================= styled-components =========================

const ModalWrap = styled.div`
  position: relative;
`;

const Dimmed = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
`;
