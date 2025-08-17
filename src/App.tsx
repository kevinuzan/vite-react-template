import { useEffect, useState } from 'react'

const serverConnection = import.meta.env.VITE_API_URL

function App() {
  const [usuarios, setUsuarios] = useState([{ id: 0, nome: '' }]);
  useEffect(() => {
    fetch(`${serverConnection}/api/usuarios`)
      .then(res => res.json())
      // .then(data => {
      //   console.log('Resposta da API:', data); // veja aqui!
      //   setUsuarios(data);
      // })
      // .catch(err => console.error('Erro ao buscar usuários:', err));
    .then(setUsuarios);
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {usuarios.map(u => <li key={u.id}>{u.nome}</li>)}
      </ul>
    </div>
  )
}

export default App;
