import React, { Component } from 'react';

import { linksNavMain, linksNavSchools } from '../../assets/data/links';

import './styles.scss';


class Header extends React.Component {

	constructor(props) {
		super(props);	
	}

	render() {
		return (
			<header className="header-page">
        <div className="box-logo">
          <a href="/">
            <h1 className="logo">
              <span>Δ</span>Literature
            </h1>
          </a>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top navbar-customize">
          <div className="navbar"></div>
          <div className="navbar navbar-fixed-top">
            <div className="navbar-inner">
              <div className="container">
                
                <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </a>
      
                <div className="nav-collapse collapse">
      
                  <ul className="nav">
                    {
                      linksNavMain.map(({ name, route, index }) => (
                        <li key={index} className="nav-link">
                          <a href={route}>{name}</a>
                        </li>
                      ))
                    }
                  </ul>
      
                  <ul class="nav">
                    {
                      linksNavSchools.map(({ name, route, index }) => (
                        <li key={ index } className="nav-link">
                          <a href={ route }>{ name }</a>
                        </li>
                      ))
                    }
                  </ul>            
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
		);
	}

}

export default Header;