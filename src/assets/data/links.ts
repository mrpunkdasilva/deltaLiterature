type Link = [
	{ name: string; route: string; }
];


const linksNavMain: Link = [
	{ name: 'Home', 			 route: '/' },
	{ name: 'Contato', 	   route: '/contact' },
	{ name: 'Sobre nos', 	 route: '/aboutus' },
	{ name: 'Open Source', route: '/opensource' },
];

const linksNavSchools: Link = [
	{ name: 'Trovadorismo', route: '/trovadorismo' },
	{ name: 'Classicismo',  route: '/classicismo' },
	{ name: 'Arcadismo',    route: '/arcadismo' },
	{ name: 'Barroco',      route: '/barroco' },
	{ name: 'Romantismo',   route: '/romantismo' },
	{ name: 'Realismo', 		route: '/realismo' },
	{ name: 'Modernismo', 	route: '/modernismo' },
];


export { linksNavMain, linksNavSchools };