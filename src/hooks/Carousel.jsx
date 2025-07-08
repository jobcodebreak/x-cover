import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
//========이미지를 넘길 때 어디서 들어오고 어디로 나갈지 애니메이션 설정========
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const Carousel = ({ images, currentIndex, onClose }) => {
  const [[index, direction], setIndex] = useState([currentIndex, 0]); //이미지 상태 관리
  //========키보드 화살표로 넘기기, Esc 키로 닫기========
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      moveSlide(-1);
    } else if (e.key === "ArrowRight") {
      moveSlide(1);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  //==========이미지 넘기기==========
  const moveSlide = (dir) => {
    setIndex(([prevIdx]) => {
      const newIndex = (prevIdx + dir + images.length) % images.length;
      return [newIndex, dir];
    });
  };

  const goToSlide = (i) => {
    const dir = i > index ? 1 : -1;
    setIndex([i, dir]);
  };

  return (
    <AnimatePresence>
      <Overlay
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <CarouselContainer
          key="container"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton onClick={onClose}>✕</CloseButton>
          <Arrow left onClick={() => moveSlide(-1)}>
            ‹
          </Arrow>

          <ImageWrapper>
            <AnimatePresence initial={false} custom={direction}>
              <CarouselImage
                key={index}
                src={images[index]}
                alt={`media-${index}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              />
            </AnimatePresence>
          </ImageWrapper>

          <Arrow right onClick={() => moveSlide(1)}>
            ›
          </Arrow>

          <Thumbnails>
            {images.map((img, i) => (
              <Thumbnail
                key={i}
                src={img}
                active={i === index}
                onClick={() => goToSlide(i)}
              />
            ))}
          </Thumbnails>
        </CarouselContainer>
      </Overlay>
    </AnimatePresence>
  );
};

export default Carousel;

//==============================styled-components

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 70vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  flex: 1;
`;

const CarouselImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  ${({ left }) => left && "left: -40px;"}
  ${({ right }) => right && "right: -40px;"}
  z-index: 10;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  color: white;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
`;

const Thumbnails = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 10px;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border: 2px solid ${({ active }) => (active ? "#fff" : "transparent")};
  cursor: pointer;
  transition: 0.2s;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  border-radius: 4px;

  &:hover {
    opacity: 1;
  }
`;
