import { useState } from "react";
import ItemCard from "./ItemCard";

function Items() {
  const [openIndex, setOpenIndex] = useState();
  const [liked, setLiked] = useState({});
  const imgItems = [
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
  ];
  return (
    <>
      {imgItems.map((item, index) => (
        <ItemCard
          key={index}
          item={item}
          index={index}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          liked={liked}
          setLiked={setLiked}
        />
      ))}
    </>
  );
}

export default Items;
