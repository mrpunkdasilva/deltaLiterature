import React, { Component } from 'react';


class HeroContainer extends React.Component {
	constructor(props) {
		super(props);
		const { children } = this.props;
	
	}


	render() {
		return (
			<div class="hero-container">
        <div class="hero">
          <div class="hero-content">

            <p>
              <span>“</span>Ah! Dentro de toda a alma existe a prova
              <br>
              De que a dor como um dartro se renova,
              <br>
              Quando o prazer barbaramente a ataca...<span>”</span>
            </p>

            <span><em><strong>Augusto dos Anjos</strong></em></span>
          </div>
        </div>
      </div>
		);
	}
}

export default HeroContainer;