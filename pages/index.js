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
        <header className="layout__header">
            <Navigation />
        </header>
        <aside className="layout__aside">
            <Results />
        </aside>
        <main className="layout__main">
            <Map />
        </main>
    </div>
);
