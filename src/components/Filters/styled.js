import styled from '@emotion/styled';

export const Group = styled.div`
  margin-bottom: 1rem;
`;

export const H2 = styled.h2`
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

export const Wrapper = styled.div`
  padding-left: 3rem;
  padding-top: 3rem;
  max-width: 500px;
  width: 100%;

  @media (max-width: 900px) {
    padding-top: 0;
    padding-left: 0;
  }

  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;
