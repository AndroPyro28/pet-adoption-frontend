import styled from "styled-components";


export const DashboardContainer = styled.div`
    display: flex;
`

export const FirstCol = styled.div`
    flex: 1;
    overflow: auto;
    padding: 10px;
    max-height: 83vh;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px #EAEAEA;
    }
    &::-webkit-scrollbar-thumb {
        background: #EAEAEA;
        border-radius: 10px;
    }
    & > div {
        
        & > h1 {
            margin: 5px;
        }
        & > div {
            height: 300px;
            max-height: 35vh;
        }
    }
`
export const SecondCol = styled.div`
    flex: 1;
    padding: 10px;
    overflow: auto;
    & > div {
        & > h1 {
            margin: 5px;
        }
    }
`