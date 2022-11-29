import React, { Component } from 'react';


class Header extends React.Component {
	constructor(props) {
		super(props);
	
		this.state {

		};
	}


	render() {
		return (
			<header class="header-page">
          
          <div class="box-logo">
            <h1 class="logo">
              ΔLiterature
            </h1>
          </div>

          
          <nav class="navbar">
            
            <ul class="nav-links">
              <li class="nav-link">
                <a href="index.html">Home</a>
              </li>
              
              <li class="nav-link">
                <a href="lord-byron.html">Lord Byron</a>
              </li>
              
              <li class="nav-link">
                <a href="edgar-alan-poe.html">Edgar Alan Poe</a>
              </li>
              
              <li class="nav-link">
                <a href="augusto-dos-anjos.html">Augusto dos Anjos</a>
              </li>
               
               <li class="nav-link">
                <a href="contact.html">Contato</a>
              </li>
            </ul>
          </nav>

        </header>
		)
	};
}

export default Header;