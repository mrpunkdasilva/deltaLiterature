import React, { Component } from 'react';


class RecomendedContainer extends React.Component {
	constructor(props) {
		super(props);
		const { children } = this.props;
	
		this.state {

		};
	}


	render() {
		return (
			<aside class="recomended-container">
      	<div class="recomended">
	        <h3 class="subheading">
	          Ver também
	        </h3>

	        <ul class="recomended-links">
	          <li class="recomended-link">
	            <a href="#">Álvares de Azevedo
	            </a>
	          </li>
	          <li class="recomended-link">
	            <a href="#">Gérard de Nerval
	            </a>
	          </li>
	          <li class="recomended-link">
	            <a href="#">Ultrarromantismo
	            </a>
	          </li>
	          <li class="recomended-link">
	            <a href="#">Dança macabra
	            </a>
	          </li>
	          <li class="recomended-link">
	            <a href="#">Doppelgänger
	            </a>
	          </li>
	        </ul>
      	</div>
    	</aside>
		);
	}
}

export default RecomendedContainer;