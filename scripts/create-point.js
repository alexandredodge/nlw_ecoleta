
function buscaCidades(event){
	const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;
	const cidadeSel  = document.querySelector("select[name=city]");
	const stateinput = document.querySelector("input[name=state]");

	const ufValue = event.target.value;

	const indexOfEstadoSelecionado = event.target.selectedIndex;
	stateinput.value = event.target.options[indexOfEstadoSelecionado].text;

	fetch(url)
	.then( res => res.json())
	.then( cidades => {
		for(let cits of cidades){
			cidadeSel.innerHTML += `<option value="${cits.id}">${cits.nome}</option>`;
		}
		cidadeSel.disabled = false;
	});
}

function carregarUfs(){
	const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;
	const ufSelect = document.querySelector("select[name=uf]");

	fetch(url)
		.then( res => res.json() )
		.then( estados => {
			for(const est of estados){
				ufSelect.innerHTML += `<option value="${est.id}">${est.nome}</option>`;
			}
		} )
}


//ESCUTA O COMPONENTE AO SER MUDADO
document.querySelector("select[name=uf]").addEventListener("change", buscaCidades);
carregarUfs();