import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;

  z-index: 10;

  vertical-align: middle;

  background: #3d3d4c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Content = styled.section`
  margin: 0 auto;
  max-width: 960px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;

    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #a8a8b3;

    text-decoration: none;

    svg {
      margin-right: 8px;
      color: #a8a8b3;
    }

    &:hover {
      color: #e9e9e9;
    }
    & + a {
      margin-left: 32px;
    }
  }
`;
