import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">

      <Counter>
        {
          (count, increment)=>(<ClickCounter count={count} incrementHandler={increment}/>)
        }
      </Counter>

      <Counter>
        {
          (count, increment)=>(<HoverCounter count={count} incrementHandler={increment}/>)
        }
      </Counter>

    </div>
  );
}

export default App;
