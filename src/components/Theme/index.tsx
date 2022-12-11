import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import '../../styles/main.scss';

type Props = { children: React.ReactNode }

class Theme extends Component {
	constructor(props: Props) {
		super(props);
	}


	render() {
		const children = this.props.children;

		return (
			<div className="container">
				<Header />

				<div className="container">
					{ children }
				</div>

				<Footer />	
			</div>
		)
	};
}

export default Theme;