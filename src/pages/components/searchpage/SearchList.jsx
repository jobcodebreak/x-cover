import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSearch} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import searchIcon from "../../../assets/icons/fillMagnifying-glass.svg";
// 연결페이지
import TabMenu from "../../../components/TabMenu";
import SettingModal from "./SettingModal";
import TabForyou from './TabForyou';
import TabTrending from './TabTrending';
import TabNews from './TabNews';


//검색박스
const Input = styled.input.attrs(props => ({
  type: "search",
  size: props.size || "460px",
}))`
    width: ${props => props.size};
    padding: 12px 2px;
    border:none;
    font-size:14px;
    &:focus {
      outline:none;
    }
`;

// 탭 메뉴 컨텐츠
const SearchTabMenu = () => {
const Tabs = [
{ id: 1, tabName: 'For You', content: <TabForyou /> },
{ id: 2, tabName: 'Trending', content: <TabTrending /> },
{ id: 3, tabName: 'News', content: <TabNews /> },
{ id: 4, tabName: 'Sports', content: <TabNews /> },
{ id: 5, tabName: 'Entertainment', content: <TabNews /> },
];

return <TabMenu tabs={Tabs} />; //디자인 변경가능 : underlineWidth="70%", fontWeight = "15px" fontWeight = "500" 
};

// 체크창
const InputCheck = ({ children, disabled, checked, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </label>
  );
};


const SearchList = () => {
  const typeAheadRef = useRef(null);
  const searchBoxRef = useRef(null);

  //뒤로가기 버튼시 재로딩
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(0);
  };

  const [isTypeAhead, setIsTypeAhead] = useState(false); //검색창리스트
  const [isModalOpen,setIsModalOpen] = useState(false); //모달창
  const [isCheckedLocation, setIsCheckedLocation] = useState(true);//설정모달_체크박스
  const [isCheckedTrend, setIsCheckedTrend] = useState(true);//설정모달_체크박스

  // 바깥 클릭 감지 로직
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
      typeAheadRef.current &&
      !typeAheadRef.current.contains(event.target) &&
      searchBoxRef.current &&
      !searchBoxRef.current.contains(event.target)
    ) {
      setIsTypeAhead(false);
    }
    };

    if (isTypeAhead) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTypeAhead]);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  return (
    <Container>
      <Header>
        <HeaderSearch>
            {isTypeAhead && (
              <BackIcon onClick={handleBackClick} />
            )}
          <SearchBox ref={searchBoxRef}>
            <img src={searchIcon} alt="검색아이콘" />
            <Input placeholder={"검색"} onClick={()=>setIsTypeAhead(true)}  />
          </SearchBox>
          <SettingBtn to="#" onClick={handleOpen}>
              <FiSettings alt="설정아이콘" size={18} />
          </SettingBtn>
        </HeaderSearch>
        {isTypeAhead && (
          <TypeAhead ref={typeAheadRef}>
            <p>인물이나 리스트 또는 키워드를 검색해보세요.</p>
          </TypeAhead>
        )}
      </Header>
      <SearchTabMenu />

      {/* Modal */}
      {isModalOpen && (
        <SettingModal handleClose={handleClose}>
          <div>
            <ModalSubtit>위치</ModalSubtit>
            <Modalsetcon>
              <div>
                <Txt>이 지역의 콘텐츠보기</Txt>
                <Subtxt>이 기능을 사용하려면 지금 주변에서 무슨 일이 일어나고 있는지 알아볼 수 있습니다.</Subtxt>
              </div>
              <div>
                <InputCheck
                  checked={isCheckedLocation}
                  onChange={setIsCheckedLocation}
                />
              </div>
            </Modalsetcon>
            <ModalSubtit>맞춤 설정</ModalSubtit>
            <Modalsetcon>
              <div>
                <Txt>나를 위한 트렌드</Txt>
                <Subtxt>내 위치와 내가 팔로우하는 사람을 기반으로 트렌드를 맞춤 설정할 수 있습니다.</Subtxt>
              </div>
              <div>
                <InputCheck
                  checked={isCheckedTrend}
                  onChange={setIsCheckedTrend}
                />
              </div>
            </Modalsetcon>
          </div>
          
        </SettingModal>
      )}
      
    </Container>

  );
};

export default SearchList;

// ======================= styled-components =========================

const Container = styled.div`
  font-family: system-ui, sans-serif;
  width: 600px;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 600px;
  align-items: center;
  // padding: 12px;
  background: rgba(255,255,255,0.8);
  position: sticky;
  top: 0;
 // border-bottom: 1px solid #ddd;
  z-index: 999;
`;
const HeaderSearchWrap = styled.div``;

const TypeAhead = styled.div`
  position: absolute;
  top: 55px; 
  left: 60px;
  width: 500px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  border-top: none;
  z-index: 99999; 
  padding: 20px 12px 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  text-align:center;
  p {
    font-size:15px;
    color:#536471;
  }
    
`;

const HeaderSearch = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding:10px;
`;

const BackIcon = styled(FaArrowLeft)`
  width: 35px;
  height: 35px;
  padding: 10px;
  margin-right: 16px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const SearchBox = styled.div`
  height:40px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 25px;
  overflow:hidden;
  background-color: #fff;
  box-sizing: border-box;
  &:focus-within{
    border: 2px solid rgb(29, 155, 240);
  }
  img{
    width:15px;
    height:15px;
    display:inline-block;
    margin:12px 6px 12px 12px ;
    filter: invert(32%) sepia(20%) saturate(13%) hue-rotate(74deg) brightness(102%) contrast(87%);
  }
`;

const SettingBtn = styled(Link)`
  padding:10px;
  border-radius: 20px;
  overflow:hidden;
  &:hover{
    background-color:rgba(0, 0, 0,0.1);
  }
  img{
    width:20px;
    height:20px;
    display:inline-block;
    margin:10px;
    filter: invert(32%) sepia(20%) saturate(13%) hue-rotate(74deg) brightness(102%) contrast(87%);
  }
`;


const ContentWrap = styled.div``;
const ConListWrap = styled.div`
  padding: 20px;
  border-bottom:1px solid #ddd;
  h3{
    font-weight: bold;
    font-size: 20px;
  }
`;

// modal
const ModalSubtit = styled.h3`
  font-size: 20px;
  color: #0F1419;
  font-weight:bold;
  padding: 12px 16px;
  border-top:1px solid rgb(239, 243, 244);
  &:first-child{
    border-top:none;
  }
`;
const Modalsetcon = styled.div` 
  display:flex;
  justify-content: space-between; 
  padding: 16px;
  
`
const Txt = styled.p`
  font-size: 15px;
  color: #0F1419;
  font-weight:normal;
  padding: 5px 0;
  letter-spacing: -0.1rem;
`
const Subtxt = styled.p`
  font-size: 13px;
  color: #536472;
  font-weight:normal;
  word-wrap: break-word;
  letter-spacing: -0.09rem;
`
