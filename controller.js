	

//LAMDA FUNCTIONS URLS
	var sendLink = "https://b3tuqb7bu2.execute-api.us-west-2.amazonaws.com/Prod/";
	
//END
	function loadDoc() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("demo").innerHTML = this.responseText;
			}
		};
		xhttp.open("GET", "ajax_info.txt", true);
		xhttp.send();
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