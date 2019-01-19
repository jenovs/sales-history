import styled from '@emotion/styled';

export const Money = styled.p`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  text-decoration: ${p => (p.status === 'failed' ? 'line-through' : 'none')};
`;

export const Payment = styled.p`
  margin: auto 2rem;
  margin-right: 5vw;

  @media (min-width: 500px) {
    margin-right: 2rem;
  }
`;

export const Status = styled.p`
  align-items: center;
  border: 2px solid #999;
  border-radius: 4px;
  color: ${p =>
    p.status === 'successful'
      ? 'green'
      : p.status === 'failed'
      ? 'darkred'
      : '#666'};
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-size: 0.9rem;
  margin: auto 3vw;
  margin-left: 5vw;
  padding: 0.3rem 1vw;
  text-transform: capitalize;

  @media (min-width: 500px) {
    font-size: 1rem;
    margin: auto 1rem;
    margin-left: 2rem;
  }

  @media (max-width: 350px) {
    color: transparent;
    background-color: ${p =>
      p.status === 'successful'
        ? 'green'
        : p.status === 'failed'
        ? 'darkred'
        : '#666'};
    margin-left: 5vw;
    overflow: hidden;
    width: 1.5rem;
  }
`;

export const Time = styled.p`
  margin: auto 3vw;
  margin-left: 1vw;
  width: 8vw;

  @media (min-width: 500px) {
    margin: auto 1.5rem;
    width: 2rem;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  border: 1px solid #666;
  color: #333;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  justify-content: space-between;
  padding: 0.7rem;
  width: 100%;
`;
