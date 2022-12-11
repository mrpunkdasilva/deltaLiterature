import React, Component from 'react';

class SectionSocialMedias extends Component {
	render() {
		return (
			<section className="social-medias">
        <header>
        	<h3 className="subheading">
        		Mídias Sociais
        	</h3>
        	<h4 className="subheading">
        		Entre em contato conosco por alguma de nossas redes sociais
        	</h4>
        </header>

        <div className="content">
          <p>icon do github</p>
          <p>icon do discord</p>
          <p>icon do email</p>
        </div>
      </section>
		);
	}
}

export default { SectionSocialMedias };