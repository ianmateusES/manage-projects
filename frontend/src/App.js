import React, { useState, useEffect } from 'react';
import api from './service/api';

import './App.css';

import Header from './components/Header';

function App() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    api.get('/projects').then(res => {
      setProject(res.data);
    })
  }, []);

  async function handleAddProject() {
    const res = await api.post('/projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Ian',
      team: 'Mateus, Samuel',
    });

    const project = res.data;

    setProject([...projects, project]);
  }

	return (
		<>
      <Header title='Reactjs' />
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type='button' onClick={handleAddProject}>Add Project</button>
    </>
	);
}

export default App;
