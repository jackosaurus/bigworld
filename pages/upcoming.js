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
              <h1>Upcoming features</h1>
              <br/>
              <p> &#8226; Add more data / payment providers</p>
              <p> &#8226; Fix all bugs :) </p>
              <p> &#8226; Show all payment providers available in countries where the map is focused on </p>
              <p> &#8226; KB system to query bigpay directly so you no longer need to manually update KB article</p>
              <p> &#8226; Bcapp control panel payment sections to query BigPay directly</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);
