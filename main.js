// var mainApp = {};


// function logout() {
//   firebase.auth().signOut();

//   var uid = null;
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       // User is signed in.
//       uid = user.uid;
//     } else {
//       uid = null;
//       window.location.replace("index.html");
//     }
//   });


// }

// mainApp.logout = logout;
function logout()
{
  firebase.auth().signOut().then(function(){
    window.location.replace("index.html");
  });
}

function checkuser(){
  firebase.auth().onAuthStateChanged(function (user) {
      alert("email: "+user.email+" uid: "+user.uid );

      
  });
}
