import React, { useState, useEffect, FormEvent, useCallback } from "react";
import { FiBox, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../services/api";

import validateEmail from "../../helpers/validateEmail";

import { Container, SearchHistory, Form, Devs, Error } from "./styles";
import Header from "../../components/Header";

interface DevItems {
  items: Dev[];
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
  repos: DevInfo[];
  location?: string;
  bio?: string;
  twitter_username?: string;
}

interface UserInfo {
  name: string;
  location?: string;
  bio?: string;
  twitter_username?: string;
}

const Dashboard: React.FC = () => {
  const [newDev, setNewDev] = useState("");
  const [inputError, setInputError] = useState("");
  const [devs, setDevs] = useState<Dev[]>();
  const [currentId, setCurrentId] = useState<number>();

  const [searchHistory, setSearchHistory] = useState<Dev[]>(() => {
    const storagedSearches = localStorage.getItem(
      "@GithubExplorer:search-history"
    );

    if (storagedSearches) {
      return JSON.parse(storagedSearches);
    }
    return [];
  });

  const saveSearchHistory = useCallback(
    (id: number) => {
      const devToSave = devs?.find((dev) => dev.id === id);

      console.log(devToSave);

      if (devToSave) {
        console.log("inside devtosave");
        const storagedSearches = localStorage.getItem(
          "@GithubExplorer:search-history"
        );

        let oldSearches: Dev[] = [];
        if (storagedSearches) {
          oldSearches = JSON.parse(storagedSearches);

          const isDevAlreadySaved = oldSearches.some((dev) => dev.id === id);

          if (isDevAlreadySaved) {
            return;
          } else {
            return setSearchHistory([...oldSearches, devToSave]);
          }
        } else {
          console.log("não existia nenhum salvo");
          return setSearchHistory([devToSave]);
        }
      }
    },
    [devs]
  );

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:search-history",
      JSON.stringify(searchHistory)
    );
  }, [searchHistory]);

  useEffect(() => {
    if (currentId) {
      saveSearchHistory(currentId);
    }
  }, [currentId, saveSearchHistory]);

  async function handleAddDev(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newDev) {
      setInputError("Digite nome ou email para pesquisar.");
      return;
    }

    try {
      let devsToAdd: Dev[] = [];

      const response = await api.get<DevItems>(
        `search/users?q=${newDev}+in:${
          validateEmail(newDev) ? "email" : "name"
        }`
      );

      await Promise.all(
        response.data.items.map(async (item) => {
          const response2 = await api.get<UserInfo>(item.url);

          const devToAdd = {
            ...item,
            full_name: response2.data.name,
            bio: response2.data.bio,
          };

          console.log(devToAdd);

          return devsToAdd.push(devToAdd);
        })
      );

      setDevs(devsToAdd);

      setNewDev("");
      setInputError("");
    } catch (err) {
      setInputError("Erro na busca.");
    }
  }

  return (
    <Container>
      <Header title='Explore repositórios no Github e encontre seu dev ideal.' />

      <SearchHistory>
        <Link to='/search-history'>
          <FiBox size={50} />
          <span>Histórico de Consultas</span>
        </Link>
      </SearchHistory>

      <Form hasError={!!inputError} onSubmit={handleAddDev}>
        <input
          value={newDev}
          onChange={(e) => setNewDev(e.target.value)}
          placeholder='Digite o nome ou email do dev'
        />
        <button type='submit'>Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Devs>
        {devs &&
          devs.map((dev) => (
            <Link
              key={dev.id}
              to={`/devs/${dev.login}`}
              onClick={(e) => {
                setCurrentId(dev.id);
              }}
            >
              <img src={dev.avatar_url} alt={dev.login} />
              <div>
                <strong>{dev.full_name}</strong>
                <p>{dev.bio ?? "Bio não disponível."}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          ))}
      </Devs>
    </Container>
  );
};

export default Dashboard;
