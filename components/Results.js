import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';

import { initStore, search } from '../stores/search';
import SearchField from './SearchField';
import ResultList from './ResultList';

const { func } = React.PropTypes;


class Results extends React.Component {
    static propTypes = {
        search: func,
    };

    constructor(props) {
        super(props);

        bindAll(this, 'onSearchValueChange');
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log(nextProps.searchString, nextProps.isSearching);
    }

    onSearchValueChange(event, value) {
        // Dispatch search action here
        this.props.search({ searchString: value });
    }

    render() {
        return (
            <div>
                <SearchField
                    name="SearchField"
                    onChange={this.onSearchValueChange}
                />
                <ResultList />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchString: state.searchString,
    isSearching: state.isSearching,
    results: state.results,
    countries: state.countries,
    errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
    search: bindActionCreators(search, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
