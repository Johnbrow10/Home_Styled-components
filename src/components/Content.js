import React from "react";
import styled from "styled-components";
// import { Container } from './styles';

function Content() {
  return (
    <React.Fragment>
      <Container>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Container>
    </React.Fragment>
  );
}

export default Content;

const Container = styled.main`
  margin: 0 auto;
  background-color: #2fdfed;
  width: 100vw;
  height: 85vh;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Text = styled.p`
  margin-top: 0px;
  padding-top: 100px;
  color: #000;
  text-align: initial;
  font-family: "Read";
`;
