import React from 'react';
import stylesheet from 'styles/index.scss';

import {
  BigcommerceLogo,
  Map,
  Navigation,
  Results,
} from '../components/index';

export default () => (
  <div className="layout">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <main className="layout__main--full">
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll" href="/">Find My Provider</a>
          </div>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <li>
                <a className="page-scroll" href="/about">About</a>
              </li>
              <li>
                <a className="page-scroll" href="/upcoming">Upcoming Features</a>
              </li>
              <li>
                <a className="page-scroll" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="intro" className="main">
        <div className="container">
          <div className="bigcommerceLogoWrapper">
            <div className="bigcommerceLogo">
              <BigcommerceLogo className="bigcommerceLogo"/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h1>Found problem?</h1>
              <br/>
              <p>If you do find information in here that is inaccurate or incomplete, you can contact us via <a target="_blank" href="https://bigcommerce.slack.com/messages/C06V1EPQW/">slack</a> or file a <a target="_blank" href="https://jira.bigcommerce.com/secure/CreateIssue!default.jspa">JIRA ticket</a>, we will have a look as soon as we can.</p>
              <br/>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);
