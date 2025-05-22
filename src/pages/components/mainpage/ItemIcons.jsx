import {
  ItemsIconsWrapper,
  BlueItem,
  GreenItem,
  PinkItem,
  IconsImg,
} from "./styles";

import chatIcon from "../../../assets/icons/chat.svg";
import arrowRoundedIcon from "../../../assets/icons/arrow-path-rounded.svg";
import heartIcon from "../../../assets/icons/heart.svg";
import eyeIcon from "../../../assets/icons/eye.svg";
import bookMarkIcon from "../../../assets/icons/bookmark.svg";
import shareIcon from "../../../assets/icons/share.svg";

function ItemIcons({ index, openIndex, setOpenIndex, liked, setLiked }) {
  const toggleLike = (index) => {
    setLiked((prev) => ({
      ...prev,
      [index]: !prev[index], // ✅ index마다 개별적으로 관리
    }));
  };
  return (
    <ItemsIconsWrapper>
      <BlueItem as="button" onClick={() => setOpenIndex(index)}>
        <IconsImg src={chatIcon} /> <span>3</span>
      </BlueItem>

      <GreenItem>
        <IconsImg src={arrowRoundedIcon} /> <span>1.7k</span>
      </GreenItem>

      <PinkItem
        $active={liked[index]} // ✅ 각 index에 맞게 렌더링
        onClick={() => toggleLike(index)}
      >
        <IconsImg src={heartIcon} /> <span>2.9k</span>
      </PinkItem>

      <BlueItem>
        <IconsImg src={eyeIcon} /> <span>105k</span>
      </BlueItem>

      <div style={{ display: "flex", gap: "5px" }}>
        <BlueItem>
          <IconsImg src={bookMarkIcon} />
        </BlueItem>
        <BlueItem>
          <IconsImg src={shareIcon} />
        </BlueItem>
      </div>
    </ItemsIconsWrapper>
  );
}

export default ItemIcons;
