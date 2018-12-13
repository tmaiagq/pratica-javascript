function preencherPerfil(info) {
	var template = `
		<h2>${info.name}</h2>
		<ul>
			<li>
				<span>Altura:</span>
				<span>${info.height}</span>
			</li>
			<li>
				<span>Cor do cabelo:</span>
				<span>${info.hair_color}</span>
			</li>
			<li>
				<span>Ano de nascimento:</span>
				<span>${info.birth_year}</span>
			</li>
			<li>
				<span>Naves:</span>
				<span id="naves">
					<ul>
						${
							info.starships.map(function(nave, i){
								return `
									<li>
										<a href='${nave}'>
											Nave ${i + 1}
										</a>
									</li>
								`
							}).join('')
						}
					</ul>
				</span>
			</li>
		</ul>
	`

	var perfil = document.getElementById("perfil");
	perfil.innerHTML = template;
}


// AJAX com jQuery
$.ajax({
	url: "https://swapi.co/api/people/1/"
})
.done(function(info){
	preencherPerfil(info)
})