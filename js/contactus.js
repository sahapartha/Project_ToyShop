document.addEventListener("DOMContentLoaded", init);

function init() {

addbtn = document.getElementById("btn-add");
	
addbtn.addEventListener("click", success_alert);

	function success_alert(){
		console.log("validating 2nd barrier...");
		console.log(document.getElementById("fname").value);
		let strAlert1;
		strAlert1= validateFirstName(document.getElementById("fname").value);
		strAlert1+= validateLastName(document.getElementById("lname").value);
		strAlert1+= validateEmail(document.getElementById("email").value);
		strAlert1+= validatePhone(document.getElementById("tel").value);
		strAlert1+= validateMsg(document.getElementById("msg").value);

		function validateFirstName(field){
        if (field.trim()== "") return "No Firstname was entered.\n";
        else if (/[^a-zA-Z]/.test(field)) return "Only a-z, A-Z in Firstname allowed!\n";
        return "";
    	}

    	function validateLastName(field){
        if (field.trim()== "") return "No Lastname was entered.\n";
        else if (/[^a-zA-Z]/.test(field)) return "Only a-z, A-Z in Lastname allowed!\n"; //[^a-zA-Z] means do not match a-zA-Z
        return "";
    	}

    	function validateEmail(field){
        if (field.trim()== "") return "No email was entered.\n";
        else if (!(/^[a-z\.]*@york\.cuny\.edu$/.test(field))) return "Only york.cuny.edu allowed!\n";
        return "";
    	}

    	function validatePhone(field){
        if (field.trim()== "") return "No Phone Number was entered.\n";
        else if (!(/^[0-9]{10}$/.test(field))) return "Please Enter a valid phone number!\n"; //[^a-zA-Z] means do not match a-zA-Z
        return "";
    	}
    	function validateMsg(field){
        if (field.trim()== "") return "No messages was entered.\n";
        else if (/[^a-zA-Z]/.test(field)) return "Only a-z, A-Z in Firstname allowed!\n";
        return "";
    	}


    	if (strAlert1 == "") {
            document.getElementById("alertmsg").innerText="Sent";
			document.getElementById("alertmsg").style.display ="block";
			document.getElementById("alertmsg").setAttribute("class", "alert alert-success");

        } else {
            document.getElementById("alertmsg").innerText=strAlert1;
			document.getElementById("alertmsg").style.display ="block";
			document.getElementById("alertmsg").setAttribute("class", "alert alert-danger");
            event.preventDefault();        
        }
        event.preventDefault();

        //hide alert msg on typing
		document.getElementById("fname").addEventListener("focus", event1)
		document.getElementById("lname").addEventListener("focus", event1)
		document.getElementById("email").addEventListener("focus", event1)
		document.getElementById("tel").addEventListener("focus", event1)
		document.getElementById("msg").addEventListener("focus", event1)
		function event1(){
			document.getElementById("alertmsg").setAttribute("style", "display: none");
		}
	
}
}