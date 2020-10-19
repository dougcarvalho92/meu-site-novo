import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    color: #fff;
  background: #ebf2f5;
  }
  body html :root {
    height: 100%;
  }
  body,
input,
input,
textarea {
  font: 600 18px Nunito, sans-serif;
}
`;
