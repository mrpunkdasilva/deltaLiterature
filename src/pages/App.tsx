import React, { Component, useState } from 'react';

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
      <div class="container">
        <main class="page">
          <div class="hero-container">
            <div class="hero">
              <div class="hero-content">

                <p>
                  <span>“</span>Ah! Dentro de toda a alma existe a prova
                  <br>
                  De que a dor como um dartro se renova,
                  <br>
                  Quando o prazer barbaramente a ataca...<span>”</span>
                </p>

                <span><em><strong>Augusto dos Anjos</strong></em></span>
              </div>
            </div>
          </div>
          

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

                <div class="quotation-box">
                  <div class="quotation">
                    <p>
                      A inabilidade do homem caído para compreender totalmente os lembretes assombrosos de outro reino sobrenatural que ainda parecia não existir, a constante perplexidade de fenômenos inexplicáveis e vastamente metafísicos, uma propensão para escolhas morais aparentemente perversas ou más que não tiveram nenhuma firma ou medida fixa ou regra, e um senso sem nome de culpa combinado com uma suspeita que o mundo externo foi uma projeção delusiva da mente--estes foram os grandes elementos na visão do homem que os românticos sombrios opuseram para a corrente dominante do pensamento romântico.
                    </p>
                  </div>
                </div>

              </div>

            </article>

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

          <section class="themes">
            <header>
              <h2 class="heading">
                Temas
              </h2>

              <p class="note-header">
                A lista dos seguintes principais temas do romantismo sombrio ocorre na ordem do degrau aproximado de restrição de "leves" (acima) para "fortes" (abaixo).
              </p>
            </header>
            
            <div class="box-themes">
              <article class="themes-container">

                <ul class="themes-list">
                  <li class="theme-item">
                    Sehnsucht, Fenstermotiv, Fernweh, Escapismo, Wandermotiv, Wanderlust, Sonambulismo
                  </li>
    
                  <li class="theme-item">
                    Natureza (Ex. trilhas de caminhadas, montanhas, cavernas, águas profundas, florestas escuras, clareiras isoladas; mas também animais emblemáticos, plantas e fenômenos naturais como neblina, luar, tempestades)
                  </li>
    
                  <li class="theme-item">
                    Noite
                  </li>
    
                  <li class="theme-item">
                    O mal
                  </li>
    
                  <li class="theme-item">
                    Igreja, Teologia, Religião, mas também dúvidas religiosas e Filosofia
                  </li>
    
                  <li class="theme-item">
                    Criaturas lendárias (Ex. elfos, fadas, fantasmas, Wiedergänger, demônios, transmorfos)
                  </li>
    
                  <li class="theme-item">
                    Pesadelo, Sonho e Realidade
                  </li>
    
                  <li class="theme-item">
                    Suicídio
                  </li>
    
                  <li class="theme-item">
                    Morte
                  </li>
                </ul>
              </article>
    
              
              <aside class="recomended-container">
    
                <div class="recomended">
                  <h3 class="subheading">
                    Ver também
                  </h3>
    
                  <ul class="recomended-links">
                    <li class="recomended-link">
                      <a href="#">Álvares de Azevedo
                      </a>
                    </li>
                    <li class="recomended-link">
                      <a href="#">Gérard de Nerval
                      </a>
                    </li>
                    <li class="recomended-link">
                      <a href="#">Ultrarromantismo
                      </a>
                    </li>
                    <li class="recomended-link">
                      <a href="#">Dança macabra
                      </a>
                    </li>
                    <li class="recomended-link">
                      <a href="#">Doppelgänger
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
              
              
            </div>
          </section>

        </main>
      </div>   
    );
  }

}
