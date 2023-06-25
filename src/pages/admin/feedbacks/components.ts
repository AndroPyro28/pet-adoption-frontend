import styled from "styled-components";

export const FeedbackContainerList = styled.div`
    display: flex;
    flex-direction: column;
`

export const FeedbackListHeaders = styled.div`
    display: flex;
    width: 100%;
    color: gray;

    & > div {
        & > div {
            &:nth-child(1) {
                /* flex: 0.5; */
            }
        }
    }
`