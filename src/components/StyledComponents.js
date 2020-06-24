import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 95%;

  @media screen and (min-width: 700px) {
    width: 90%;
  }
`;

const TopSpace = styled.div`
  padding-top: 95px;
`;

export { Container, TopSpace };
