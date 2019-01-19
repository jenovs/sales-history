import styled from '@emotion/styled';

export const Group = styled.div`
  margin-bottom: 1rem;
`;

export const H2 = styled.h2`
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

export const Overlay = styled.div`
  display: none;
  position: absolute;
  z-index: -1;
  @media (pointer: coarse) {
    align-items: center;
    color: #777;
    display: flex;
    font-family: 'monospace';
    font-size: 4rem;
    font-weight: bold;
    height: 100%;
    justify-content: center;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  padding-left: 3rem;
  padding-top: 3rem;
  max-width: 500px;
  position: relative;
  width: 100%;

  @media (max-width: 900px) {
    padding-top: 0;
    padding-left: 0;
  }

  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;
