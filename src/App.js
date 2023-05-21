import { BrowserRouter } from 'react-router-dom';
import Routes from './app/routes';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
