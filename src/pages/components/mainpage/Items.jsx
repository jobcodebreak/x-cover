import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ItemCard from "./ItemCard";
import styled from "styled-components";
const Loading = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

function Items() {
  const [openIndex, setOpenIndex] = useState();
  const [liked, setLiked] = useState({});

  const baseItems = [
    {
      userImg:
        "https://i0.wp.com/yoonsb.com/wp-content/uploads/2016/11/2016-11-03-135719.png?fit=751%2C475&ssl=1",
      userName: "@lee_soonshinㆍ23h",
      tag: "#충무공이순신 #명량대첩 #거북선 #조선수군 #임진왜란 #불멸의이순신",
      comment: "필사즉생(必死則生), 필생즉사(必生則死)",
      images: [
        "https://picsum.photos/300/300",
        "https://picsum.photos/301/301",
        "https://picsum.photos/302/302",
      ],
    },
    {
      userImg:
        "https://i.namu.wiki/i/cmDI70T4ElYmbvqhMauKsmFl5FdhE-5Cg0xl15leKlILTfrb4qhjGRLopJ3aXKpRAKUTGH-uluOhUpUEagSmPPLR-Cf0GnucY3Kieo3hEmZpftmuWdvCudt23GVuzx5qt0LaBW1Fkl-VDGAVeJlw3Q.webp",
      userName: "@shin_saimdangㆍMay 18",
      tag: "#율곡이이어머니 #신사임당 #현모양처 #조선여성 #여성화가",
      comment: "바른 마음은 모든 행동의 근본이 된다.",
      images: [
        "https://picsum.photos/303/303",
        "https://picsum.photos/304/304",
        "https://picsum.photos/305/305",
      ],
    },
    {
      userImg:
        "https://i0.wp.com/yoonsb.com/wp-content/uploads/2016/11/2016-11-03-135719.png?fit=751%2C475&ssl=1",
      userName: "@lee_soonshinㆍ23h",
      tag: "#충무공이순신 #명량대첩 #거북선 #조선수군 #임진왜란 #불멸의이순신",
      comment: "필사즉생(必死則生), 필생즉사(必生則死)",
      images: [
        "https://picsum.photos/300/300",
        "https://picsum.photos/301/301",
        "https://picsum.photos/302/302",
      ],
    },
  ];

  const [imgItems, setImgItems] = useState(baseItems);

  const fetchMoreData = () => {
    console.log("fetchMoreData 호출됨");
    setTimeout(() => {
      setImgItems((prev) => [...prev, ...baseItems]);
    }, 3000);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={imgItems.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Loading>더 많은 게시물 불러오는 중...</Loading>}
        style={{ overflow: "visible" }}
        scrollableTarget="scrollableDiv" // 타겟 정하는 곳
      >
        {imgItems.map((item, index) => (
          <ItemCard
            key={`${index}-${item.userName}`}
            item={item}
            index={index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            liked={liked}
            setLiked={setLiked}
          />
        ))}
      </InfiniteScroll>
    </>
  );
}

export default Items;
