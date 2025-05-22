import { ItemsImgWrapper, ItemsImg } from "./styles";

function ItemImages({ images }) {
  return (
    <ItemsImgWrapper>
      {images.map((img, idx) => (
        <ItemsImg src={img} key={idx} />
      ))}
    </ItemsImgWrapper>
  );
}

export default ItemImages;
