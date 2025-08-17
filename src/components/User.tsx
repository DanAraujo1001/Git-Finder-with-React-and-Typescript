import { MdLocationPin } from "react-icons/md";
import type { UserProps } from "../types/user";
import { Link } from "react-router-dom";

const User = ({
  login,
  avatar_url,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (<p>
        <MdLocationPin />
        <span>{location}</span>
      </p>)}
      <div>
        <div>
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p>{following}</p>
        </div>
        <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
      </div>
    </div>
  );
};

export default User;
