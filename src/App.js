import './App.css';
import GithubImage from './logogit.png';

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Pesquisa Jean</h1>
      <form>
      <div className="form-group">
      <div className="input-group">
      <input 
        type="text"
        className="form-control"
        required
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-success">
            Procurar
          </button>
        </span>
      </div>
      </div>
      </form>
      <div className="py-5"></div>
      <img src={GithubImage} className="responsive rounded-circle" alt=""
      height="200px"
      />

    </div>
  );
}

export default App;
