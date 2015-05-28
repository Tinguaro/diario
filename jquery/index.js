$(function(){
	leer();
});

function insertar() {
	$("#insertar").css("display", "block");
	$("#entradas").css("display", "none");
}

function entradas() {
	$("#insertar").css("display", "none");
	$("#entradas").css("display", "block");	
}

function referenciar() {
}

function leer() {
	$.ajax({
	  method: "GET",
	  url: "https://diariotfg.herokuapp.com/entradas",
	  success: exito,
	  error: noexito,
	});
}

function exito(data) {
	console.log(data);
}

function noexito(error) {
	console.log(error);
}