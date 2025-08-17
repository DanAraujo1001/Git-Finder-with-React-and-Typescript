import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import classes from "./Search.module.css";

interface SearchProps {
  loadUser: (userName: string) => Promise<void>;
}

const Seacrh = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Busque por um usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {/*Esse onKeyDown está dando erro em alguma coisa(linha vermelha)*/}
        <button onClick={() => loadUser(userName)}>
        {/* Eu não entendi direito essa função de button */}
          <BsSearch />
        </button>
      </div>
    </div>  
  );
};

export default Seacrh;
