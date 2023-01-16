const firebaseConfig = {
    apiKey: "AIzaSyB6NqmNFRTA8-J36HbfXBzCHuqmLLHDhnw",
    authDomain: "let-chat-web-app-e67b7.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-e67b7-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-e67b7",
    storageBucket: "let-chat-web-app-e67b7.appspot.com",
    messagingSenderId: "950322601434",
    appId: "1:950322601434:web:7fcbf3575c69cd6e43b4e3",
    measurementId: "G-25QVW75KLQ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name"); 
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 
  function addroom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room"
  });
  }

//ADD YOUR FIREBASE LINKS HERE

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) 
    {
    childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName (){
localStorage.setItem("room_name",room_name);
window.location = "web_page.html";
}
function logout() { 
  localStorage.removeItem("user_name"); 
  localStorage.removeItem("room_name"); 
  window.location = "index.html"; }
//https://mahdihat791.github.io/v2/kwitter/index.html//