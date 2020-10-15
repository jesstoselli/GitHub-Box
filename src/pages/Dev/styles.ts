import styled from "styled-components";
import { shade } from "polished";

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
  /* padding-left: 144px; */
  margin-bottom: 48px;
  display: flex;

  button {
    border: none;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #3d3d4d;
    background-color: #eaeaf1;
    padding: 8px;
    border-radius: 8px;

    cursor: pointer;

    margin: 32px;

    transition: color 0.2s;
    transition: background-color 0.2s;

    p {
      margin-top: 4px;
    }

    &:hover {
      color: #eaeaf1;
      background-color: #737380;
    }
  }

  div {
    margin-left: 16px;

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
  }
`;
