import React from 'react';
import './App.css';
import MedAPI from './apis/MedAPI';
import Filters from './components/Filters';
import MedLineChart from './components/LineChart';
import MedBarChart from './components/BarChart';
import { stateOptions } from './components/FilterOptionData';
import { lineChartData, lineChartData2 } from './data/lineChartData'
import { barChartData, barChartData2 } from './data/barChartData'

class App extends React.Component {

  state = {
    lineChartData: lineChartData,
    barChartData: barChartData
  };

  handleSaveSubmit = async query =>{
    const headers = {'Content-Type': 'application/json'}
    const payload = {
      year: {
        start: query.year.start,
        end: query.year.end
      },
      states: query.states, 
      ages: query.ages
    };
    const response = await MedAPI.post('/report', {headers, payload})
    .catch(function (error){
      console.log(error);
    });
    const lineChartTransformedData = response.data.reduce((acc, item) => {
      const year = item.year.replace(/b'|'/g, "");
      const stateOption = stateOptions.find(option => option.value === item.state.toString());
      const state = stateOption.text;
      const smoke_rate = item.smoke_rate;
      const existingStates = acc.filter(obj => obj.id === state);
    
      if (existingStates.length === 0) {
        acc.push({ id: state, data: [{ x: year, y: smoke_rate }] });
      } else {
        existingStates[0].data.push({ x: year, y: smoke_rate });
      }
      return acc;
    }, []);
    const jsonString = JSON.stringify(lineChartTransformedData)
    console.log(jsonString);
    this.setState({ 
          lineChartData: lineChartTransformedData,
          barChartData: barChartData2
    });
  };

  render() {
    return (
      <div className="App">
        <Filters onSave={this.handleSaveSubmit}/>
        <div className="ui container chart-container">
          <div style={{ height: "400px" }}>
            <MedLineChart data={this.state.lineChartData}/>
          </div>
          <div style={{ height: "400px" }}>
            <MedBarChart data={this.state.barChartData}/>
          </div>
        </div>
      </div>
    );

  }
}

export default App;
