import React from 'react';
import { Trenditem, StyledLink, MoreBtn } from './styles';
import ellipsisIcon from '../../../assets/icons/ellipsis-circle.svg';

const TrendItem = ({ subtit, tit, post }) => (
  <Trenditem>
    <StyledLink to="#">
      <span>{subtit}</span>
      <span>{tit}</span>
      <span>{post}</span>
    </StyledLink>
    <MoreBtn>
      <img src={ellipsisIcon} alt="더보기 아이콘" />
    </MoreBtn>
  </Trenditem>
);

export default TrendItem;