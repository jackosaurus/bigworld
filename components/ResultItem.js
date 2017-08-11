import React from 'react';
import ProviderLogo from './ProviderLogo'

const { string } = React.PropTypes;

function ResultItem({ logo, alt, title }) {
    return (
        <a href="#" className="resultItemContainer">
        	<h4>{title}</h4>
            <div className="resultItem-providerLogo">
                <ProviderLogo url={logo} alt={title} />
            </div>
            <div className="providerType">
                <span className="label label-primary">Credit</span>
                <span className="label label-warning">Credit card</span>
                <span className="label label-success">Pay after delivery</span>
            </div>
            <div>
                <span className="glyphicon glyphicon-grain" />
            </div>
        </a>
    );
}

ResultItem.propTypes = {
    logo: string,
    alt: string,
    title: string,
};

ResultItem.defaultProps = {
    logo: '',
    alt: '',
    title: '',
};

export default ResultItem;
