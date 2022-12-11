import React, { Component } from 'react';


class HeroContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = { text: '' };
		this.setState({ text: this.props.text });
	}


	render() {
		const { text } = this.props;

		return (
			<div class="hero-container">
        <div class="hero">
          <div class="hero-content">
          	{ text }
          </div>
        </div>
      </div>
		);
	}
}

export default HeroContainer;