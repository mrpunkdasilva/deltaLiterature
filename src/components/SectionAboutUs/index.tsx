import React, { Component } from 'react';

class SectionAboutUs extends Component {
	render() {
		return (
			<section className="container bg-white">
        <h3 className="heading">O que somos?</h3>

        <article className="content">
          <p>
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          </p>
          <p>
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          </p>
        </article>

        <a className="btn btn-more-info" href="#">
          Open Source
        </a>
      </section>          
		);
	}
}

export default { SectionAboutUs };