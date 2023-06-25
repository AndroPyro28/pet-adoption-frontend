import styled from "styled-components";

export const FeedbackDataContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-height: ${({expand}: {expand: boolean}) => expand ? '' : '50px'};
    overflow: hidden;
    cursor: ${({expand}: {expand: boolean}) => expand ? 'zoom-out' : 'zoom-in'};
    padding: 15px 0px;
    border-radius: 10px;
    transition: all .3s ease-in-out;
    &:hover {
        background: #EAEAEA;
    }
`

export const Data = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    font-size: 0.9em;
    &.Action {
        justify-content: space-evenly;
        font-size: 1.5em;
        cursor: pointer;
    }

    & > div > .pin {
        color: rgb(248,173,62);
    }
    & > div > .delete {
        color: maroon;
    }
    & > .star {
        color: rgb(211,1,52);
        color: rgb(248,173,62);
    }
`

export const PinContainer = styled.div`
  cursor: pointer;
    color: ${({pin}: {pin?: boolean}) => pin ? 'rgb(248,173,62)' : ''};
`