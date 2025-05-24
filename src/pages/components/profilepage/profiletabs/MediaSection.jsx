import styled from "styled-components";
import React, { useState } from "react";
import Carousel from "../../../../hooks/Carousel";

const MediaSection = () => {
  //==============================캐러셀에 사용되는 이미지
  const mediaImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Seoul-Gyeongbokgung-Sundial-02.jpg/330px-Seoul-Gyeongbokgung-Sundial-02.jpg",
    "https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800",
  ];
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  //==============================이미지 캐러셀 (Media 탭)
  const openCarousel = (index) => {
    setCarouselIndex(index);
    setIsCarouselOpen(true);
  };
  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };
  return (
    <Container>
      <ImgSection>
        {/* 썸네일 목록을 화면에 출력하는 코드 */}
        {mediaImages.map((img, idx) => (
          <Media key={idx} onClick={() => openCarousel(idx)}>
            <MediaImg src={img} />
          </Media>
        ))}
      </ImgSection>
      {isCarouselOpen && (
        <Carousel
          images={mediaImages}
          currentIndex={carouselIndex}
          onClose={closeCarousel}
        />
      )}
    </Container>
  );
};
export default MediaSection;

//==============================styled-components

const Container = styled.div`
  font-family: system-ui, sans-serif;
  min-width: 600px;
`;

const ImgSection = styled.div`
  max-width: 600px;
  display: flex;
  align-items: left;
`;

const Media = styled.div`
  max-width: 600px;
  margin: 5px;
  cursor: pointer;
`;

const MediaImg = styled.img`
  width: 185px;
  height: 185px;
`;
