import React from "react";
import { Global, css } from "@emotion/react";

const globalStyles = css`
  /* Импорт шрифтов */
  @import url("https://fonts.googleapis.com/css?family=Lato:400,700");

  /* Сброс стилей */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: "Lato", sans-serif;
    background-color: #f9f9f9; /* Нейтральный фон */
    color: #333; /* Основной цвет текста */
    line-height: 1.6;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  /* Убираем лишние отступы */
  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    padding: 0;
  }
`;

function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;
