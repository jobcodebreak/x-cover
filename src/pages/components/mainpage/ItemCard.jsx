import {
  PostWrapper,
  PostWrite,
  UserImg,
  ItemsWrapper,
  ModalHeader,
  ModalPostWrapper,
  XButton,
  IconsImg,
} from "./styles";
import XIcon from "../../../assets/icons/x.svg";
import ItemImages from "./ItemImages";
import ItemIcons from "./ItemIcons";
import ModalChat from "./ModalChat";
import PostComponents from "./PostComponents";

function ItemCard({ item, index, openIndex, setOpenIndex, liked, setLiked }) {
  return (
    <PostWrapper>
      <PostWrite>
        <UserImg src={item.userImg} alt={`img-${index}`} />
        <ItemsWrapper>
          <span>{item.userName}</span>
          <p>{item.tag}</p>
          <span>{item.comment}</span>
        </ItemsWrapper>
      </PostWrite>

      {openIndex === index && (
        <ModalChat onClose={() => setOpenIndex()}>
          <ModalHeader>
            <XButton onClick={() => setOpenIndex()}>
              <IconsImg src={XIcon} />
            </XButton>
            <span>Draft</span>
          </ModalHeader>
          <ModalPostWrapper>
            <PostWrite>
              <UserImg src={item.userImg} />
              <ItemsWrapper>
                <span>{item.userName}</span>
                <p>{item.tag}</p>
                <span>{item.comment}</span>
              </ItemsWrapper>
            </PostWrite>
          </ModalPostWrapper>
          <PostComponents type="reply" />
        </ModalChat>
      )}

      <ItemImages images={item.images} />
      <ItemIcons
        index={index}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        liked={liked}
        setLiked={setLiked}
      />
    </PostWrapper>
  );
}

export default ItemCard;
