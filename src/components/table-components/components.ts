import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
`;
export const TableHead = styled.div`
  flex: 1;
  color: gray;
  margin-bottom: 15px;
  font-family: "roboto", sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
  font-size: 1.1em;
  &:nth-child(1) {
    flex: 0.5;
  }
`;

export const TableData = styled.div`
  flex: 1;
  color: black;
  border-bottom: solid 1px lightgray;
  padding: 20px 0px;
  font-weight: 600;
  max-height: 60px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:1em;
  text-transform: capitalize;
  font-family: 'poppins','roboto', sans-serif !important;
  &:nth-child(1) {
    flex: 0.5;
  }
  & > span {
    color: white;
    font-size: inherit;
    padding: 3px 20px;
    border-radius: 20px;

    &.ADOPTED {
      background: rgba(7, 207, 90, 0.822);
    }
    &.READY {
      background: rgb(211, 1, 52);
    }
    &.PENDING {
      background: gray;
    }
  }

  & > button {
    border: none;
    outline: none;
    padding: 5px 15px;
    border-radius: 10px;
    background: rgb(51,215,119);
    color: white;
    font: inherit;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
