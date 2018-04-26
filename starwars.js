let roman= ['I','II','III','IV','V','VI','VII','VIII','IX']
$.ajax({
	url: "https://swapi.co/api/films/",
	method: 'GET',      // opcional: 'GET' é o valor padrão
	success: function(resposta) {
		let $listElement = $('#movies > ul');
		let list="";
		resposta.results.sort(function(a,b){
			return a.episode_id-b.episode_id;	
		})
		for(index of resposta.results){
		    list+='<li data-episode-url="'+index.url+'">Episode '+roman[index.episode_id-1]+': '+index.title+'</li> \n';
		}
		$listElement.html(list);
	}
});

$('#movies').on('click', 'li', function(e) {

	$.ajax({
		url: $(e.target).attr('data-episode-url'),
		method: 'GET',      // opcional: 'GET' é o valor padrão
		success: function(resposta) {
			let $introTextEl = $('.flow > pre');
			$introTextEl.html(resposta.opening_crawl)
		}
	});
});
