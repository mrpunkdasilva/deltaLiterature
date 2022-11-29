import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';


class Theme extends React.Component {
	constructor(props) {
		super(props);
		const { children } = this.props;
	
		this.state {

		};
	}


	render() {
		return (
			<div class="container">
				<Header />

				{ children }

				<Footer />	
			</div>
		)
	};
}

export default Theme;