import React from 'react';
import GoogleMaps from '@google/maps';

import { GOOGLE_MAPS_API_KEY } from '../config';

const { string } = React.PropTypes;

class Map extends React.Component {
    static propTypes = {
        className: string,
    };

    static defaultProps = {
        className: '',
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const googleMapsClient = GoogleMaps.createClient({
            key: GOOGLE_MAPS_API_KEY,
        });

        console.log(googleMapsClient);
    }

    render() {
        return (
            <div>
                MAP VIEW
            </div>
        );
    }
}

export default Map;
