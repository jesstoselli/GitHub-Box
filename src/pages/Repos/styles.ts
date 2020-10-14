import styled from "styled-components";

export const Container = styled.main`
  width: 960px;
  height: 848px;

  background: #eaeaf1;
  border-radius: 10px;

  padding: 48px 58px;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #3d3d4c;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #3d3d4c;
  }

  h1 {
    font-size: 36px;
    color: #3d3d4d;
    padding-bottom: 16px;
    margin-bottom: 48px;
    border-bottom: 2px solid #3d3d4c;
  }
`;

// export const RepoHeader = styled.header`
//   ul {
//     display: flex;
//     list-style: none;

//     padding-bottom: 16px;
//     border-bottom: 2px solid #3d3d4c;

//     margin-bottom: 48px;

//     li {
//       & + li {
//         margin-left: 64px;
//       }

//       strong {
//         display: block;
//         font-size: 32px;
//         color: #3d3d4d;
//       }

//       span {
//         display: block;
//         margin-top: 4px;
//         color: #6c6c80;
//       }
//     }
//   }
// `;
