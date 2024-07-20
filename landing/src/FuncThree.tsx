import styled from "styled-components";
import Functhree from "./assets/functhreeIc.svg";

export default function FuncThree() {
  return (
    <Container>
      <Img src={Functhree} />
      <Details>
        <Header>Home</Header>
        <Box>우리 근처 데이트</Box>
        <Box>장소 탐색</Box>
        <Content>러비 지도를 통해 다른 커플들이 방문한</Content>
        <Content>데이트 장소를 실시간으로 공유받아요.</Content>
        <Tag>
          <TagBox>다른 커플이 가는 데이트 장소</TagBox>
          <TagBox>연인과 방문했던 데이트 코스</TagBox>
        </Tag>
        <Tag>
          <TagBox>연인과 가기로 했던 장소</TagBox>
          <TagBox>쿠폰을 받을 수 있는 장소</TagBox>
        </Tag>
      </Details>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 6rem;
  justify-content: center;
  width: 100%;
  padding: 9.7rem 0 0;
  background-color: #f7f8f9;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15rem;
`;

const Img = styled.img`
  padding: 0;
`;

const Header = styled.h2`
  font-family: "ABC Ginto Rounded Nord Condensed Unlicensed Trial";
  color: var(--lubee-yellow, #ffad1e);
  font-style: normal;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 160%; /* 3.84rem */
  letter-spacing: -0.06rem;
`;

const Box = styled.p`
  color: #303539;
  font-style: normal;
  font-size: 5.8rem;
  font-weight: 700;
  line-height: 140%; /* 8.12rem */
  letter-spacing: -0.145rem;
`;

const Content = styled.p`
  font-family: "Pretendard Variable";
  color: #9ea4aa;
  font-style: normal;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 160%; /* 3.84rem */
  letter-spacing: -0.06rem;
`;

const Tag = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-top: 2rem;
`;

const TagBox = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 5px;
  background-color: #e8ebed;
  font-family: Pretendard;
  color: #6c7885;
  font-style: normal;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem; /* 133.333% */
  letter-spacing: -0.03rem;
`;
