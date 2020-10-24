import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font: 400 18px Nunito, sans-serif;
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

input{
  border: none;
  border-radius: 10px;
  height: 32px;
  padding: 24px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #d3e2e5;
}
`;
