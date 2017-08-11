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
          <div className="jumbotron">
            <h1>Hello, world!</h1>
              <p>If you do find information in here that is inaccurate or incomplete, you can contact us via <a target="_blank" href="https://bigcommerce.slack.com/messages/C06V1EPQW/">slack</a> or file a <a target="_blank" href="https://jira.bigcommerce.com/secure/CreateIssue!default.jspa">JIRA ticket</a>, we will have a look as soon as we can.</p>
          </div>
        </main>
    </div>
);
