import styled from "styled-components";

export const PetContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 250px;
  width: 250px;
  justify-content: center;
  border-radius: 10px;
  transition: all .1s ease-in-out;
  &:hover {
    box-shadow: 1px 3px 5px #EAEAEA;
    cursor: pointer;
  }
`;

export const PetImage = styled.img`
  object-fit: cover;
  width: 85%;
  height: 150px;
  max-height: 200px;
  align-self: center;
  object-position: top center;
  border-radius: 10px;
  max-height: 150px;
  object-position: center;
`;

export const Breed = styled.h4`
  margin: 10px 15px;
  font-size: 0.9em;
  text-transform: capitalize;
  color: dimgray;
`;

export const Name = styled.h3`
  margin: 10px 15px;
  font-weight: 700;
  text-transform: capitalize;
`;
export const Description = styled.p`
  margin: 5px 15px;
  font-size: 0.9em;
  color: dimgray;
`;
export const ApplyButton = styled.button`
  padding: 8px 50px;
  align-self: center;
  width: fit-content;
  font-size: 0.9em;
  border-radius: 8px;
  border: none;
  outline: none;
  margin: 20px;
  background: rgb(210,0,51);
  color: white;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:active {
    background: black;
    scale: 0.9;
  }
`;
