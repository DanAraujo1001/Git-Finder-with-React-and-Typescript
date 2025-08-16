import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchProps {
  loadUser: (userName: string) => Promise<void>;
}

const Seacrh = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <h2>Busque por um usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        {/* Eu não entendi direito essa função */}
        <button onClick={() => loadUser(userName)}> 
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Seacrh;
