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
              <img src="https://s3-ap-southeast-1.amazonaws.com/wedy/doggo-trump.jpg" />
              <h1>Never get bamboozled again!</h1>
              <br/>
              <p>Finding providers have never been so easy, simply add your country and it will show you the supported listings of providers in your country.</p>
              <p> Developed during our Hackathon August 2017.</p>
              <br/>

              <p>Brought to you by Payments team with &#9829;</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);
