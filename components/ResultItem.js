import React from 'react';
import Link from 'next/link';

import ProviderLogo from './ProviderLogo';

const { string } = React.PropTypes;

function ResultItem({ id, logo, alt, title }) {
    return (
        <Link href={{ pathname: '/detail', query: { provider: id } }} className="resultItemContainer">
            <div>
                <h4>{title}</h4>
                <div className="resultItem-providerLogo">
                    <ProviderLogo url={logo} alt={alt} />
                </div>
                <div className="providerType">
                    <span className="label label-primary">Credit</span>
                    <span className="label label-warning">Credit card</span>
                    <span className="label label-success">Pay after delivery</span>
                </div>
                {title}
                <div>
                    <span className="glyphicon glyphicon-grain" />
                </div>
            </div>
        </Link>
    );
}

ResultItem.propTypes = {
    id: string,
    logo: string,
    alt: string,
    title: string,
};

ResultItem.defaultProps = {
    id: '',
    logo: '',
    alt: '',
    title: '',
};

export default ResultItem;
