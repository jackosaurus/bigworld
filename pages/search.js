import React from 'react';
import stylesheet from 'styles/index.scss';

import {
    Map,
    Navigation,
    Results,
} from '../components/index';

export default () => (
    <div className="layout">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <main className="layout__main--full">
            <Results />
        </main>
    </div>
);
