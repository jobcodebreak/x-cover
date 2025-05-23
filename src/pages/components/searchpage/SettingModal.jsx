import React from 'react';
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const SettingModal = ({children,handleClose}) => {
  const titlist = [
    "탐색 설정"
  ];
    const handleOverlayClick = () => {
    // 모달 외부를 클릭했을 때 모달을 닫도록 처리
    handleClose();  // `handleClose`를 호출해 모달을 닫기
  };
    const handleModalContentClick = (e) => {
    // 모달 내부 클릭 시, 이벤트 전파를 막아서 외부 클릭이 감지되지 않도록
    e.stopPropagation(); // 이벤트 전파 방지
  };
  
  return (
    <ModalWrap>
      {/* 모달 외부 클릭 시 닫기 */}
      <Dimmed onClick={handleOverlayClick} />
      
      {/* 모달 내용 영역 */}
      <ModalCon onClick={handleModalContentClick}>
        <ModalHeader>
          {/* 모달 닫기 버튼 */}
          <CloseBtn onClick={handleClose}>
            <ClosedIcon size={20} />
          </CloseBtn>
          <ModalTit>{titlist[0]}</ModalTit>
        </ModalHeader>
        {children}
      </ModalCon>
    </ModalWrap>
  );
};

export default SettingModal;


// ======================= styled-components =========================

const ModalWrap = styled.div`
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:999;
`;

const Dimmed = styled.div`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:999;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalCon = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:600px;
  height:650px;
  background:white;
  padding:10px;
  border-radius:20px;
  z-index:9999;
  
`;
const ModalHeader = styled.div`
  display:flex;
  padding: 5px;
`;

const CloseBtn = styled.button`
  display:block;
  padding:5px;
  border:none;
  background:none;
  border-radius:50%;
  cursor:pointer;
  &:hover{
    background-color:rgba(0,0,0,0.1);
  }
  
`;
const ClosedIcon = styled(IoClose)`

  
`;
const ModalTit = styled.p`
  font-size: 20px;
  color: #0F1419;
  font-weight:bold;
  padding: 5px 0;
  vertical-align: middle;
  margin-left:30px;
`;
