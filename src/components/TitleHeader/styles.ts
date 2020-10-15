import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  max-width: 960px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #3a3a3a;
  max-width: 660px;
  line-height: 56px;

  margin-top: 80px;
`;

export const ReturnButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  text-decoration: none;
  color: #a8a8b3;
  background: none;
  outline: none;
  border: 0;
  font-size: 18px;
  transition: color 0.2s;

  &:hover {
    color: #666;
  }
`;
