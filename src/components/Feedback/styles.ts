/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Цветовая палитра
export const colors = {
  primaryLight: '#2e7d32',
  primaryDark: '#81c784',
  secondaryLight: '#d32f2f',
  secondaryDark: '#ef9a9a',
  backgroundLight: '#ffffff',
  backgroundDark: '#121212',
  backgroundBlue: '#0579d7',
  textLight: '#ffffff',
  textDark: '#212121',
};

export const feedbackStyles = {
  // Контейнер обратной связи
  container: (theme) => css`
    background-color: ${theme === 'light' ? colors.backgroundLight : colors.backgroundBlue};
    width: min(90%, 800px);
    margin: 6rem auto 2rem;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    display: grid;
    gap: 1.5rem;
    color: ${theme === 'light' ? colors.textDark : colors.textLight};

    @media (max-width: 768px) {
      padding: 1.5rem;
      gap: 1.2rem;
      margin-top: 5rem;
    }
  `,

  // Обёртка
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
    background-color: ${colors.backgroundLight};
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,

  // Заголовок
  title: css`
    font-size: 2.5rem;
    font-weight: bold;
    color: ${colors.textDark};
    margin-bottom: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  `,

  // Статистика
  stats: css`
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  `,

  statItem: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `,

  statCount: css`
    font-size: 2rem;
    font-weight: bold;
  `,

  statLabel: css`
    font-size: 1rem;
    color: ${colors.textDark};
  `,

  // Кнопки действий
  actions: css`
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  `,

  button: (type) => {
    const baseButtonStyle = css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      font-size: 1.1rem;
      font-weight: bold;
      border: 2px solid transparent;
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      &:focus {
        outline: none;
        box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
      }
    `;

    switch (type) {
      case 'like':
        return css`
          ${baseButtonStyle};
          background-color: ${colors.primaryLight};
          color: ${colors.textLight};

          &:hover {
            background-color: ${colors.primaryDark};
            transform: scale(1.05);
          }
        `;
      case 'dislike':
        return css`
          ${baseButtonStyle};
          background-color: ${colors.secondaryLight};
          color: ${colors.textLight};

          &:hover {
            background-color: ${colors.secondaryDark};
            transform: scale(1.05);
          }
        `;
      case 'reset':
        return css`
          ${baseButtonStyle};
          background-color: blue;
          color: ${colors.textLight};

          &:hover {
            background-color: ${colors.backgroundBlue};
            color: ${colors.textDark};
            transform: scale(1.05);
          }
        `;
    }
  },

  // Секция сброса
  resetSection: css`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  `,
};
