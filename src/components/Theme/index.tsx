import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';


class Theme extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div class="container">
				<Header />

				<div className="container">
					{ this.props.children }
				</div>

				<Footer />	
			</div>
		)
	};
}

export default Theme;