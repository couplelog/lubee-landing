import styled from "styled-components";
import YellowIc from "./assets/yellowIc.svg";

export default function Yellow() {
  return (
    <Container>
      <Details>
        <Header>Expectations</Header>
        <Box>요즘 커플들이</Box>
        <Box>기다리고 기다리던 바로 그 앱</Box>
      </Details>
      <Img src={YellowIc} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6.94rem 0 0;
  background-color: #ffad1e;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  padding: 0;
`;

const Header = styled.h2`
  font-family: "ABC Ginto Rounded Nord Condensed Unlicensed Trial";
  color: var(--lubee-yellow-300, #ffd285);
  font-style: normal;
  font-size: 2.4rem;
  font-weight: 500;
  text-align: center;
  line-height: 160%; /* 3.84rem */
  text-transform: uppercase;
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
