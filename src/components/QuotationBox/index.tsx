import React, { Component } from 'react';


class QuotationBox extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div class="quotation-box">
        <div class="quotation">
          <p>
            {this.props.content}
          </p>
        </div>
      </div>
		);
	}
}

export default QuotationBox;