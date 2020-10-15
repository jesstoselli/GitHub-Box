import React, { useEffect, useCallback, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";

// Interfaces
import IDev from "../../dtos/IDev";

// Actions
import { addSearch } from "../../store/actions/searchesActions";
import {
  addFavoriteDev,
  removeFavoriteDev,
} from "../../store/actions/favoriteActions";

// Components
import TitleHeader from "../../components/TitleHeader";
import Repos from "../Repos";

import { DevGitHubInfo, PersonalInfo } from "./styles";
import { AppState } from "../../dtos/AppState";

interface DevParams {
  login: string;
}

const Dev: React.FC = () => {
  const dispatch = useDispatch();
  const favoriteDevs = useSelector<AppState, IDev[]>(
    (state) => state.favorites.favoriteDevs
  );

  const [repository, setRepository] = useState<IDev | null>(null);
  const [isFavorited, setIsFavorited] = useState(false);

  const { params } = useRouteMatch<DevParams>();

  useEffect(() => {
    api.get(`/users/${params.login}`).then((response) => {
      const devToAdd = {
        ...response.data,
        full_name: response.data.name,
      };

      const isDevAlreadySaved = favoriteDevs.some(
        (dev) => dev.id === devToAdd.id
      );

      setIsFavorited(isDevAlreadySaved);
      setRepository(devToAdd);
    });
  }, [params, params.login, favoriteDevs]);

  useEffect(() => {
    if (repository) {
      dispatch(addSearch(repository));
    }
  }, [dispatch, repository]);

  const handleFavoriting = useCallback(() => {
    if (repository) {
      if (!isFavorited) {
        setIsFavorited(true);
        dispatch(addFavoriteDev(repository));
      } else if (isFavorited) {
        setIsFavorited(false);
        dispatch(removeFavoriteDev(repository));
      }
    }
  }, [repository, dispatch, isFavorited]);

  return (
    <>
      <TitleHeader title='' goBack={true} />

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
            <button type='button' onClick={handleFavoriting}>
              {isFavorited ? (
                <>
                  <HiHeart size={30} />
                  <p>Desfavoritar</p>
                </>
              ) : (
                <>
                  <HiOutlineHeart size={30} />
                  <p>Favoritar</p>
                </>
              )}
            </button>
            <div>
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
            </div>
          </PersonalInfo>
        </DevGitHubInfo>
      )}

      {repository && <Repos login={repository.login} />}
    </>
  );
};

export default Dev;
