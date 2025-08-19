import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { RepositoryProps } from "../types/repository";

function Repository() {
  const { userName } = useParams();
  const [repos, setRepos] = useState<RepositoryProps[] | null>(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${userName}/repos`
        );
        if (!res.ok) throw new Error(`Erro: ${res.status} - ${res.statusText}`);

        const data: RepositoryProps[] = await res.json();

        const repositoryData = data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          html_url: repo.html_url,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
        }));

        setRepos(repositoryData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchApi();
  }, [userName]);

  if (!repos) return <p>Carregando...</p>;

  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id}>
          <p>{repo.name}</p>
          <p>{repo.html_url}</p>
          <p>{repo.language}</p>
          <p>{repo.stargazers_count}</p>
          <p>{repo.forks_count}</p>
        </div>
      ))}
    </div>
  );
}

export default Repository;
