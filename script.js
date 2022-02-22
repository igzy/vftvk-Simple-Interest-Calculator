function outputUpdate(rate) {
	document.querySelector('#rate').value = rate;
}

function compute(){
    //create references to the input elements we wish to validate
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("select_years").value;
    let date =  new Date().getFullYear();
    //check for amount
    if(principal == ""){
        alert("Please enter the positive principal amount");
	    principal.focus();
    }else if (principal < 0){
        alert("Principal amount cannot be negative");
	    principal.focus();
    }

    //check for rate
    if(rate == 0){
        alert("Rate cannot be 0");
	    rate.focus();
    }

    var interest = (principal * rate * years) / 100;
    // alert(parseFloat(date)+parseFloat(years));
    var mySpan = document.getElementById("interest");
    
    document.getElementById("amount_val").textContent = principal;
    document.getElementById("rate_val").textContent = rate;
    document.getElementById("interest_val").textContent = interest;
    document.getElementById("year_val").textContent = parseFloat(date)+parseFloat(years);
    mySpan.style.display = "";

}



        