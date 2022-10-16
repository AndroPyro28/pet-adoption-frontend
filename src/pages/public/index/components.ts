import styled from "styled-components";

export const IndexPageContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("/images/img/background1.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  overflow-x: hidden;
`;

export const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: left;
  margin-left: 200px;
  color: #fff;
  & > h1 {
    font-size: 40px;
    margin-top: 100px;
    font-weight: 100;
  }
  & > h2 {
    margin: 10px auto;
    font-size: 60px;
    &::before {
      color: #d20033;
      content: "Saving ";
    }
  }
  & > div a {
    text-decoration: none;
  }
  & > div .btn {
    width: 160px;
    padding: 10px 0;
    text-align: center;
    margin: 20px 10px;
    border-radius: 25px;
    border: 2px solid #d20033;
    background: transparent;
    color: #fff;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
      border: none;
    }
    &:hover span {
      width: 100%;
    }
  }
  & > div span {
    background: #d20033;
    height: 100%;
    width: 0;
    border-radius: 25px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: 0.5s;
  }
`;

export const About = styled.div`
  width: 100%;
  padding: 78px 0px;
  background-color: #fff;
  & img {
    height: auto;
    width: 600px;
  }
  & .about-text {
    margin: 50px;
    width: 600px;
    font-size: 25px;
    & > h1 {
      font-size: 60px;
    }
  }
`;

export const Main = styled.div`
  width: 1300px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & .readbtn {
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
`;

export const Donation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 100px 0px;
  padding: 100px 0px;
  background: #EAEAEA;
`

export const Gcash = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  & > ol {
    flex: 1;
    & > li {
      margin: 15px 20px;
      font-size: 1em;
    }
  }
  & > img {
    flex: 0.6;
    height: 400px;
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
  }

`

export const Bank = styled.div`
  display: flex;
  margin: 70px 0px;
  flex-direction: column;
  width: 80%;

  & > h3 {
    margin: 30px 0px;
  }
`

export const Detail = styled.div`
  display: flex;
  width: 50%;
  margin: 10px 0px;
  & > label {
    font-weight: 600;
    flex: 1;
  }
  & > span {
    font-weight: 500;
    flex: 1;
  }
`

export const Paypal = styled.div`
    width: 80%;

    & > h3 {
        margin: 10px 0px;
    }

    & > p {
      font-size: 0.9em;
      margin: 2.5px 0px;
    }

    & > h4 {
      font-size: 1.1em;
      margin: 25px 0px;
      color: rgb(19,93,205);
      text-decoration: underline;
    }
`