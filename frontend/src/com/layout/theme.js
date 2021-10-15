import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  nav: "#000",
  products_headings: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  nav: "#fff",
  p: "#fff",
  products_headings: "#fff",
};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

`;
