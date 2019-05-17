
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
  alert("successfully registered!");
  var name1 = name+model;
  sessionStorage.setItem('comp',name1);
 location.href = "skill.html";

}
