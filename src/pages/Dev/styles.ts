import styled from "styled-components";
import { shade } from "polished";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    background: none;
    outline: none;
    border: 0;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const DevGitHubInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
`;

export const PersonalInfo = styled.div`
  padding-left: 144px;
  margin-bottom: 48px;

  p {
    font-size: 18px;
    color: #737380;
    margin-bottom: 8px;

    strong {
      margin-left: 8px;
      font-weight: 600;
      color: #3d3d4d;

      a {
        text-decoration: none;
        color: #3d3d4d;

        &:hover {
          color: ${shade(0.2, "#3d3d4d")};
        }
      }
    }
  }
`;
