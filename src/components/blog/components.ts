import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  height: auto;
  max-height: 600px;
  width: 100%;
  justify-content: center;
  margin-block: 50px;
  position: relative;
  overflow-y: auto;
  &:nth-child(even) {
    flex-direction: row;
  }
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 500px) {
   & {
    /* padding: 0px; */
    /* gap: 0px; */
    &:nth-child(even) {
    flex-direction: column;
  }
    &:nth-child(odd) {
      flex-direction: column;
    }
   }
  }

 

  & .editBtn {
    position: absolute;
    right: 80px;
    font-size: 1.5em;
    color: rgb(51,215,119);
    height: 50px;
    width:50px;
  }

  & .deleteBtn {
    position: absolute;
    right: 20px;
    font-size: 1.5em;
    color: rgb(211,1,52);
    height: 50px;
    width:50px;
  }
`;

export const ButtonContainer = styled.div`
  gap: 10px;
   & > button {
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    border: solid 1px gray;
    cursor: pointer;
   }
`

export const ContentImageContainer = styled.div`
  min-height: 300px;
  /* background: black; */
  flex: 0.8;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  gap: 10px;
  overflow: auto;
  overflow-x: hidden;
  justify-content: center;
    & > img {
        flex: 1;
        height: 100%;
        width: 100%;
        object-fit: contain;
        cursor: pointer;
        margin: auto;

}
@media screen and (max-width:500px) {
  & {
    /* padding: 30px; */
    gap: 10px;
    & > img {
      /* object-fit: cover !important;
      height: 80% !important;
      background: red; */
      object-position: center !important;
      object-fit: cover;
    }
  }
}

`;

export const ContentTextContainer = styled.div`
  min-height: 500px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-inline: 20px;
  /* max-width: 700px; */
  & > h1 {
    font-size: 4em;
    margin: 10px;
  }

  & > p {
    text-align: justify;
    font-size: 1.4em;
    margin: 10px;
  }

  @media screen and (max-width: 800px) {
    & > h1 {
      font-size: 2em;
    }
    & > p {
      font-size: 1em;
    }
  }
`;
