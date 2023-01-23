import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { LoginUseState } from './components/LoginUseState';
import { LoginUseReducer } from './components/LoginUseReducer';

function App() {
  return (
    <div className="App">
      <LoginUseReducer />
    </div>
  );
}

export default App;
