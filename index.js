$(document).ready(function() {
	var max_fields      = 10; //maximum input boxes allowed
	var wrapper   		= $(".input_fields_wrap"); //Fields wrapper
	var add_button      = $(".add_field_button"); //Add button ID

	var x = 1; //initlal text box count
	$(add_button).click(function(e){ //on add input button click
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$(wrapper).append('<div><input type="text" name="mytext"/>&nbsp;	&nbsp;	<input type="text" name="name"><button class="remove_field">Remove</button></div>'); //add input box
		}
	});

	$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove(); x--;
	})
});
$(function () {
$("#btnGet").bind("click", function () {
		var key="";
		var value="" ;
		$("input[name=mytext]").each(function () {
				key+=$(this).val()+",";
		});
		$("input[name=name]").each(function () {
				value+=$(this).val()+",";
		});
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if(this.status == 200) {
		    var myobj = xhttp.responseText.toString();
		      document.getElementById("demo").innerHTML =myobj + "\n";
		  }
		};
		var company = sessionStorage.getItem('comp');
		xhttp.open("GET", "http://159.89.167.133:80/json?key="+key.toString()+"&value="+value.toString()+"&company="+company, true);
		xhttp.send();
alert("successfully Registerd !");

	})
});
var db = firebase.firestore();
//db.settings({timestampInSnapshots: true});
function New_User(){
var name = document.getElementById("name_field").value;
var model = document.getElementById("MODEL").value;
var device = document.getElementById("DEVICE").value;

db.collection("DEVICE REGISTRATION ").add({
name : name,
device : device,
model : model
})
.then(function() {
  console.log("Document successfully written!");

})
.catch(function(error) {
  console.error("Error writing document: ", error);
});
  var name1 = name+model;
  sessionStorage.setItem('comp',name1);

}
