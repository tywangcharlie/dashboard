import React from 'react';
import './style/App.css';
import MedAPI from './apis/MedAPI';
import Filters from './components/Filters';
import MedLineChart from './components/LineChart';
import MedBarChart from './components/BarChart';
import { lineChartData, smokeRateDataToChartData } from './data/lineChartData'
import { barChartData, kdRateDataToChartData } from './data/barChartData'

class App extends React.Component {

  state = {
    lineChartData: lineChartData,
    barChartData: barChartData,
    isLoading: false,
    hasError: false,
    errorMessage: 'An error occurred.'
  };

  handleSaveSubmit = async query =>{
    this.setState({isLoading: true})
    const headers = {'Content-Type': 'application/json'}
    const payload = {
      year: {
        start: query.year.start,
        end: query.year.end
      },
      states: query.states, 
      ages: query.ages
    };
    await MedAPI.post('/report', {headers, payload, timeout: 5000})
    .then( response => {
      const smokeRateData = response.data.smoke_rate;
      const kdRateData = response.data.kd_rate;
      this.setState({ 
            lineChartData: smokeRateDataToChartData(smokeRateData),
            barChartData: kdRateDataToChartData(kdRateData),
            isLoading: false,
            hasError: false
      });
    })
    .catch(function (error){
      this.setState({ isLoading: false });
      if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
        console.log('The request timed out.');
        this.setState({ hasError: true, errorMessage: 'The request timed out.' });
      } else {
        console.log(error);
        this.setState({ hasError: true, errorMessage: 'An error occurred.' });
      }
    });
    
  };

  closeErrorMessage = () => {
    this.setState({ hasError: false });
  };


  render() {
    return (
      <div className="App">
        <Filters onSave={this.handleSaveSubmit} isLoading={this.state.isLoading}/>
        {this.state.hasError && (
        <div className="ui error message">
          <i className="close icon" onClick={this.closeErrorMessage}></i>
          <div className="header">{this.state.errorMessage}</div>
        </div>
        )}
        <div className="ui container chart-container">
          <div className="ui container linechart-container">
            <MedLineChart data={this.state.lineChartData}/>
          </div>
          <div className="ui container barchart-container">
            <MedBarChart data={this.state.barChartData}/>
          </div>
        </div>
      </div>
    );

  }
}

export default App;
