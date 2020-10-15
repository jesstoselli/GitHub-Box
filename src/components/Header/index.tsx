import React from "react";
import { FiBox } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";

import { Container, Content, Menu } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to='/'>
          <img src={logoImg} alt='github box' />
        </Link>
        <Menu>
          <Link to={"/search-history"}>
            <FiBox size={24} /> buscas
          </Link>
          <Link to={"/favorites"}>
            <HiOutlineHeart size={27} /> favoritos
          </Link>
        </Menu>
      </Content>
    </Container>
  );
};

export default Header;
