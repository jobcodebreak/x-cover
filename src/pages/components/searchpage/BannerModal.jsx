import { useEffect, useRef } from 'react';
import styled from "styled-components";

const BannerModal = ({ children, handleClose, PosTop, PosRight, width}) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();  // 모달 외부 클릭 시 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose]);

  return (
      <ModalBox ref={modalRef} $PosTop={PosTop} $PosPosRight={PosRight} $width={width} >
        {children}
      </ModalBox>
  );
};

export default BannerModal;


// ======================= styled-components =========================

const ModalBox = styled.ul`
  position: absolute;
  top: ${({ $PosTop }) => $PosTop || '20px'};
  right: ${({ $PosRight }) => $PosRight || '25px'};
  width: ${({ $width }) => $width || '220px'};
  background-color: white; 
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  transition: opacity 0.3s ease-in-out;
`;



