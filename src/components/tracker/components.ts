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
    height: 300px;
    margin: 20px;
    padding: 30px 5px;
    background: rgba(5, 5, 5, 0.459);
    color: #EAEAEA;
    &:hover {
        cursor: pointer;
    }
    
    & span {
        font-weight: 700;
        text-transform: capitalize;
        margin-right: 10px;
        color: white;
        &::after {
            content: ":";
        }
    }
`

export const PetImage = styled.img`
  object-fit: cover;
  width: 85%;
  height: 150px;
  max-height: 200px;
  align-self: center;
  object-position: center;

  border-radius: 10px;
  max-height: 150px;
`;

export const Breed = styled.h4`
  margin: 5px 15px;
  font-size: 0.9em;
  font-weight: 700;

  text-transform: capitalize;
`;

export const Name = styled.h3`
  margin: 5px 15px;
  font-weight: 700;
  font-size: 0.9em;
  text-transform: capitalize;
`;

export const Status = styled.h5`
  margin: 5px 15px;
  text-transform: capitalize;
  font-weight: 700;
  color: ${({status}: {status:string}) => 
  status === 'PENDING' ? 'lightgray' :
  status === 'READY' ? 'red' : 'lightgreen'
  };
`
export const Traits = styled.p`
  margin: 5px 15px;
  font-size: 0.9em;
  font-weight: 700;
`;

export const Description = styled.p`
  margin: 5px 15px;
  font-size: 0.9em;
  font-weight: 700;
`;