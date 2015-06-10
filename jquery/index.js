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
	var i = 0;
	var text = "";
	var contenido = "";
	while(i < data.length) {
		contenido = data[i]['texto'].replace(/\n/, '<br>');
		//console.log(contenido);
		text = "<div class='panel panel-primary'><div class='panel-heading'><h4>"+ data[i]['fecha'] +"<h4></div><div class='panel-body'>"+ contenido +"</div></div>" + text;
		i++;
	}
	$("#entradas").append(text);
}

function noexito(error) {
	console.log(error);
}