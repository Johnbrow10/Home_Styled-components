import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <React.Fragment>
      <Container>
        <Text>Aula sobre styled-components</Text>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 90px;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #874980;
  align-items: center;
`;

const Text = styled.div`
  text-decoration: none;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  position: relative;
  align-items: center;
`;
