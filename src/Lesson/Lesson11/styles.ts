
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`;
export const StyledContainer = styled.div`
  position: relative;
  background: linear-gradient(135deg, #ffffff, #f0f4f8);
  min-height: 100vh;
  width: 100vw;
  padding: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  &::before,
  &::after {
    content: "🐾";
    font-size: 4rem;
    position: absolute;
    opacity: 0.1;
  }
  &::before {
    top: 10px;
    left: 10px;
  }
  &::after {
    bottom: 10px;
    right: 10px;
  }
`;

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  background: linear-gradient(45deg, #ff9a9e, #fad0c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  padding: 0.5rem 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const ActionButton = styled.button<{ variant: "primary" | "danger" }>`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 12px;
  background: ${({ variant }) =>
    variant === "primary"
      ? "linear-gradient(45deg, #ff9a9e, #fad0c4)"
      : "linear-gradient(45deg, #f77062, #fe5196)"};
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0.5rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    background: #d1d5db;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const FactsContainer = styled.div`
  width: 100%;
  max-height: 600px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.9);
  border: 2px dashed #ffc0cb;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease;
`;

export const FactItem = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #ffe4e1;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #ffb6c1;
`;

export const CatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FactText = styled.p`
  margin: 0;
  padding: 0 1rem;
  font-size: 1rem;
  color: #34495e;
  line-height: 1.5;
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #e74c3c;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: auto;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: rotate(540deg) scale(1.2);
    color: #c0392b;
  }
`;

export const ErrorMessage = styled.div`
  color: #c0392b;
  background: #fdecea;
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  animation: ${shake} 0.5s ease;
`;

