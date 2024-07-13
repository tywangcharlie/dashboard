import './App.css';
import Filters from './components/Filters';
import MyLineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
      <Filters></Filters>
      <div style={{ height: "400px" }}>
        <MyLineChart></MyLineChart>
      </div>
    </div>
  );
}

export default App;
