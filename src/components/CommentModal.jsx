import React from "react";
import styled from "styled-components";
import { X } from "lucide-react";

function CommentModal({ onClose }) {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <CloseBtn onClick={onClose}>
            <X size={24} />
          </CloseBtn>
          <Drafts>Drafts</Drafts>
        </Header>
      </Modal>
    </Overlay>
  );
}

export default CommentModal;

// ====================== styled-components =======================
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  padding: 2px;
  background: white;
  width: 600px;
  max-height: 90vh;
  border-radius: 16px;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  /* ✅ Twitter 스타일 스크롤바 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(83, 100, 113, 0.4);
    border-radius: 9999px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(83, 100, 113, 0.6);
  }

  scrollbar-width: thin;
  scrollbar-color: rgba(83, 100, 113, 0.4) transparent;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px;
  border-bottom: 1px solid #ccc;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1;
`;

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Drafts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 30px;
  margin-left: auto;
  color: rgb(29, 161, 242);
  padding: 17px 40px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;
