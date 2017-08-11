import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import { initStore, fetchProvider } from '../stores/search';
import stylesheet from 'styles/index.scss'

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

    renderPaymentInstruments() {
    	const { activeProvider } = this.state;
    	console.log(activeProvider);
    	return !!activeProvider.payment_instruments
    		? activeProvider.payment_instruments.map(el => <li>{el}</li>)
    		: null;
    }

    renderApiServiceAvailable() {
    	const { activeProvider } = this.state;
    	return !!activeProvider.api_service_available
    		? "API SERVICE IS AVAILABLE"
    		: "no";
    }

    renderCountries() {
    	const { activeProvider } = this.state;
    	return !!activeProvider.countries
    		? activeProvider.countries.map(el => <li>{el.name}</li>)
    		: null;
    }

    render() {
        const { activeProvider } = this.state;
        const pageWrapper = (
            <div>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <main>
	                <div className="providerDetailContainer">
	                	<div className="providerTitle">
	                		<h1>{activeProvider.display_name}</h1>
	                	</div>

	                </div>

	            	<div className="providerContent">
	            		<p>
    						<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
						        <div className="container">
						          <div className="navbar-header page-scroll">
						            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						              <span className="sr-only">Toggle navigation</span>
						              <span className="icon-bar"></span>
						              <span className="icon-bar"></span>
						              <span className="icon-bar"></span>
						            </button>
						            <a className="navbar-brand page-scroll" href="/">Find My Provider</a>
						          </div>
						          <div className="collapse navbar-collapse navbar-ex1-collapse">
						            <ul className="nav navbar-nav">
					            	<li>
						            	<a className="page-scroll" href="/">Back</a>
						            	</li>
						              <li>
						                <a className="page-scroll" href="/about">About</a>
						              </li>
						              <li>
						                <a className="page-scroll" href="/contact">Contact</a>
						              </li>
						            </ul>
						          </div>
						        </div>
					      	</nav>
					      </p>
		            	<p><img src={activeProvider.logo_url}/></p>
		                <p><h4 className="detailHeading">Website</h4>{activeProvider.homepage_url}</p>
		                <p><h4 className="detailHeading">Integration version:</h4> {activeProvider.version}</p>
		                <p><h4 className="detailHeading">Payment Instruments:</h4> {this.renderPaymentInstruments()}</p>
		                <p><h4 className="detailHeading">API Available: </h4>{this.renderApiServiceAvailable()}</p>
		                <p><h4 className="detailHeading">Auth Service Available:</h4> {!!activeProvider.auth_service_available
				    		? "Yes"
				    		: "No"}
			    		</p>
		                <p><h4 className="detailHeading">Capture Service Available: </h4>{!!activeProvider.capture_service_available
				    		? "Yes"
				    		: "No"}
			    		</p>
		                <p><h4 className="detailHeading">Purchase Service Available: </h4>{!!activeProvider.purchase_service_available
				    		? "Yes"
				    		: "No"}
			    		</p>
		                <p><h4 className="detailHeading">Refund Service Available: </h4>{!!activeProvider.refund_service_available
				    		? "Yes"
				    		: "No"}
			    		</p>
		                <p><h4 className="detailHeading">Fraud Service Available: </h4>{!!activeProvider.fraud_service_available
				    		? "Yes"
				    		: "No"}
			    		</p>
		                <p><h4 className="detailHeading">Available in UCO: </h4>{!!activeProvider.available_in_uco
				    		? "Yes"
				    		: "No"}
			    		</p>
		                <p><h4 className="detailHeading">Available in LCO: </h4>{!!activeProvider.available_in_lco
				    		? "Yes"
				    		: "No"}
			    		</p>
		                <p><h4 className="detailHeading">Vaulting Service Available:</h4> {!!activeProvider.vaulting
				    		? "Yes"
				    		: "No"}
			    		</p>
		                <div className="countriesSupported">
		                	<h4 className="detailHeading">Countries supported: </h4>
		                	{this.renderCountries()}
		                </div>
	            	</div>
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
