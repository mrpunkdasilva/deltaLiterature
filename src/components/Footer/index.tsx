import React, { Component } from 'react';


class Footer extends React.Component {
	constructor(props) {
		super(props);
		const { children } = this.props;
	
	}


	render() {
		return (
			<footer class="footer-page">
        <h5 class="logo footer-logo">
          <span>Δ</span>Literature 💜
        </h5>
      </footer>
		);
	}
}

export default Footer;