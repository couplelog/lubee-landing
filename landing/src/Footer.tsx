import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Top>
        <TopFirst>
          <Text>소개</Text>
          <Button>지금 앱 사전등록하러 가기</Button>
        </TopFirst>
        <Text>주요기능</Text>
        <Text>정보</Text>
      </Top>
      <SmallBox>
        <First>
          <Small>대표 오세윤</Small>
        </First>
        <First>
          <Small>만든 이들</Small>
          <Small>신예진, 박다인, 박서연, 김민영, 안혜연, 김성현, 박시영</Small>
        </First>
        <First>
          <Small>고객문의</Small>
          <Small>lubee.love2024@gmail.com</Small>
        </First>
      </SmallBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 7.95rem 31rem 0 32rem;
  background-color: #24282d;
`;

const Small = styled.p`
  font-family: "Pretendard Variable";
  color: var(--gray-500, #6c7885);
  font-style: normal;
  font-size: 1.6rem;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.04rem;
`;

const First = styled.div`
  display: flex;
  gap: 1.28rem;
`;

const SmallBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const TopFirst = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  font-family: "Pretendard Variable";
  color: var(--gray-50, #f7f8f9);
  font-style: normal;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.0625rem;
`;

const Button = styled.button`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 2.1rem 4.8rem;
  border-radius: 200px;
  background-color: #ffad1e;
  font-family: "Pretendard Variable";
  color: var(--white, #fff);
  font-style: normal;
  font-size: 3rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.075rem;
`;
