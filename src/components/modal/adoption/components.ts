import styled from "styled-components";

export const AdoptionBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  & > .form {
    position: fixed;
    top: 0;
    padding: 10px 50px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    max-height: 80vh;
    width: 25vw;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: center;
    overflow: hidden;
  }
`;
export const AdoptionForm = styled.div``;

export const Title = styled.h2`
  text-align: center;
  margin: -10px 20px 20px 20px;
  text-transform: uppercase;
`;

export const PetDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  & > img {
    height: 130px;
    max-height: 150px;
    object-fit: cover;
    object-position: top;
    flex: 1;
    max-width: 150px;
    margin: 2.5px;
    border-radius: 10px;
  }
  & > .pet__details {
    display: flex;
    margin: 5px;
    flex: 1;
    flex-direction: column;
    & > :where(h4, span) {
      margin: 2.5px;
      font-size: 0.8em;
    }

    & > h4 {
      font-size: 1em;
    }
    & > span {
      /* &::before {
                content: "- ";
            } */
    }
  }
`;

export const AdoptersDetail = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  & > h4 {
    margin: 20px 0px;
  }
`;

export const Detail = styled.div`
  font-size: 0.9em;
  justify-content: space-between;
  display: flex;
  margin: 2.5px;
  align-items: center;
  color: ${({status}: 
  {status?: string}) => status === "PENDING" ?
   "gray" : status === "APPROVED" ? 
   "green" :  status === "REJECTED" ? 
   "rgb(210, 0, 51)" : "black"};
  
  & > label {
    font-size: 1em;
    flex: 1;
    font-weight: 600;
    color: dimgray;
  }

  & > span {
    font-size: 1em;
    flex: 1;
  }
`;

export const DateScheduleInput = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-size: 0.9em;
    font-style: italic;
  }
`;

export const InputDate = styled.input`
  font-size: 0.9em;
  width: 100%;
  margin: 10px;
  padding: 8px;
  border-radius: 5px;
  border: solid 1px dimgray;
  color: black;
  cursor: pointer;
  outline: none;
`;

export const SubmitButton = styled.button`
  padding: 8px 40px;
  background: rgb(210, 0, 51) !important;
  width: fit-content;
  font-size: 0.9em;
  border: none;
  color: white;
  border-radius: 8px;
  align-self: flex-end;
  cursor: pointer;
  margin-top: 5px;
  &:active {
    scale: 0.9;
  }
`;

export const ApproveButton = styled.button`
  padding: 8px 40px;
  background: rgb(51, 215, 119) !important;
  width: fit-content;
  font-size: 0.9em;
  border: none;
  color: white;
  border-radius: 8px;
  align-self: flex-end;
  cursor: pointer;
  margin-top: 5px;
  &:active {
    scale: 0.9;
  }
`;

export const ExitModal = styled.div`
  & > .minimize {
    position: absolute;
    right: 15px;
    top: 15px;
    color: rgb(210, 0, 51);
    pointer-events: all;
    font-size: 1.3em;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    z-index: 1;
  }
`;
