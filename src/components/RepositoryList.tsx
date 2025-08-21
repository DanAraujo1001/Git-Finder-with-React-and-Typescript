import RepositoryItem from "./RepositoryItem";
import type { RepositoryProps } from "../types/repository";
import classes from "./RepositoryList.module.css";
import { Link } from "react-router-dom";

interface RepositoryListProps {
  repos: RepositoryProps[];
  userName?: string;
}

const RepositoryList = ({ repos, userName }: RepositoryListProps) => {
  return (
    <>
      <Link to="/" className={classes.voltar}>Voltar</Link>
      <h2>{`Explore os repositórios do usuário: ${userName}`}</h2>
      <div className={classes.repoList}>
        {repos
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 5)
          .map((repo) => (
            <RepositoryItem {...repo} />
          ))}
      </div>
    </>
  );
};

export default RepositoryList;
