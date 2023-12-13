import React, { useState, useEffect } from 'react';

function App() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Replace 'YOUR_GITHUB_USERNAME' with your GitHub username
        const username = 'sadhu2best';
        // Replace 'YOUR_ACCESS_TOKEN' with your GitHub personal access token
        const accessToken = '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';

        const response = await fetch(`https://api.github.com/users/sadhu2best/repos`, {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const repoData = await response.json();
        setRepos(repoData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="App">
      <h1>GitHub Repositories</h1>
      {error && <p>Error: {error}</p>}
      <h2>Repositories:</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
