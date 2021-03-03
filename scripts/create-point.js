
function buscaCidades(event){debugger

	const cidadeSel = document.querySelector("select[name=city]");
	const ufParam = event.target.value;
	const estHidden = document.querySelector("input[name=nomeestado]");

	fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufParam}/municipios`)
	.then( res => res.json())
	.then( cidades => {
		for(let cits of cidades){
			cidadeSel.innerHTML += `<option value="${cits.id}">${cits.nome}</option>`;
		}
		cidadeSel.disabled = false;
	});
}

function carregarUfs(){

	const ufSelect = document.querySelector("select[name=uf]");
	fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
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