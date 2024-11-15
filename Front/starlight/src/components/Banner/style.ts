import styled from 'styled-components';

export const BannerContainer = styled.div `
  width: 100%;
  position: relative; /* Necessário para posicionar o pseudo-elemento */
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url("../images/image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 600px;
`