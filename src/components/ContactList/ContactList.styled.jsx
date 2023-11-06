import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const Items = styled.li`
  width: 85%;
  display: flex;
  padding: 5px;
  gap: 30px;
  font-size: 20px;
  font-weight: 500;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  /* margin-top: 2rem; */
  background-color: #0e39fe;
  color: white;
  font-size: 0.75rem;
  text-transform: uppercase;
  width: 65%;

  letter-spacing: 0.15em;
  transition: ease-in 1000ms;
  &:hover {
    outline: 3px solid #090c9b;
  }
`;
