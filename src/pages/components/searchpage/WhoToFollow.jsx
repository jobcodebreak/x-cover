import React from 'react';
import {
  ConListWrap,
  Contit,
  ItemList,
  UserRecommendItem,
  Avatar,
  UserName,
  UserHandle,
  FollowButton,
  FollowingButton,
  ViewAll
} from './styles';

const users = [
  {
    name: '장영실',
    handle: '@jang_youngsil',
    avatar: 'https://mblogthumb-phinf.pstatic.net/MjAxNzEwMjZfMjg4/MDAxNTA4OTQ4Nzc5NDMy.VkudoLJUTj96na00-2I7RtrXgeJTbcul5WdzshF5zLYg.8BoK3rq2pWRiYz6zo8NGMQV20R0Y1fJRPJ6gaYzELe4g.JPEG.dnsmking/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C_%281%29.jpg?type=w800',
    isFollowing: true,
  },
  {
    name: '이순신',
    handle: '@lee_soonshin',
    avatar: 'https://i0.wp.com/yoonsb.com/wp-content/uploads/2016/11/2016-11-03-135719.png?fit=751%2C475&ssl=1',
    isFollowing: false,
  },
  {
    name: '홍길동',
    handle: '@hong_gildong',
    avatar: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151123_215%2Fsdkthzzang_1448288298381h3mX5_JPEG%2F%25C8%25AB%25B1%25E6%25B5%25BF.jpeg&type=sc960_832',
    isFollowing: false,
  }
];

const WhoToFollow = () => (
  <ConListWrap>
    <Contit>Who to follow</Contit>
    <ItemList>
      {users.map((user, i) => (
        <UserRecommendItem key={i}>
          <Avatar><img src={user.avatar} alt={user.name} /></Avatar>
          <div>
            <UserName>{user.name}</UserName>
            <UserHandle>{user.handle}</UserHandle>
          </div>
          {user.isFollowing ? (
            <FollowingButton>Following</FollowingButton>
          ) : (
            <FollowButton>Follow</FollowButton>
          )}
        </UserRecommendItem>
      ))}
    </ItemList>
    <ViewAll><a href="#">View all</a></ViewAll>
  </ConListWrap>
);

export default WhoToFollow;