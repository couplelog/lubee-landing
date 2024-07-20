import styled from "styled-components";
import Funcone from "./assets/funconeIc.svg";

export default function FuncOne() {
  return (
    <Container>
      <Img src={Funcone} />
      <Details>
        <Header>Home</Header>
        <Box>가장 손쉬운</Box>
        <Box>실시간 데이트 기록</Box>
        <Content>둘만의 기록 공간에서 사진들을 기록하고</Content>
        <Content>달달한 반응을 남기며 꿀을 모아보세요.</Content>
        <Tag>
          <TagBox>데이트 사진 공유</TagBox>
          <TagBox>데이트 코멘트 작성</TagBox>
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
  background-color: #303539;
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
  color: white;
  font-style: normal;
  font-size: 5.8rem;
  font-weight: 700;
  line-height: 140%; /* 8.12rem */
  letter-spacing: -0.145rem;
`;

const Content = styled.p`
  font-family: "Pretendard Variable";
  color: var(--gray-200, #c9cdd2);
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
  background-color: #454c53;
  font-family: Pretendard;
  color: #e8ebed;
  font-style: normal;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem; /* 133.333% */
  letter-spacing: -0.03rem;
`;
