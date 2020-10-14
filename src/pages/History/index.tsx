import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import Header from "../../components/Header";

import { Container, GoBack, Devs } from "./styles";

interface DevInfo {
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  watchers_count: number;
  forks: number;
}

interface Dev {
  id: number;
  full_name: string;
  description: string;
  avatar_url: string;
  login: string;
  url: string;
  repos: DevInfo[];
  location?: string;
  bio?: string;
  twitter_username?: string;
}

const History: React.FC = () => {
  const [searchHistory, setSearchHistory] = useState<Dev[]>(() => {
    const storagedSearches = localStorage.getItem(
      "@GithubExplorer:search-history"
    );

    if (storagedSearches) {
      return JSON.parse(storagedSearches);
    }

    return [];
  });

  return (
    <Container>
      <Header title='Histórico de consultas.' />
      <GoBack>
        <Link to='/'>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </GoBack>

      <Devs>
        {searchHistory.length !== 0 &&
          searchHistory.map((search) => {
            return (
              <Link key={search.id} to={`/devs/${search.login}`}>
                <img src={search.avatar_url} alt={search.login} />
                <div>
                  <strong>{search.full_name}</strong>
                  <p>{search.bio}</p>
                </div>
                <FiChevronRight size={20} />
              </Link>
            );
          })}
      </Devs>
    </Container>
  );
};

export default History;
