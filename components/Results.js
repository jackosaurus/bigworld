import React from 'react';
import SearchField from './SearchField';
import ResultList from './ResultList';

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    onSearchValueChange(event, value) {
        console.log(value);

        // Dispatch search action here
    }

    render() {
        return (
            <div>
                <SearchField onChange={this.onSearchValueChange} />
                <ResultList />
            </div>
        );
    }
}

export default Results;
