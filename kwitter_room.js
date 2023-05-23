var firebaseConfig = {
      apiKey: "AIzaSyDozHG7vhIh9SXHHdAdKd4t4y4eHD8t8a4",
      authDomain: "kwitter-13c1f.firebaseapp.com",
      databaseURL: "https://kwitter-13c1f-default-rtdb.firebaseio.com",
      projectId: "kwitter-13c1f",
      storageBucket: "kwitter-13c1f.appspot.com",
      messagingSenderId: "675591807311",
      appId: "1:675591807311:web:8a3a91f2b64c8b3e11a53a"
    };
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = 
"welcome    "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
  localStorage.setItem("room_name",room_name);
  window.location = "Kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id')>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
 
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location ="kwitter_page.html";
 }
 function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
 }