import styled from "styled-components";

export const GalleryPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 250px;
`;
export const Dozens = styled.div`
  margin-bottom: 35px;
  margin-top: -20px;
  text-align: center;
  font-size: 20px;
`;

export const Pics = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 55%;
  & > #myImg {
    margin-bottom: 35px;
    margin-top: -20px;
    text-align: center;
    font-size: 20px;
    cursor: zoom-in;
    & > #myImg {
      opacity: 0.7;
    }
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 500;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  & .closeBtn {
    position: absolute;
    right: 40px;
    top: 20px;
    color: white;
    font-size: 2em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: gray !important;
    }
  }
  & > img {
    display: block;
    max-height: 500px;
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 20px;
    overflow: hidden;
  }
`;

export const DisplayImage = styled.img``;