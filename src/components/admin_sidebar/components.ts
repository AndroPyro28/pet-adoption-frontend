import styled from "styled-components";

export const AdminSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 25em;
  background: white !important;
  font-size: 1em;
  font-weight: 600;
  color: rgb(179, 177, 177);
  position: relative;
  /* height: 100vh; */
  & > img {
    align-self: center;
    margin-top: 30px;
  }

  & > a {
    width: 70%;
    font-size: 0.9em;
    border-radius: 10px;
    padding: 10px 30px;
    margin-block: 5px;
    align-self: center;
    color: gray;
    transition: all .3s ease-in-out;
    &:hover {
        background: #EAEAEA;
        color: rgb(65, 65, 65);

    }
  }
`;
export const LogoutButton = styled.div`
    width: 70%;
    border: none;
    font-size: 1em;
    font-weight: 600;
    background: none;
    color: rgb(179, 177, 177);
    border-radius: 10px;
    margin-top: 30px;
    align-self: center;
    color: gray;
    transition: all .3s ease-in-out;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 0.9em !important;

    &:hover {
        background: #EAEAEA;
        color: rgb(65, 65, 65);
    }
`
export const ProfileButton = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    width: fit-content;
    text-align: center;
    margin: auto;
    padding: 10px 20px;
    background: rgb(239, 242, 241);
    border-radius: 10px;
    color: rgb(211,1,52) !important;
    font-size: 0.9em !important;

    & > span {
      color: rgb(65, 65, 65);

    }
  
`