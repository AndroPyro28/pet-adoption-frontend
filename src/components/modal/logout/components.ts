import styled from "styled-components";

export const ModalBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  backdrop-filter: blur(2px);
  & > .logout__form {
    width: 40%;
    height: fit-content;
    position: fixed;
    background: white;
    display: flex;
    flex-direction: column;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: 50px auto;
    border-radius: 10px;
    box-shadow: 1px 3px 5px gray;
  }
`;


export const Warning = styled.div`
  padding: 20px 0px;
  border: solid 1px gray;
  border-inline: none;
  text-align: center;
  font-size: 1.2em;
  margin: 50px auto 20px auto;
  color: rgb(211, 1, 52);
  width: 90%;
  align-items: center;
  & > .warning {
    color: rgb(217, 83, 79);
    font-size: 1.2em;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 10px 10px 20px auto;
  & > button {
    padding: 10px 20px;
    margin: 5px 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:nth-child(1) {
      background: gray;
      color: white;
    }
    &:nth-child(2) {
      color: white;
      background: rgb(211, 1, 52);
    }
  }
`;
