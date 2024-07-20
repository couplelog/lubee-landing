import styled from "styled-components";
import IntroHeart from "./assets/introHeart.svg";
import IntroLogo from "./assets/IntroLogo.svg";
import IntroBee from "./assets/IntroBee.svg";

export default function Intro() {
  return (
    <Wrapper>
      <IntroHeartImg src={IntroHeart} alt="Intro Heart" />
      <HeaderContainer>
        <IntroLogoImg src={IntroLogo} alt="Intro Heart" />
        <MenuContainer>
          <MenuText>소개</MenuText>
          <MenuText>주요기능</MenuText>
          <MenuText>정보</MenuText>
        </MenuContainer>
      </HeaderContainer>
      <TitleContainer>
        <TitleText>
          달달한 우리의 하루하루를 채우는
          <br />
          위치 기반 커플 앱 서비스
        </TitleText>
        <SubtitleText>
          우리 데이트의 모든 것 LUBEE에서
          <br />
          손쉽고 빠르게 기록하고 탐색해요!
        </SubtitleText>
      </TitleContainer>
      <IntroBeeImg src={IntroBee} alt="Intro Bee" />
      <RegisterBtn>
        <RegisterText>지금 앱 사전등록하러 가기</RegisterText>
      </RegisterBtn>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`;

const IntroHeartImg = styled.img`
  position: absolute;
  top: 0;
  left: 41.912rem;
  width: 156.5921rem;
  height: 156.7671rem;
  padding: 0;
`;

const HeaderContainer = styled.section`
  display: flex;
  gap: 98.319rem;
  padding: 5.848rem 20rem 14.352rem;
`;

const IntroLogoImg = styled.img`
  display: flex;
  width: 16.5811rem;
  height: 3.2rem;
  padding: 0;
`;

const MenuContainer = styled.section`
  display: inline-flex;
  gap: 10rem;
  align-items: center;
  width: 37.1rem;
  height: 3rem;
`;

const MenuText = styled.button`
  display: flex;
  font-family: "Pretendard Variable";
  color: #454c53;
  font-style: normal;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  line-height: normal;
  white-space: nowrap;
`;

const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  margin-left: 32rem;
`;

const TitleText = styled.h1`
  z-index: 1;
  height: 22rem;
  font-family: "Pretendard Variable";
  color: #eb9500;
  font-style: normal;
  font-size: 8rem;
  font-weight: 800;
  line-height: 11rem;
  white-space: pre-line;
`;

const SubtitleText = styled.p`
  font-family: "Pretendard Variable";
  color: #ffad1e;
  font-style: normal;
  font-size: 3rem;
  font-weight: 600;
  line-height: 4.5rem;
`;

const IntroBeeImg = styled.img`
  position: absolute;
  top: 18.825rem;
  left: 26.1rem;
  width: 144.439rem;
  height: 73.692rem;
  padding: 0;
`;

const RegisterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  z-index: 1;
  width: 39.3rem;
  height: 7.699rem;
  margin-top: 25.536rem;
  margin-left: 32rem;
  padding: 2.1rem 4.8rem;
  border-radius: 199.77px;
  background: #ffad1e;
  box-shadow: 0 0 7.331px 0 rgb(202 209 214 / 40%);
`;

const RegisterText = styled.p`
  font-family: "Pretendard Variable";
  color: #fff;
  font-style: normal;
  font-size: 3rem;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
`;
