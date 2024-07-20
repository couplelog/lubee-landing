import styled from "styled-components";
import Functwo from "./assets/functwoIc.svg";

export default function FuncTwo() {
  return (
    <Container>
      <Details>
        <Header>Archive</Header>
        <Box>데이트 추억들</Box>
        <Box>한눈에 모아보기</Box>
        <Content>캘린더로 우리가 꿀 떨어졌던 날들을</Content>
        <Content>한눈에 모아보고, 다시 열람하며 회상해요.</Content>
        <Tag>
          <TagBox>데이트 사진 공유</TagBox>
          <TagBox>데이트 코멘트 작성</TagBox>
        </Tag>
      </Details>
      <Img src={Functwo} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 26.9rem;
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
