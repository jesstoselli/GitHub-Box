import React, { useEffect, useState } from "react";
import RepoCard from "../../components/RepoCard";
import api from "../../services/api";

import { Container } from "./styles";

interface RepoCardInfo {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
}

interface ReposProps {
  login: string;
}

const Repos: React.FC<ReposProps> = ({ login }) => {
  const [repositoriesInfo, setRepositoriesInfo] = useState<RepoCardInfo[]>();

  useEffect(() => {
    api.get(`/users/${login}/repos`).then((response) => {
      setRepositoriesInfo(response.data);
    });
  }, [login]);

  return (
    <Container>
      <h1>Repositórios</h1>

      {repositoriesInfo &&
        repositoriesInfo.map(
          ({ id, full_name, description, html_url, language }) => (
            <RepoCard
              key={id}
              full_name={full_name}
              description={description}
              html_url={html_url}
              language={language}
            />
          )
        )}
    </Container>
  );
};

export default Repos;
