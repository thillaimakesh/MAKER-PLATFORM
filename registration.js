function signup(){
location.href ="signup.html";
}

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
location.href="commandtype.html";
}
