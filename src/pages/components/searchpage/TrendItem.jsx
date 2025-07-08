import { useState } from 'react';
import { Trenditem, StyledLink, MoreBtn, ModalList, ModalItem } from './styles';
import ellipsisIcon from '../../../assets/icons/ellipsis-circle.svg';
import BannerModal from './BannerModal';

const TrendItem = ({ subtit, tit, post }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const Listitems = [
    {emoji:"☹",title:'연결된 콘텐츠가 관련성이 없습니다.'},
    {emoji:"☹",title:'관심없습니다.'},
    {emoji:"☹",title:'중복 트렌드 입니다.'},
    {emoji:"☹",title:'유해하거나 스팸성인 트렌드입니다.'},

  ]

  return (
    <>
      <Trenditem>
        <div>
          <StyledLink to="#">
            <span>{subtit}</span>
            <span>{tit}</span>
            <span>{post}</span>
          </StyledLink>
          <MoreBtn onClick={handleOpen}>
            <img src={ellipsisIcon} alt="더보기 아이콘" />
          </MoreBtn>
        </div>
        {isModalOpen && (
          <BannerModal handleClose={handleClose} width='330px' PosTop='20px'>
            {Listitems.map((item, index) => (
              <ModalList key={index}>
                <ModalItem>
                  {item.emoji} {item.title}
                </ModalItem>
              </ModalList>
            ))}
          </BannerModal>
        )}
      </Trenditem>

    </>
  );
};

export default TrendItem;