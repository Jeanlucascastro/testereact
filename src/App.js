import { useState } from 'react';
import './App.css';
import GithubImage from './logogit.png';

function App() {

const [search, setSearch] = useState('')  //controlar a pesquisa com a api do GitHub 
const [userData, setUserData] = useState();

const handleSubmit = (event) => {
  event.preventDefault();
  fetch(`https://api.github.com/users/${search}`)    // client http
  .then(response => response.json())
  .then(userResponse => setUserData(userResponse)); 

}

console.log(userData);

const handleChange = (event) => {
  
  setSearch(event.target.value)
}


  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Pesquisa Jean</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
      <div className="input-group">
      <input 
        type="text"
        className="form-control"
        required
        value={search}
        onChange={handleChange}
        ></input>
        <span className="input-group-btn"></span>
          <button type="submit" className="btn btn-success">
            Procurar
          </button>

      </div>
      </div>
      </form>
      <div className="py-5"></div>

      {!userData && (
      <img src={GithubImage} className="responsive rounded-circle" alt=""
      height="200px"
      />
      )}

      <h1 className="pt-3"> 
      <a href="https://github.com/Jeanlucascastro" target="_new">Jean Castro</a>
      </h1>
      <h3>Londrina</h3>
      <p>
        <a href="https://google.com.br" target="_new" className="text-info">
        https://google.com.br
          </a>
      </p>
    </div>
  );
}

export default App;
