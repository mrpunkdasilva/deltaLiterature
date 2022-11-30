import React, { Component } from 'react';


class SectionContextHistoric extends React.Component {
  constructor(props) {
    super(props);
    const { children } = this.props;
  
    this.state {

    };
  }


  render() {
    return (
      <section className="section-context-historic">
        <article>
          <header>
            <h4 class="subheading">
              Movimentos no século XVIII e XIX em diferentes literaturas nacionais
            </h4>

            <p class="note-header">
              Elementos do romantismo sombrio eram uma possibilidade perene dentro do mais amplo movimento internacional, o Romantismo, em ambas literatura e arte
            </p>
          </header>

          <div class="box-container">
            <div class="box">
              <h5>Alemanha</h5>

              <p>
                Como o romantismo em si, o romantismo sombrio indiscutivelmente começou na Alemanha, com escritores tais como E.T.A. Hoffmann, Christian Heinrich Spiess e Ludwig Tieck – embora suas ênfases na alienação existencial, o demoníaco no sexo, e o estranho, fossem compensadas ao mesmo tempo, pelo culto mais caseiro de Biedermeier.

                Como o romance gótico, Schwarze Romantik é um gênero baseado no lado aterrorizante da Idade Média e frequentemente apresenta os mesmos elementos (castelos, fantasmas, monstros, etc.). No entanto, os elementos-chave do Schauerroman são a necromancia e as sociedades secretas, e é notavelmente mais pessimista do que o romance gótico britânico. Todos esses elementos são a base para o romance inacabado de Friedrich von Schiller, Der Geisterseher (1786–1789). O motivo das sociedades secretas também está presente em Horrid Mysteries (1791–1794) de Karl Grosse e em Rinaldo Rinaldini, the Robber Captain de Christian August Vulpius (1797). O romance Hermann of Unna de Benedikte Naubert (1788) é visto como muito próximo do gênero Schauerroman.
              </p>
            </div>

            <div class="box">
              <h5>Grã-Bretanha</h5>

              <p>
                Autores britânicos tais como Lord Byron, Samuel Taylor Coleridge, Mary Shelley, e John William Polidori, que são frequentemente ligados para ficção gótica, são também por vezes referidos como românticos sombrios.
                Seus contos e poemas comumente apresentam párias da sociedade, tormento pessoal e incerteza como para saber se a natureza do homem irá trazer para ele salvação ou destruição. Alguns autores vitorianos de ficção de horror inglesa, como Bram Stoker e Daphne du Maurier, seguem nesta linhagem.
              </p>
            </div>

            <div class="box">
              <h5>
                Estados Unidos
              </h5>

              <p>
                A forma americana desta sensibilidade centra sobre os escritores Edgar Allan Poe, Nathaniel Hawthorne, e Herman Melville. Como opostos para as crenças perfeccionistas do transcendentalismo, esses contemporâneos mais sombrios enfatizaram a falibilidade humana e propensão para o pecado e autodestruição, bem como as dificuldades inerentes em tentativas de reforma social.
              </p>
            </div>

            <div class="box">
              <h5>
                França
              </h5>

              <p>
                A literatura fantástica do século XIX após 1830 foi dominada pela influência de E. T. A. Hoffmann, e depois pela de Edgar Allan Poe. Autores franceses tais como Jules Barbey d'Aurevilly, Charles Baudelaire, Paul Verlaine e Arthur Rimbaud ecoaram os temas sombrios encontrados na literatura alemã e inglesa. Baudelaire foi um dos primeiros escritores franceses para admirar Edgar Allan Poe, mas essa admiração ou mesmo adulação de Poe tornou-se muito difundida nos círculos literários franceses no final do século XIX.
              </p>
            </div>
          </div>

        </article>
      </section>  
    );
  }
}

export default SectionContextHistoric;