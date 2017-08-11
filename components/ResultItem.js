import React from 'react';
import ProviderLogo from './ProviderLogo'

export default () => (
    <div className="resultItemContainer">
    	<div className="resultItem-providerLogo">
    		<ProviderLogo />
    	</div>
    	<div className="providerType">
    		<span className="label label-primary">Credit</span>
    		<span className="label label-warning">Credit card</span>
    		<span className="label label-success">Pay after delivery</span>
    	</div>
        Lorem ipsum this is my description
        <div>
	    	<span className="glyphicon glyphicon-grain">
	    	</span>
    	</div>
    </div>
);
