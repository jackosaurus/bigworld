import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import { initStore, fetchProvider } from '../stores/search';
import stylesheet from 'styles/index.scss';

const { object, func } = React.PropTypes;

class DetailPage extends React.Component {
    static propTypes = {
        activeProvider: object,
        fetchProvider: func,
    };

    constructor(props) {
        super(props);

        this.state = {
            activeProvider: {},
        };
    }

    componentWillMount() {
        const { url } = this.props;

        this.props.fetchProvider(url.query.provider);
    }

    componentWillReceiveProps({ activeProvider }) {
        this.setState({
            activeProvider,
        });
    }

    render() {
        const { activeProvider } = this.state;

        const pageWrapper = (
            <div className="layout">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <main className="layout__main--full">
                    <h1>Detail view</h1>
                    <p>{activeProvider.name}</p>
                    <p>{activeProvider.display_name}</p>
                    <p>{activeProvider.homepage_url}</p>
                    <p>{activeProvider.version}</p>
                    <p>{activeProvider.logo_url}</p>
                </main>
            </div>
        );

        return pageWrapper;
    }
}

const mapStateToProps = state => ({
    activeProvider: state.activeProvider,
});

const mapDispatchToProps = dispatch => ({
    fetchProvider: bindActionCreators(fetchProvider, dispatch),
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(DetailPage);
