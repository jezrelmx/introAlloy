function doClickArriba() {
	alert("Hola desde arriba, y tu dices " + $.labelAbajo.text);
	var vCaja = Titanium.UI.createView({
		width: Titanium.UI.FILL,
		height: Titanium.UI.FILL,
		layout: 'horizontal'
	});
	
	var vAbajoIzq = Titanium.UI.createView({
		backgroundColor : Alloy.Globals.paletaColores.deep_blue,
		width: '50%',
		height : Titanium.UI.FILL,
		layout: 'absolute'
	});
	
	var lbArribaIzquierda = Titanium.UI.createLabel({
		text: 'Soy el lb izq',
		color: Alloy.Globals.paletaColores.loop,
	});
	
	vAbajoIzq.add(lbArribaIzquierda);
	
	var vAbajoDer = Titanium.UI.createView({
		backgroundColor : Alloy.Globals.paletaColores.loop,
		width: '50%',
		height : Titanium.UI.FILL,
		layout: 'absolute'
	});
	
	var lbArribaDerecha = Titanium.UI.createLabel({
		text: 'Soy el lb der',
		color: Alloy.Globals.paletaColores.deep_blue,
	});
	
	vAbajoDer.add(lbArribaDerecha);
	
	vCaja.add(vAbajoIzq);
	vCaja.add(vAbajoDer);
	
	$.vAbajo.add(vCaja);
}

function doClickAbajo() {
	alert("Hola desde abajo, y tu dices " + $.labelArriba.text);
}

$.index.open();
