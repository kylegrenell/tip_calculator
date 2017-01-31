// custom function
function calculateTip(){
	// store the data of the inputs like amount and people
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var NumPeople = document.getElementById("totalPeople").value;

	//validation
	if(billAmount === "" || serviceQuality === 0){
		window.alert("please enter values to work calculator");
		return; // just stops the function, returns out of function and stops it from continuing
	}

	// check to see if input empty or < or == 1
	if(NumPeople === "" || NumPeople <= 1){
		NumPeople = 1;
		document.getElementById("each").style.display = "none";
	} else {
		document.getElementById("each").style.display = "block";
	}

	// do some math
	var total = (billAmount * serviceQuality) / NumPeople;
	total = Math.round(total * 100) / 100; // rounds decimal
	total = total.toFixed(2); // makes sure you always have 2 decimal places

// DISPLAY TIP
	 document.getElementById("totalTip").style.display = "block";
	 document.getElementById("tip").innerHTML = total;
}	



// hide the tip amount onload

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// cliking the button calls our function

document.getElementById("calculate").onclick = function(){
	calculateTip();
}

