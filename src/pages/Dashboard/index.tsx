import React, { useState, FormEvent, useCallback } from "react";
import { useDispatch } from "react-redux";

// Interfaces
import IDev from "../../dtos/IDev";

import api from "../../services/api";

import validateEmail from "../../helpers/validateEmail";

// Components
import TitleHeader from "../../components/TitleHeader";
import DevCard from "../../components/DevCard";
import Spinner from "../../components/Spinner";

import { Container, Form, Devs, Error } from "./styles";
import { addLastSearch } from "../../store/actions/lastSearchActions";

interface DevItems {
  items: IDev[];
}

interface UserInfo {
  name: string;
  location?: string;
  bio?: string;
  twitter_username?: string;
}

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [newDev, setNewDev] = useState("");
  const [inputError, setInputError] = useState("");
  const [devs, setDevs] = useState<IDev[]>(() => {
    const storagedSearch = localStorage.getItem("@GithubBox:lastSearch");

    if (storagedSearch) {
      return JSON.parse(storagedSearch);
    }
    return [];
  });

  const handleAddDev = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      if (!newDev) {
        setInputError("Digite nome ou email para pesquisar.");
        return;
      }

      setIsLoading(true);

      try {
        let devsToAdd: IDev[] = [];

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

            return devsToAdd.push(devToAdd);
          })
        );

        setDevs(devsToAdd);
        dispatch(addLastSearch(devsToAdd));

        setNewDev("");
        setInputError("");

        setIsLoading(false);
      } catch (err) {
        setInputError("Erro na busca.");
      }
    },
    [newDev, dispatch]
  );

  return (
    <Container>
      <TitleHeader
        title='Explore repositórios no Github e encontre seu dev ideal.'
        goBack={false}
      />

      <Form hasError={!!inputError} onSubmit={handleAddDev}>
        <input
          value={newDev}
          onChange={(e) => setNewDev(e.target.value)}
          placeholder='Digite o nome ou email do dev'
        />
        <button type='submit'>Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      {isLoading ? (
        <Spinner />
      ) : (
        <Devs>
          {devs && devs.map((dev) => <DevCard key={dev.id} devData={dev} />)}
        </Devs>
      )}
    </Container>
  );
};

export default Dashboard;
