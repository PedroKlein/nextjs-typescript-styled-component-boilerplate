import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: white;
  }
  *, button, input {
    border: 0;
    background: none;
  }
  ul {
    list-style: none;
  }
  :root {
    ${(props) => {
      const theme = props.theme;

      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}
  }
`;
