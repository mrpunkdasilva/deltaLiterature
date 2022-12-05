import React, { Component } from 'react';


class SectionThemesLiteraturie extends React.Component {
	constructor(props) {
		super(props);
		const { children } = this.props;
	}


	render() {
		return (
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
	      </div>
	    </section>
		);
	}
}

export default SectionThemesLiteraturie;