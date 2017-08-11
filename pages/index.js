import React from 'react';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../stores/search';
import stylesheet from 'styles/index.scss';

import {
    BigcommerceLogo,
    Map,
    Navigation,
    Results,
} from '../components/index';

export default withRedux(initStore)(() => (
    <div className="layout">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <header className="layout__header">
            <Navigation />
        </header>
        <aside className="layout__aside">
            <div className="bigcommerceLogo">
                <BigcommerceLogo className="bigcommerceLogo"/>
            </div>
            <Results />
        </aside>
        <main className="layout__main">
            <Map />
        </main>
    </div>
));
