import React, { Component } from 'react';


class QuotationBox extends React.Component {
	constructor(props) {
		super(props);
		const { children } = this.props;
	
		this.state {

		};
	}


	render() {
		return (
			<div class="quotation-box">
        <div class="quotation">
          <p>
            A inabilidade do homem caído para compreender totalmente os lembretes assombrosos de outro reino sobrenatural que ainda parecia não existir, a constante perplexidade de fenômenos inexplicáveis e vastamente metafísicos, uma propensão para escolhas morais aparentemente perversas ou más que não tiveram nenhuma firma ou medida fixa ou regra, e um senso sem nome de culpa combinado com uma suspeita que o mundo externo foi uma projeção delusiva da mente--estes foram os grandes elementos na visão do homem que os românticos sombrios opuseram para a corrente dominante do pensamento romântico.
          </p>
        </div>
      </div>
		);
	}
}

export default QuotationBox;