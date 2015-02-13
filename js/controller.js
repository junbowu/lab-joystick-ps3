// Controller.js

var buttonUP = getElement( "button up" );

console.log( buttonUP );

buttonUP.onclick = function(){
	console.log( "clicou" );
};



function getElement( classContent, parentContent ){
	
	var element = document.getElementsByClassName( classContent );
	
	return element;
	
}