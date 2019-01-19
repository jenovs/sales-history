import styled from '@emotion/styled';
import { darken } from 'polished';

export default styled.button`
  background-color: ${p => (p.inactive ? 'white' : 'cornflowerblue')};
  border: 2px solid cornflowerblue;
  border-radius: 2px;
  color: ${p => (p.inactive ? darken(0.2, 'cornflowerblue') : 'white')};
  cursor: inherit;
  font-size: 1.2em;
  margin: 0.2rem;
  padding: 0.1rem 0.5rem;
  transition: all 0.15s;
  width: ${p => (p.width ? `${p.width}px` : 'auto')};
`;

// background-color: ${p =>
//   !p.inactive ? darken(0.1, 'cornflowerblue') : 'white'};
