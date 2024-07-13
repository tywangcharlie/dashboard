import React from 'react';
import './Filters.css';
import { Button, Dropdown } from 'semantic-ui-react';
import { ageOptions, stateOptions } from './FilterOptionData';

class Filters extends React.Component {
    
    state = {
        year: { start: 2011, end: 2015 },
        states: [],
        ages: []
    };

    getYearOptions = (start, end) => {
        let options = [];
        for (let year = start; year <= end; year++) {
            options.push({ key: year.toString(), text: year.toString(), value: year.toString() });
        }
        return options;
    };

    handleStartYearChange = (e, { value }) => {
        if (value <= this.state.year.end) {
            this.setState(prevState => ({
                year: {
                  start: value,
                  end: prevState.year.end
                }
            }));
        }
    };

    handleEndYearChange = (e, { value }) => {
        if (value >= this.state.year.start) {
            this.setState(prevState => ({
                year: {
                    start: prevState.year.start,
                    end: value 
                }
            }));
        }
    };

    onStateChange = (e, { value }) => {
        this.setState({ states: value });
    }

    onAgeChange = (e, { value }) => {
        this.setState({ ages: value });
    }

    render() {
        const startYearOptions = this.getYearOptions(2011, this.state.year.end);
        const endYearOptions = this.getYearOptions(this.state.year.start, 2015);
    
        return (
            <div className="ui filters segment">
                <div className="filter year-range">
                    <label>Year Range</label>
                    <div>
                        <label>Start Year</label>
                        <Dropdown
                            placeholder='Select Start Year'
                            fluid
                            selection
                            options={startYearOptions}
                            value={this.state.year.start}
                            onChange={this.handleStartYearChange}
                        />
                        <label>End Year</label>
                        <Dropdown
                            placeholder='Select End Year'
                            fluid
                            selection
                            options={endYearOptions}
                            value={this.state.year.end}
                            onChange={this.handleEndYearChange}
                        />
                    </div>
                </div>
                <div className="filter state">
                    <label>State</label>
                    <Dropdown
                        placeholder='Select States'
                        fluid
                        multiple
                        search
                        selection
                        options={stateOptions}
                        onChange={this.onStateChange}
                        value={this.state.states}
                    />
                </div>
                <div className="filter age-group">
                    <label>Age Group</label>
                    <Dropdown
                        placeholder='Select Age Group'
                        fluid
                        multiple
                        selection
                        options={ageOptions}
                        onChange={this.onAgeChange}
                        value={this.state.ages}
                    />
                </div>
                <Button primary onClick={() => this.props.onSave(this.state)}>Save</Button>
            </div>
        );
    }
}

export default Filters;