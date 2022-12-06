import React, { Component, useState } from 'react';


import Theme from '../components/Theme';

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
          <h2 className="heading">Hello Deltas!</h2>
        </main>        
      </Theme>
    );
  }

}
