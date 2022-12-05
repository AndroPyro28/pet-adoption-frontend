import styled from "styled-components";

export const AboutPageContainer = styled.section`
  width: 100%;
  padding: 0px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* margin-top: ${({giveMarginToTop}: {giveMarginToTop:boolean}) => giveMarginToTop ? "100px" : "0px"}; */
  /* margin-top: 100px ; */

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

export const PinnedFeedbackList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  @media screen and (max-width: 750px) {
  grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 550px) {
  grid-template-columns: repeat(1, 1fr);
  }
`

export const FeedbackSection = styled.section`
padding: 50px 0px;
margin: 100px 0px;
background: #EAEAEA;
& > .feedback__h1 {
    text-align: center;
    margin: 120px;
    font-size: 2em;
  }
`

export const MissionVision = styled.div`
  background: url('/images/content/cristian-castillo-73pyV0JJOmE-unsplash.jpg');
  height: 600px;
  background-size: cover;
  background-position: bottom;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`

export const RightContent= styled.div`
display: flex;
flex: 1;
justify-content: center;
flex-direction: column;
gap: 50px;
`
export const Vision = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  & > h1 {
    font-size: 1.5em;
    text-shadow: 1px 3px 5px black;
    font-weight:400;
  }

  & > p {
    text-shadow: 1px 3px 5px black;
    font-size: 0.9em;
    width:90%;
    text-align:center;
  }
`
export const Mission = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  & > h1 {
    font-size: 1.5em;
    text-shadow: 1px 3px 5px black;
    font-weight:400;
  }

  & > p {
    text-shadow: 1px 3px 5px black;
    font-size: 0.9em;
    width:90%;
    text-align:center;
  }
`

export const LeftContent= styled.div`
display: flex;
flex: 1;
justify-content: flex-end;
align-items: flex-start;
height: 100%;
  & > h1 {
    margin: 200px 20px;
    width: 70%;
    font-size: 2em;
    font-style: italic;
    text-shadow: 1px 3px 5px black;
  }

  & > p {
    
  }
`