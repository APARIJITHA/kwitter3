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

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";

}