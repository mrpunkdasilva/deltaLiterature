import React, { Component } from 'react';


export default class SchoolLiterature extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

	render() {
		return (
			<main class="page">
        <section class="apresent">
          <header>
            <h2 class="heading">Romantismo Gotico (ou Sombrio)</h2>
            <span class="origin-article">Origem: <em>Wikipédia, a enciclopédia livre.</em></span>
          </header>

          <article>
            <header>
              <h4 class="subheading">
                Entenda sobre o romantismo gotico...
              </h4>
            </header>

            <div class="content">
              <p>
                <strong>Romantismo sombrio (em inglês: Dark Romanticism)</strong> é um subgênero literário do romantismo, refletindo a fascinação popular com o irracional, o demoníaco e o grotesco. Muitas vezes confundido com Goticismo, tem sombreado o eufórico movimento romântico desde seus inícios no século XVIII. Edgar Allan Poe é frequentemente celebrado como um dos supremos expoentes da tradição.
              </p>
            </div>
          </article>

          <article>
            <header>
              <h4 class="subheading">Definições</h4>
            </header>

            <div class="content">
              <p>
                A celebração de euforia e sublimidade tem sempre sido perseguida por uma igualmente intensa fascinação com a melancolia, insanidade, crime e atmosfera sombria, com as opções de fantasmas e ghouls, o grotesco, e o irracional. O nome “Romantismo Sombrio” foi dado para esta forma pelo teórico literário Mario Praz em seu longo estudo do gênero publicado em 1930, "The Romantic Agony".

                De acordo com o crítico G. R. Thompson, "os românticos sombrios adaptaram imagens do mal antropomorfizado na forma de Satanás, demônios, fantasmas, lobisomens, vampiros, e ghouls" como emblemáticos da natureza humana. Thompson resume as características do subgênero, escrevendo:
              </p>
            </div>
          </article>
        </section>
      </main>
		);
	}
}

export default SchoolLiterature;