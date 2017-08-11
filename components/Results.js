import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';
import Fuse from 'fuse.js';

import { search, fetchProviderData } from '../stores/search';
import SearchField from './SearchField';
import ResultList from './ResultList';

const { func } = React.PropTypes;

const searchOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        'name',
        'display_name',
    ],
};

class Results extends React.Component {
    static propTypes = {
        search: func,
    };

    constructor(props) {
        super(props);

        bindAll(this, 'onSearchValueChange');

        this.state = {
            paymentProviders: [],
        };
    }

    componentWillMount() {
        this.props.fetchProviderData();
    }

    componentWillReceiveProps({ paymentProviders, searchString }) {
        const fuse = new Fuse(paymentProviders, searchOptions);
        const result = !searchString
            ? paymentProviders
            : fuse.search(searchString);

        this.setState({
            paymentProviders: result,
        });
    }

    onSearchValueChange(event, value) {
        // Dispatch search action here
        this.props.search(value);
    }

    render() {
        const { paymentProviders } = this.state;

        return (
            <div>
                <SearchField
                    name="SearchField"
                    onChange={this.onSearchValueChange}
                />
                <ResultList results={paymentProviders}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchString: state.searchString,
    paymentProviders: state.paymentProviders,
    errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
    search: bindActionCreators(search, dispatch),
    fetchProviderData: bindActionCreators(fetchProviderData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
