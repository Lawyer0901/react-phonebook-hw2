import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 1em;
  color: rgba(0, 0, 0, 0.6);

  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);
  transition: all 1s;
  text-align: center;

  &:hover {
    text-shadow: 1px -1px 0 hsl(290, 100%, 40%), 2px -2px 0 hsl(290, 100%, 40%),
      3px -3px 0 hsl(280, 100%, 60%), 4px -4px 0 hsl(280, 100%, 60%),
      5px -5px 0 hsl(270, 100%, 75%), 6px -6px 0 hsl(270, 100%, 80%),
      7px -7px 0 hsl(260, 100%, 85%), 8px -8px 0 hsl(260, 100%, 90%);
    color: hsl(300, 100%, 30%);
  }
`;

export const Contacts = styled.h2`
  margin-top: 1em;
  color: rgba(0, 0, 0, 0.6);

  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);
  transition: all 1s;
  text-align: center;

  &:hover {
    text-shadow: 1px -1px 0 hsl(290, 100%, 40%), 2px -2px 0 hsl(290, 100%, 40%),
      3px -3px 0 hsl(280, 100%, 60%), 4px -4px 0 hsl(280, 100%, 60%),
      5px -5px 0 hsl(270, 100%, 75%), 6px -6px 0 hsl(270, 100%, 80%),
      7px -7px 0 hsl(260, 100%, 85%), 8px -8px 0 hsl(260, 100%, 90%);
    color: hsl(300, 100%, 30%);
  }
`;
