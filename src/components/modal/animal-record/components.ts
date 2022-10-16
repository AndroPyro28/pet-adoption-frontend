import styled, {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
  
`
export const AnimalRecordModalBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  & > .AnimaRecordForm {
    position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 40%;
  max-height: 90%;
  border-radius: 10px;
  background: white;
 
  & > h1 {
    margin: 20px 70px;
    font-size: 1.3em;
    color: rgb(211,1,52);
  }
  }
`;

export const InputFieldContainer = styled.div`
  display: flex;
  height: fit-content;
  width: 90%;
  margin: 5px;
  
  & > label:nth-child(1) {
    flex: 0.6;
    margin-top: 20px;
    font-size: 0.8em;
    color: rgb(211,1,52);
    font-weight: 600;
    text-align: center;
  }
  & > input[type="file"]:nth-child(1) {
    flex: 0.6;
    margin-top: 20px;
  }
  & > *:nth-child(2) {
    flex: 1;
  }
`;

export const AnimaRecordForm = styled.div`
  
`

export const InputField = styled.div`
display: flex;
/* margin-top: 5px; */
/* margin-bottom: 5px; */
align-items: center;
& >*:nth-child(1) {
  flex: 0.3;
  max-width: 200px;
  text-align: center;

}
& >*:nth-child(2) {
  flex: 1;
}
& > label {
  color: rgb(211,1,52);
}
  & > img {
    height: 60px;
    object-fit: contain;
  }

  & > .imgUploader {
    height: 60px;
    width: 20%;
    margin: 20px;
    cursor: pointer;
    background: gray;
    position: absolute;
    opacity: 0;
  }

 
`

export const InputCol = styled.div`
    max-width: 300px;
    margin:10px;
    & > input[type="text"], input[type="number"] {
    width: 100% !important;
    height:fit-content;
    outline: none;
    padding: 5px;
    justify-self: flex-start;
    border: none;
    border-bottom: solid 1px gray;
    margin: 10px;
    padding: 10px 5px;
    &:focus {
      border-bottom: solid 1px rgb(211,1,52);
    }
  }

  & > label {
    margin: 10px;
    align-items: center;
  }

  & > textarea {
    width: 105%;
    height:100px;
    max-height: 60px;
    border-radius: 10px;
    outline: none;
    padding: 10px;
  }
`

export const InputRow = styled.div`
    max-width: 300px;
    display: flex;
    & > select {
      outline: none;
      flex: 1;
      padding: 5px 0;
      margin-inline: 5px;
      border: none;
      border-radius: 1px;
      color: gray;
      font-size:0.9em;
    }
`
export const IconContainer = styled.div`
  cursor: pointer;
  & > .submit {
      position: absolute;
      top: 0;
      right: 0;
      margin: 20px;
      font-size: 1.5em;
      color: rgb(211,1,52);
    }

  & > .back {
    position: absolute;
    top: 0;
    left: 0;
    margin: 20px;
    font-size: 1.5em;
    color: rgb(211,1,52);
  }
`