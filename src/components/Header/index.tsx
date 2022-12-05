import React, { Component } from 'react';

import { linksNavMain, linksNavSchools } from '../../assets/data/links';


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
              ΔLiterature
            </h1>
          </a>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar"></div>
          <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
              <div class="container">
                
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </a>
      
                <div class="nav-collapse collapse">
      
                  <ul class="nav">
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
                        <li key={index} className="nav-link">
                          <a href={route}>{name}</a>
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