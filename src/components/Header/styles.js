import styled from "styled-components";

export const Container = styled.div`
  height: 10%;
  background: ${props => (props.signed ? "#4A9F4A" : "#DB5E5E")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;

  h1 {
    color: #ddd;
  }
`;
