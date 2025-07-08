import React, { useState } from "react";
import styled from "styled-components";
import { FiCamera, FiX } from "react-icons/fi";
import { ChevronRight, X } from "lucide-react";
import FloatingLabelInput from "./FloatingLabelInput";

function EditProfileModal({ onClose }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <CloseBtn onClick={onClose}>
            <X size={24} />
          </CloseBtn>
          <Title>Edit profile</Title>
          <SaveBtn onClick={onClose}>Save</SaveBtn>
        </Header>

        <BannerSection>
          <BannerImage src="https://blog.kakaocdn.net/dn/bDCU0i/btsLA5oAVTo/b6ZvAOcU2eglvaGb1QXKkK/img.webp" />
          <BannerOverlay>
            <CircleBtn>
              <FiCamera size={20} />
            </CircleBtn>
            <CircleBtn>
              <FiX size={20} />
            </CircleBtn>
          </BannerOverlay>
          <ProfileWrapper>
            <ProfileImage src="https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjJfMTg4/MDAxNzM3NTQ1NzY1MDc0.Pgcv6JXSxrh1KHXVB2c2X5rJ8FHDrsvsQ5-35AWa0asg.urpL4d0Xau_DkMR-UDeFJT09h0whunwWcezTf9wawu0g.JPEG/image.JPEG?type=w800" />
            <CameraIcon>
              <FiCamera size={20} />
            </CameraIcon>
          </ProfileWrapper>
        </BannerSection>

        <Form>
          <InputWrapper>
            <FloatingLabelInput
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              maxLength={50}
              showCharCount={true}
            />
          </InputWrapper>
          <InputWrapper>
            <FloatingLabelInput
              label="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              type="textarea"
              height="110px"
              maxLength={160}
              showCharCount={true}
            />
          </InputWrapper>
          <InputWrapper>
            <FloatingLabelInput
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              maxLength={30}
              showCharCount={true}
            />
          </InputWrapper>
          <InputWrapper>
            <FloatingLabelInput
              label="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              type="text"
              maxLength={100}
              showCharCount={true}
            />
          </InputWrapper>
          <SettingItem>
            <BirthDate>
              <BirthDateTxt>Birth date</BirthDateTxt>
              <BirthDateTxt>May 15, 1397</BirthDateTxt>
            </BirthDate>
            <ArrowIcon />
          </SettingItem>
          <SettingItem>
            <LabelText>Create expanded bio</LabelText>
            <ArrowIcon />
          </SettingItem>
          <SettingItem>
            <LabelText>Switch to professional</LabelText>
            <ArrowIcon />
          </SettingItem>
          <br />
        </Form>
      </Modal>
    </Overlay>
  );
}

export default EditProfileModal;

//==============================styled-components

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  padding: 2px;
  background: white;
  width: 600px;
  max-height: 90vh;
  border-radius: 16px;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  /* ✅ Twitter 스타일 스크롤바 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(83, 100, 113, 0.4);
    border-radius: 9999px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(83, 100, 113, 0.6);
  }

  scrollbar-width: thin;
  scrollbar-color: rgba(83, 100, 113, 0.4) transparent;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px;
  border-bottom: 1px solid #ccc;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const SaveBtn = styled.button`
  width: 65px;
  height: 30px;
  margin-left: auto;
  background: black;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #333;
  }
`;

const BannerSection = styled.div`
  position: relative;
  height: 200px;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CircleBtn = styled.button`
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const ProfileWrapper = styled.div`
  position: absolute;
  bottom: -70px;
  left: 16px;
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 9999px;
  border: 4px solid white;
  object-fit: cover;
`;

const CameraIcon = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const Form = styled.div`
  max-height: 350px;
  margin-top: 20px;
  padding: 60px 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const Input = styled.input`
  height: 60px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: box-shadow 0.2s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #1d9bf0;
  }

  &.bioInput {
    height: 110px;
    resize: none;
  }
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const BirthDate = styled.div`
  display: flex;
  flex-direction: column;
`;

const BirthDateTxt = styled.span`
  font-size: 16px;
  color: black;
  gap: 5px;
`;

const LabelText = styled.span`
  font-size: 20px;
  color: black;
  font-weight: 500;
`;

const ArrowIcon = styled(ChevronRight)`
  color: #536471;
  height: 20px;
  width: 20px;
`;
