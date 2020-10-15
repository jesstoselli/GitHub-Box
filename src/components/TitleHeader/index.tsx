import React, { useCallback } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { Container, Title, ReturnButton } from "./styles";

interface TitleHeaderProps {
  title: string;
  goBack: boolean;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ title, goBack }) => {
  const history = useHistory();

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Container>
      <Title>{title}</Title>
      {goBack && (
        <ReturnButton type='button' onClick={handleGoBack}>
          <FiChevronLeft size={16} />
          Voltar
        </ReturnButton>
      )}
    </Container>
  );
};

export default TitleHeader;
