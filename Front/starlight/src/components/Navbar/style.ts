import styled from 'styled-components';

export const NavBarContainer = styled.nav `
  width: 100%;
  height: 70px;
  background-color: var(--dark-gray);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  z-index: 2;
`

export const SearcBoxContainer = styled.div `
  width: 400px;
  height: 40px;
  background-color: var(--background);
  border-radius: var(--border-radius-2);
`