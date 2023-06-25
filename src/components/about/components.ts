import styled from "styled-components";

export const PinnedFeedbackContainer = styled.div`
  display: flex;
  margin: 50px 10px;
  flex-direction: column;
  flex: 1;
  height:200px;
  align-items: center;

`

export const PinnedFeedbackHead = styled.div`
  display: flex;
  width: 100%;
  & > img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 60px;
  }
`

export const PinnedFeedbackBody = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    margin: 0px 10px;
    text-transform: capitalize;
   & > .star {
    color: rgb(248,173,62)
  }
  }

  & > p {
    margin: 10px 20px;
    font-size: 0.9em;
    color: dimgray;
    @media screen and (max-width: 550px) {
      margin: 10px ;
    }
  }
  
`