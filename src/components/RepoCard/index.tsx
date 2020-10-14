import React from "react";
import { FiChevronRight } from "react-icons/fi";

import { Container } from "./styles";

interface RepoCardProps {
  full_name: string;
  description: string;
  html_url: string;
  language: string;
}

const RepoCard: React.FC<RepoCardProps> = ({
  full_name,
  description,
  html_url,
  language,
}) => {
  return (
    <Container>
      <a href={html_url} rel='noopener noreferrer' target='_blank'>
        <div>
          <strong>{full_name}</strong>
          <p>{description ?? "Descrição não disponível."}</p>
          <span>{language}</span>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Container>
  );
};

export default RepoCard;
