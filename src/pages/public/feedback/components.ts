import styled from "styled-components";

export const FeedbackContainer = styled.div`

`

export const Banner = styled.div`
    height: 600px;
    background: url('/images/content/feedback.jpg');
    background-size: cover;
    background-position: center;
`

export const FeedbackAverage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h2 {
        margin: 50px;
    }
`

export const Ratings = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* border: solid 1px black; */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    font-size: 1.3em;
    background: rgb(248,173,62);
    font-weight: 1000;
    position: relative;
    & > .star {
        font-size: 3.5em;
        position: absolute;
        color: red;
    }

    & > span {
        color: white;
        z-index: 1;
    }
`