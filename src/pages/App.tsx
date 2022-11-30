import React, { Component, useState } from 'react';


import React from '../components/Theme';

type Props = {
  prop: any
};

export default class App extends Component {

  constructor(props: Props) {
    super(props);

    this.state = {  };
  }


  render(): React.ReactNode {
    return ( 
      <Theme>
        <main className="page">
          <h2>Hello Deltas!</h2>
        </main>        
      </Theme>
    );
  }

}
