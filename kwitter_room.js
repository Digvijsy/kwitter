
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAdmzkHnxdMx6Jo50_GQoGxiW42s05-lzQ",
  authDomain: "kwitter-993f0.firebaseapp.com",
  databaseURL: "https://kwitter-993f0-default-rtdb.firebaseio.com",
  projectId: "kwitter-993f0",
  storageBucket: "kwitter-993f0.appspot.com",
  messagingSenderId: "501876885120",
  appId: "1:501876885120:web:fc3947c5601139c19a0865"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//c95 starts
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
//c95 ends

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
