import styled from "styled-components";

export const ShelterInformationContainer = styled.div`
    display: flex;
    flex-direction:column;
`

export const Information = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 80vh;
    max-height: 75vh;
    background: white;
    border-radius: 20px;
    align-items: center;
`
export const ShelterTeam = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h2 {
        text-transform: capitalize;
    }
`

export const ShelterImageContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    & > img {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        object-fit: cover;
        margin: 20px;
    }
`

export const OurEmployees = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h2 {
        text-transform: capitalize;
    }
`

export const EmployeeImageContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;    

    & > img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        margin: 20px;
    }
`