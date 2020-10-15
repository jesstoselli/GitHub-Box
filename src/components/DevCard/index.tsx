import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Card } from "./styles";

interface DevCardProps {
  devData: {
    id: number;
    login: string;
    avatar_url: string;
    full_name: string;
    bio?: string;
  };
}

const DevCard: React.FC<DevCardProps> = ({ devData }) => {
  const { id, login, avatar_url, full_name, bio } = devData;

  return (
    <Card>
      <Link key={id} to={`/devs/${login}`}>
        <img src={avatar_url} alt={login} />
        <div>
          <strong>{full_name}</strong>
          <p>{bio ?? "Bio não disponível."}</p>
        </div>
        <FiChevronRight size={20} />
      </Link>
    </Card>
  );
};

export default DevCard;
