import styled from "styled-components";
import chatIcon from "../../../assets/icons/chat.svg";
import arrowRoundedIcon from "../../../assets/icons/arrow-path-rounded.svg";
import bookMarkIcon from "../../../assets/icons/bookmark.svg";
import heartIcon from "../../../assets/icons/heart.svg";
import eyeIcon from "../../../assets/icons/eye.svg";
import shareIcon from "../../../assets/icons/share.svg";
import xLogo from "../../../assets/xLogo.png";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: whitesmoke;
  }
`;
const PostWrite = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const UserImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;
const ItemsWrapper = styled.div`
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
const ItemsImgWrapper = styled.div`
  display: flex;
  gap: 2px;
  margin-left: 50px;
`;
const ItemsImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20px;
`;
const AlignItmesCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const ItemsIconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  span {
    font-size: 10px;
  }
`;
const IconsImg = styled.img`
  width: 20px;
  height: 20px;
`;

const imgItems = [
  {
    userImg:
      "https://i0.wp.com/yoonsb.com/wp-content/uploads/2016/11/2016-11-03-135719.png?fit=751%2C475&ssl=1",
    userName: "@lee_soonshinㆍ23h",
    tag: [
      "#충무공이순신 ",
      "#명량대첩 ",
      "#거북선 ",
      "#조선수군 ",
      "#임진왜란 ",
      "#불멸의이순신 ",
    ],
    comment: "필사즉생(必死則生), 필생즉사(必生則死)",
    images: [xLogo, xLogo, xLogo],
  },
  {
    userImg:
      "https://i.namu.wiki/i/cmDI70T4ElYmbvqhMauKsmFl5FdhE-5Cg0xl15leKlILTfrb4qhjGRLopJ3aXKpRAKUTGH-uluOhUpUEagSmPPLR-Cf0GnucY3Kieo3hEmZpftmuWdvCudt23GVuzx5qt0LaBW1Fkl-VDGAVeJlw3Q.webp",
    userName: "@shin_saimdangㆍMay 18",
    tag: [
      "#율곡이이어머니 ",
      "#신사임당 ",
      "#현모양처 ",
      "#조선여성 ",
      "#여성화가 ",
    ],
    comment: "바른 마음은 모든 행동의 근본이 된다.",
    images: [xLogo, xLogo, xLogo],
  },
];

function Items() {
  return (
    <>
      {imgItems.map((item, index) => (
        <PostWrapper key={index}>
          <PostWrite>
            <UserImg src={item.userImg} alt={`img-${index}`} />
            <ItemsWrapper>
              <span>{item.userName}</span>
              <p>{item.tag}</p>
              <span> {item.comment}</span>
            </ItemsWrapper>
          </PostWrite>

          <ItemsImgWrapper>
            <ItemsImg src={item.images[0]} />
            <ItemsImg src={item.images[1]} />
            <ItemsImg src={item.images[2]} />
          </ItemsImgWrapper>

          <ItemsIconsWrapper>
            <AlignItmesCenter>
              <IconsImg src={chatIcon} /> <span>3</span>
            </AlignItmesCenter>
            <AlignItmesCenter>
              <IconsImg src={arrowRoundedIcon} /> <span>1.7k</span>
            </AlignItmesCenter>
            <AlignItmesCenter>
              <IconsImg src={heartIcon} /> <span>2.9k</span>
            </AlignItmesCenter>
            <AlignItmesCenter>
              <IconsImg src={eyeIcon} /> <span>105k</span>
            </AlignItmesCenter>
            <AlignItmesCenter>
              <IconsImg src={bookMarkIcon} />
              <IconsImg src={shareIcon} />
            </AlignItmesCenter>
          </ItemsIconsWrapper>
        </PostWrapper>
      ))}
    </>
  );
}

export default Items;
