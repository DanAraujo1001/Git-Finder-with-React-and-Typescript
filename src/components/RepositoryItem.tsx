import { LuCodeXml, LuBookMarked } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import classes from "./RepositoryItem.module.css";
import type { RepositoryProps } from "../types/repository";
import { Link } from "react-router-dom";

const RepositoryItem = ({
  name,
  html_url,
  language,
  stargazers_count,
  forks_count,
}: RepositoryProps) => {
  return (
    <div className={classes.repository}>
      <p className={classes.name}>{name}</p>
      <div className={classes.language}>
        <LuCodeXml />
        <p>{language}</p>
      </div>
      <div className={classes.popularity}>
        <div>
          <FaRegStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <GoRepoForked />
          <span>{forks_count}</span>
        </div>
      </div>
      <Link to={html_url}>
        Ver código
        <span>
          <LuBookMarked />
        </span>
      </Link>
    </div>
  );
};

export default RepositoryItem;
