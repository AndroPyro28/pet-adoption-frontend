import styled from "styled-components";

export const FirstColContent = styled.div`
  margin-top: 25px;
`;

export const ListBox = styled.div`
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ListBoxDataContainer = styled.div`
  display: flex;
  padding: 15px 5px;
  align-items: center;
  font-weight: 700;
  color: gray;
  font-size: 0.9em;
  text-transform: capitalize;
`;
export const ImageData = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Data = styled.div`
  flex: 1;
  text-align: center;
  &.ADOPTED {
    color: rgba(7, 207, 90, 0.822);
  }
  &.READY {
    color: rgb(211, 1, 52);
  }
  &.PENDING {
    color: gray;
  }
`;

export const CalendarContainer = styled.div`
  height: 500px;
  background: white;
  border-radius: 10px;
  padding: 10px;
`
