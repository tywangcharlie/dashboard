import React from 'react';
import './Filters.css';
import { Button, Dropdown } from 'semantic-ui-react';
import { ageOptions, stateOptions } from './FilterOptionData';

class Filters extends React.Component {
    
    state = {
        yearRange: { start: 2011, end: 2015 },
        states: [],
        ages: []
    };

    onYearRangeChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            yearRange: { ...prevState.yearRange, [name]: Number(value) }
        }));
    };

    onStateChange = (e, { value }) => {
        this.setState({ states: value });
    }

    onAgeChange = (e, { value }) => {
        this.setState({ ages: value });
    }

    render() {
        const maxYear = 2015
        const minYear = 2011; // Example minimum year
        return (
            <div className="ui filters segment">
                <div className="filter year-range">
                    <label>Year Range: {this.state.yearRange.start} - {this.state.yearRange.end}</label>
                    <div>
                        <label>Start Year: {this.state.yearRange.start}</label>
                        <input
                            type="range"
                            name="start"
                            min={minYear}
                            max={this.state.yearRange.end} // Ensure start year cannot exceed end year
                            value={this.state.yearRange.start}
                            onChange={this.onYearRangeChange}
                        />
                        <label>End Year: {this.state.yearRange.end}</label>
                        <input
                            type="range"
                            name="end"
                            min={this.state.yearRange.start} // Ensure end year cannot be before start year
                            max={maxYear}
                            value={this.state.yearRange.end}
                            onChange={this.onYearRangeChange}
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