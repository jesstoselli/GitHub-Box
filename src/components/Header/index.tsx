import React from "react";

import logoImg from "../../assets/logo.svg";

import { Container, Title } from "./styles";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <img src={logoImg} alt='github box' />
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
