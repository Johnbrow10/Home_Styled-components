import React from "react";
import styled from "styled-components";
// import { Container } from './styles';

export default function Header() {
  return (
    <>
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>Contato</NavItem>
        <NavItem>Sobre</NavItem>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  background-color: #434980;
  width: auto;
  margin: 0 auto;
  position: relative;
  align-items: center;
  padding: 10px 20px 10px 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.p`
  font-size: 16px;
  font-family: "Read";
  font-weight: bold;
  color: #fff;
`;
