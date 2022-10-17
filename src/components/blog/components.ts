import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  height: 500px;
  max-height: 600px;
  width: 100%;
  justify-content: center;
  margin-block: 50px;
  &:nth-child(even) {
    flex-direction: row;
  }
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

export const ContentImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  gap: 10px;
  overflow: auto;
  overflow-x: hidden;
  justify-content: center;
    & > img {
        flex: 1;
        display: flex;
        height: 100%;
        /* width: 200px; */
         width: 250px;
        object-fit: contain;
}
`;

export const ContentTextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  & > h1 {
    font-size: 4em;
    margin: 10px;
  }

  & > p {
    text-align: justify;
    font-size: 1.4em;
    margin: 10px;
  }
`;
