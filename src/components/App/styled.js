import styled from '@emotion/styled';

export const Day = styled.div`
  margin: 0.5rem auto 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  margin-top: 0.7rem;
`;

export const TitleText = styled.p`
  font-size: 1.2rem;
`;

export const Transactions = styled.div`
  margin: auto;
  max-width: 500px;
  text-align: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  cursor: ${p => (p.loading ? 'wait' : 'auto')};
  font-family: sans-serif;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: auto;
  max-width: 900px;
  padding: 0.5rem;

  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
  }
`;
