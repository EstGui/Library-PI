import styled from 'styled-components';

export const Book = styled.div `
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 0;
  padding: 20px;
  /* width: 215px; */
  height: 310px;
  margin-right: 20px;
  background-color: var(--background);
  color: black;
  border-radius: var(--border-radius-1);

  button {
    background-color: var(--cor-secundaria);
    color: white;
    padding: 8px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease;
    width: 100%;
  }

  button:hover {
    opacity: 0.85;
  }

  a {
    width: 80%;
  }

  img {
    background-color: red;
    height: 200px;
    width: 100%;
  }
`