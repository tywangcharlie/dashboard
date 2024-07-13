import React from 'react';
import './App.css';
import MedAPI from './apis/MedAPI';
import Filters from './components/Filters';
import MedLineChart from './components/LineChart';
import MedBarChart from './components/BarChart';
import { lineChartData, lineChartData2 } from './data/lineChartData'
import { barChartData, barChartData2 } from './data/barChartData'

class App extends React.Component {

  state = {
    lineChartData: lineChartData,
    barChartData: barChartData
  };

  handleSaveSubmit = async query =>{
    console.log(query);
    const response = await MedAPI.get('/search', {
        params: {
          yearStart: query.yearRange.start,
          yaerEnd: query.yearRange.end,
          states: query.states.join(","),
          ages: query.ages.join(",")
        }
    })
    .catch(function (error){
      console.log(error);
    });
    console.log(response.data);
    this.setState({ 
      lineChartData: lineChartData2,
      barChartData: barChartData2
    });
  };

  // handleSaveSubmit = async query =>{
  //   const payload = {
  //     year: {
  //       start: query.yearRange.start,
  //       end: query.yearRange.end
  //     },
  //     states: query.states, 
  //     ages: query.ages
  //   };
  //   console.log(query);
  //   const response = await MedAPI.post('/report', payload)
  //   .catch(error => {
  //     console.log(error);
  //   });
  //   console.log(response.data);
  //   this.setState({ 
  //     lineChartData: lineChartData2,
  //     barChartData: barChartData2
  //   });
  // };

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
