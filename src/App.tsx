// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )

// }

// export default App


import { useEffect, useState } from 'react'

function App() {
  const [usuarios, setUsuarios] = useState([{ id: 0, nome: '' }]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/usuarios`)
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
