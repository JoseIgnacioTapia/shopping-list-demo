import Greeter from './components/Greeter';
import './App.css';

function App() {
  return (
    <div>
      <Greeter person="Colt" />
      <Greeter person="Blue" />
      <Greeter person="Elton" />
    </div>
  );
}

export default App;
