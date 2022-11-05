import styled, { createGlobalStyle } from "styled-components";

export const globalStyles = createGlobalStyle`

`;

export const BlogModalBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(2.5px);
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;

  & > .BlogContainer {
    /* height: 70vh; */
    border-radius: 10px;
    /* width: 120vw; */
    background: white;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 40px 30px;
    gap: 10px;

    @media screen and (max-width:900px) {
    width: 80vw !important;
    height:70vh !important;
    }
    @media screen and (max-width:700px) {
    width: 90vw !important;
    height:80vh !important;
    }
    @media screen and (max-width:500px) {
      padding: 20px 10px;
    }
    & > h1 {
      text-align: center;
    }

    & > button {
      margin-top: 50px;
      padding-block: 10px;
    }

    & .closeBtn {
      position: absolute;
      top: 10px;
      right: 20px;
    }
  }
`;
export const UploadContainer = styled.div`
  display: flex;
  /* width: 100%; */
  height: 83%;
  gap: 20px;
  @media screen and (max-width:500px) {
    flex-direction: column;
    }
`;

export const TextContentUploader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  flex: 2;
  height: 100%;
  & > .content {
    height: 100%;
    overflow: hidden;
  }
  & > .title {
    padding: 10px 15px;
    width: 94.3%;
    max-width: 100%;
    border: solid 1px lightgray;
    outline: none;
    overflow: hidden;
    @media screen and (max-width:700px) {
      max-width: 90%;
    }
  }
`;

export const ImageContentUploader = styled.div`
  width: 100%;
  flex: 0.8;
  /* height: 98%; */
  height: auto;;
  border: solid 1px lightgray;
  & > .photoUploaderBtn {
    width: fit-content;
    text-align: center;
    margin: 0px auto;
    font-style: italic;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    cursor: pointer;
    height: 10%;
    align-items: center;
  }

  & > input[type="file"] {
    display: none;
  }

   & > select {
    padding: 5px 10px;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 1px;
    border-bottom: solid 1px #EAEAEA;
   }

  & > button {
    margin: 10px 0px;
    width: 100%;
    padding: 10px 0px;
    outline: none;
    border-radius: 5px;
    background: rgb(211, 33, 76);
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
    }
  }
`;

export const ImageContainer = styled.div`
  height: 90%;
  width: 20vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  & > div {
    width: 100%;
    margin: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    transition: all .2s ease-in-out;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 0.9em;
    &:hover {
        background: rgb(211,33,76);
        color: white;
    }
    & > img {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      object-fit: cover;
    }
  }
`;
