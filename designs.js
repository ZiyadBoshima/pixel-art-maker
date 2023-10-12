// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const submit = document.getElementById("submit");	

submit.addEventListener('click', makeGrid);

/*submit.addEventListener('click',clear,false);

function clear(){
	var row = document.getElementById("pixelCanvas").getElementsByTagName("tr");
for(var i = row.length-1; i>=0;i--){ 
		row[i].remove();}

}*/ //submit here can act as a reset instead of a seperate reset button


function makeGrid(eve) {
	eve.preventDefault();
	
	let size = {
		height: document.getElementById("inputHeight").value,
		width: document.getElementById("inputWidth").value
	}
	
	
	const pixelCanvas = document.getElementById("pixelCanvas");
	
	for(var i = 0; i<size.height; i++){
		
		let Row = pixelCanvas.insertRow(0);
		
		for(var j=0; j<size.width; j++)
				Row.insertCell();
	}
	
	var cell = document.getElementById("pixelCanvas").getElementsByTagName("td");
	
	for(var k = 0; k<cell.length; k++){
    cell[k].addEventListener('click',respondToClick);
	}
		
}


function respondToClick(){
	var color = document.getElementById("colorPicker").value;
	this.style.backgroundColor = String(color);
	
}

const reset = document.getElementById("reset");

reset.addEventListener('click', clear);

function clear(){
	
	var height = document.getElementById("inputHeight").value;
	
	for(var i =height-1; i>=0; i--){ 
		document.getElementById("pixelCanvas").deleteRow(i);}
}



