import React from "react";
import styled from "styled-components";
import { ReactComponent as IconMenu } from "../../static/imgs/IconMenu.svg";

const HeaderDiv = styled.header`
  display: flex;
  background-color: green;
  height: 60px;
  align-items: center;
`;

const IconDiv = styled.div`
  display: flex;
  border: 2px solid black;
  border-radius: 50%;
  padding: 5px;
  margin: 0 10px 0 10px;
  cursor: pointer;

  &:hover {
    border-color: blue;
  }
`;

const TitleDiv = styled.div`
  margin-left: 50px;
  font-size: 25px;
`;

const StyledIconMenu = styled(IconMenu)``;

function Header() {
  return (
    <HeaderDiv>
      <IconDiv>
        <StyledIconMenu />
      </IconDiv>
      <TitleDiv>JimmyDumi's Blog</TitleDiv>
    </HeaderDiv>
  );
}

export default Header;
