$(function(){
	leer();
});

function insertar() {
	$("#insertar").css("display", "block");
	$("#entradas").css("display", "none");
	$("#entradasViejas").css("display", "none");
}

function entradas() {
	$("#insertar").css("display", "none");
	$("#entradas").css("display", "block");
	$("#entradasViejas").css("display", "block");	
}

function submit() {
	document.forms["formulario"].submit();
}

function leer() {
	$.ajax({
		type: "GET",
		url: "https://diariotfg.herokuapp.com/entradas",
		crossDomain: true,
		success: exito,
		error: noexito
	});
}

function exito(data) {
	var valores = data.split(';');
	var i = 0;
	var text = "";
	while(i < valores.length) {
		if(valores[i].length != 0) {
			text = "<div class='panel panel-primary'><div class='panel-heading'><h4>"+ valores[i] +"<h4></div><div class='panel-body'>"+ valores[i + 1] +"</div></div>" + text;
		}
		i += 2;
	}
	$("#entradas").append(text);
}

function noexito(error) {
	console.log(error);
}