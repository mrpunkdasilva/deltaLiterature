import React, { Component, useState } from 'react';

import Theme from '../components/Theme';

import HeroContainer from '../components/HeroContainer';
import SectionAboutUs from '../components/SectionAboutUs';

type Props = {
  prop: any
};


export default class App extends Component {

  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return ( 
      <Theme>
        <main className="page">
          <HeroContainer 
            text={<h2 className='heading'>Hello Deltas!</h2>} />           

          <SectionAboutUs />

          <SectionSocialMedias />
        </main>        
      </Theme>
    );
  }

}
