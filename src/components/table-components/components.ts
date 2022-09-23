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
  font-size: 0.8em;
  text-transform: capitalize;
  & > span {
    color: white;
    font-size: inherit;
    padding: 3px 20px;
    border-radius: 20px;

    &.adopted {
      background: rgba(7, 207, 90, 0.822);
    }
    &.ready {
      background: rgb(211, 1, 52);
    }
    &.pending {
      background: gray;
    }
  }
`;
