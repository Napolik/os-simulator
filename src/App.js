import './App.css';
import BottomLine from './components/bottom-line/bottom-line';
import WorkArea from './components/work-area/';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <WorkArea/>
        <BottomLine/>
      </div>
    </div>
  );
}

export default App;
