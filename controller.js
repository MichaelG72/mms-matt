	

//LAMDA FUNCTIONS URLS


//END
function loadDoc() {

}

function sendData(tag, data){
	var sendLink = "https://b3tuqb7bu2.execute-api.us-west-2.amazonaws.com/Prod/" + tag;
	var xhttp = new XMLHttpRequest();

	var formData = document.getElementById(data);
	sendLink = sendLink + '&user=' + formData.elements[1].value;
	sendLink = sendLink + '&email=' + formData.elements[2].value;
	sendLink = sendLink + '&fullName=' + formData.elements[0].value;
	sendLink = sendLink + '&=pass' + formData.elements[3].value;
	xhttp.open("GET", sendLink, true);
	xhttp.send();




}

function getData(tag){
	var sendLink = "https://b3tuqb7bu2.execute-api.us-west-2.amazonaws.com/Prod/" + tag;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("demo").innerHTML = this.responseText;
		}
	};

	xhttp.open("GET", sendLink, true);
	xhttp.send();
}

function createUser(){
	var formData = document.getElementById("frm1");
	for(var i = 0; i < formData.length; ++i){
		if(i === 2){
			if(!validateEmail(formData.elements[i].value)) break;
		}
		alert(formData.elements[i].value);
	}
}

function sayHi(){
	alert("hello world");
	var formData = document.getElementById("frm1");
	for(var i = 0; i < formData.length; ++i){
		if(i === 2){
			if(!validateEmail(formData.elements[i].value)) break;
		}
		alert(formData.elements[i].value);
	}
	formData.submit();
}

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}