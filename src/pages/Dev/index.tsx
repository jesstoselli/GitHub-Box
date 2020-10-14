import React, { useCallback, useEffect, useState } from "react";
import { useRouteMatch, Link, useHistory } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import api from "../../services/api";

import Repos from "../Repos";
import logoImg from "../../assets/logo.svg";

import { Header, DevGitHubInfo, PersonalInfo } from "./styles";

interface DevParams {
  login: string;
}

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
  repos: DevInfo;
  location?: string;
  bio?: string;
  email?: string;
  twitter_username?: string;
}

const Dev: React.FC = () => {
  const [repository, setRepository] = useState<Dev | null>(null);

  const { params } = useRouteMatch<DevParams>();

  const history = useHistory();

  useEffect(() => {
    api.get(`/users/${params.login}`).then((response) => {
      const devToAdd = {
        ...response.data,
        full_name: response.data.name,
      };

      console.log(response.data);
      setRepository(devToAdd);
    });
  }, [params, params.login]);

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <>
      <Header>
        <Link to='/'>
          <img src={logoImg} alt='Github Explorer' />
        </Link>
        <button type='button' onClick={handleGoBack}>
          <FiChevronLeft size={16} />
          Voltar
        </button>
      </Header>

      {repository && (
        <DevGitHubInfo>
          <header>
            <img src={repository.avatar_url} alt={repository.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.bio}</p>
            </div>
          </header>

          <PersonalInfo>
            <p>
              Email:
              {repository.email ? (
                <strong>{repository.email}</strong>
              ) : (
                <strong>Email não disponível.</strong>
              )}
            </p>
            <p>
              Location: <strong>{repository.location}</strong>
            </p>
            <p>
              Twitter:
              {repository.twitter_username ? (
                <strong>
                  <a
                    href={`https://twitter.com/${repository.twitter_username}`}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    @{repository.twitter_username}
                  </a>
                </strong>
              ) : (
                <strong>Twitter não disponível.</strong>
              )}
            </p>
          </PersonalInfo>
        </DevGitHubInfo>
      )}

      {repository && <Repos login={repository.login} />}
    </>
  );
};

export default Dev;
