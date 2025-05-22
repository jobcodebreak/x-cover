import React from 'react';
import styled from "styled-components";

const BannerModal = ({ children, handleClose, handleModalClick }) => {
  const handleOverlayClick = () => {
    // 모달 외부를 클릭했을 때 모달을 닫도록 처리
    handleClose();  // `handleClose`를 호출해 모달을 닫기
  };

  const handleModalClickInternal = (e) => {
    // 모달 내부를 클릭하면 ImgBox 숨기고 문구 표시
    e.stopPropagation(); // 이벤트 전파 막기
    handleModalClick();  // ImgBox 숨기고 문구 표시
  };

  return (
    <ModalBox onClick={handleOverlayClick}>
      <ModalContent onClick={handleModalClickInternal}>
        {children}
      </ModalContent>
    </ModalBox>
  );
};

export default BannerModal;


// ======================= styled-components =========================

const ModalBox = styled.div`
  position:fixed;
  top:0;
  left:50%;
  transform:translateX(-50%);
  width:100%;
  max-width:1300px;
  height:100%;
   z-index: 9999;
`;
const ModalContent = styled.ul`
  position: absolute;
  top: 15%;
  right: 33%;
  width: 220px;
  background-color: white; 
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 9999;
  /* opacity transition 추가 (옵션) */
  transition: opacity 0.3s ease-in-out;
    &:hover{
    background-color: rgba(255,255,255,0.9);
  }
`;



