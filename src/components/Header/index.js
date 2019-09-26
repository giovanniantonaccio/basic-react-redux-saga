import React from "react";
import { useSelector } from "react-redux";

import { Container } from "./styles";

export default function Header() {
  const count = useSelector(state => state.count.counter);
  const signed = useSelector(state => state.auth.signed);

  return (
    <Container signed={signed}>
      <h1>Logged in: {String(signed)}</h1>
      <h1>Total count: {count}</h1>
    </Container>
  );
}
