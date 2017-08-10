import React from 'react';
import stylesheet from 'styles/index.scss';

import {
    Map,
    Navigation,
    Results,
} from '../components/index';

export default () => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Navigation />
        <Map />
        <Results />
    </div>
);
