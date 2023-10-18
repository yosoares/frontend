import AuthContext  from './Contexts/AuthContext';
import './App.css';
import Rotas from "./router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthContext>
      <div>
        <Rotas />
        <ToastContainer />
      </div>
    </AuthContext>
  );
}

export default App;

