import React from 'react';

let GoogleMapsLoader = (typeof window !== 'undefined')
    ? require('google-maps')
    : null;

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
        const mapContainer = document.getElementById('MapContainer');

        GoogleMapsLoader
            .load(google => {
                this.googleMapsClient = new google.maps.Map(mapContainer, {});
            });
    }

    componentWillUnmount() {
        GoogleMapsLoader.release();
    }

    render() {
        return (
            <div>
                <div
                    id="MapContainer"
                    className="mapContainer"
                >
                </div>
            </div>
        );
    }
}

export default Map;
