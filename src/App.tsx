import React, { Component, useState } from 'react';

type Props = {
  prop: any
};

class App extends Component {

  constructor(props: Props) {
    super(props);

    this.state = {  };
  }

  render(): React.ReactNode {
    return ( 
      <>
        <h1>Hello</h1>
      </>
    )
  }

}

export default App;
