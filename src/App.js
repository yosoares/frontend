import { AuthContext } from './Contexts/AuthContext';
import './App.css';
import Rotas from "./router";

function App() {
  return (
    <AuthContext>
      <div>
        <Rotas />
      </div>
    </AuthContext>
  );
}

export default App;

