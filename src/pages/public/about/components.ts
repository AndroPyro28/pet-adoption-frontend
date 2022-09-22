import styled from "styled-components";

export const AboutPageContainer = styled.section`
  width: 100%;
  padding: 10px 0px;
  background-color: #fff;
  height: 100vh;
  display: flex;
  & img {
    height: 500px;
    width: auto;
    margin-left: 150px;
  }
`;

export const Main = styled.div`
  width: 1300px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > .about-text {
    margin: 20px;
    width: 600px;
    font-size: 20px;
    & h1 {
      font-size: 50px;
    }
    & > .readbtn {
      background: #d20033;
      color: white;
      text-decoration: none;
      border: none;
      padding: 13px 30px;
      transition: 0.5s;
      &:hover {
        background: transparent;
        border: 2px solid #d20033;
        cursor: pointer;
        color: #000;
      }
    }
  }
`;
