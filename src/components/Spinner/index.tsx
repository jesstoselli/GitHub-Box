import React from "react";

import { Container } from "./styles";

const Spinner: React.FC = () => {
  return (
    <Container>
      <div className='loader'></div>
      <h3>Buscando devs...</h3>
    </Container>
  );
};

export default Spinner;
