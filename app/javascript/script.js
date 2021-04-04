var palavra = "";

var resposta = [
   'cadeira', 
   'computador',
   'tablet',
   'escola',
   'escova de dente'
];

var palavra = resposta[Math.floor(Math.random() * resposta.length)];

function Listar(){

	for(var i = 1; i <= palavra.length; i++){
       document.write('<div class="forca-item forca-item-hover">?</div>');
	}
	
}



