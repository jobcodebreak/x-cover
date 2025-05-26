import { useState } from "react";
import Carousel from "../../../hooks/Carousel";
import { ItemsImgWrapper, ItemsImg } from "./styles";

function ItemImages({ images }) {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const openCarousel = (index) => {
    setCarouselIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };
  return (
    <>
      <ItemsImgWrapper>
        {images.map((img, idx) => (
          <ItemsImg src={img} key={idx} onClick={() => openCarousel(idx)} />
        ))}
      </ItemsImgWrapper>
      {isCarouselOpen && (
        <Carousel
          images={images}
          currentIndex={carouselIndex}
          onClose={closeCarousel}
        />
      )}
    </>
  );
}

export default ItemImages;
