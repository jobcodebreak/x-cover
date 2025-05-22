import styled from "styled-components";

// Wrapper
export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: whitesmoke;
  }
`;

// Header
export const PostWrite = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const UserImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  gap: 5px;
  p {
    font-size: 14px;
    color: #2ab9fc;
  }
  span {
    font-size: 14px;
  }
`;

// Images
export const ItemsImgWrapper = styled.div`
  display: flex;
  gap: 2px;
  margin-left: 50px;
`;

export const ItemsImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20px;
`;

// Icons Area
export const ItemsIconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  span {
    font-size: 10px;
  }
`;

export const IconsImg = styled.img`
  width: 20px;
  height: 20px;
  &:hover {
    border-radius: 10px;
  }
`;

// Icon Hover Filters
export const blueFilter = `
  filter: brightness(0) saturate(100%) invert(70%) sepia(26%) 
  saturate(5472%) hue-rotate(168deg) brightness(94%) contrast(97%);
`;

export const greenFilter = `
  filter: brightness(0) saturate(100%) invert(59%) sepia(90%) 
  saturate(355%) hue-rotate(72deg) brightness(91%) contrast(90%);
`;

export const pinkFilter = `
  filter: brightness(0) saturate(100%) invert(61%) sepia(50%) 
  saturate(474%) hue-rotate(292deg) brightness(101%) contrast(96%);
`;

// Reusable AlignItem
export const AlignItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

// Specialized Icon Buttons
export const BlueItem = styled(AlignItem)`
  border: none;
  background-color: transparent;
  span {
    color: ${({ $active }) => ($active ? "#ec4899" : "inherit")};
  }
  &:hover {
    span {
      color: #2ab9fc;
    }
    img {
      ${blueFilter}
    }
  }
`;

export const GreenItem = styled(AlignItem)`
  &:hover {
    span {
      color: #22c55e;
    }
    img {
      ${greenFilter}
    }
  }
`;

export const PinkItem = styled(AlignItem)`
  span {
    color: ${(props) => (props.$active ? "#ec4899" : "inherit")};
  }

  img {
    ${(props) => props.$active && pinkFilter}
  }

  &:hover {
    span {
      color: #ec4899;
    }
    img {
      ${pinkFilter}
    }
  }
`;

// Modal
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  span {
    font-size: 14px;
    color: #2ab9fc;
    margin-right: 10px;
  }
`;

export const ModalPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const XButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  &:hover {
    background-color: whitesmoke;
    border-radius: 100%;
  }
`;
