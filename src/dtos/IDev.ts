import DevInfo from "./DevInfo";

export default interface IDev {
  id: number;
  full_name: string;
  description: string;
  email?: string;
  avatar_url: string;
  login: string;
  url: string;
  repos: DevInfo[];
  location?: string;
  bio?: string;
  twitter_username?: string;
}
