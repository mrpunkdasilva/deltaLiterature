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

          <div className="container bg-white">
            <QuotationBox 
              content="
                A inabilidade do homem caído para compreender totalmente os lembretes assombrosos de outro reino sobrenatural que ainda parecia não existir, a constante perplexidade de fenômenos inexplicáveis e vastamente metafísicos, uma propensão para escolhas morais aparentemente perversas ou más que não tiveram nenhuma firma ou medida fixa ou regra, e um senso sem nome de culpa combinado com uma suspeita que o mundo externo foi uma projeção delusiva da mente--estes foram os grandes elementos na visão do homem que os românticos sombrios opuseram para a corrente dominante do pensamento romântico.
              "/>
          </div>

          <SectionSocialMedias />
        </main>        
      </Theme>
    );
  }

}
