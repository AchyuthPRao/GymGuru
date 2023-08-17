// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWqSJtRSJCT65KqFmpI7hCLPJv9YGUlM8",
    authDomain: "signupsigninpage-8240f.firebaseapp.com",
    projectId: "signupsigninpage-8240f",
    storageBucket: "signupsigninpage-8240f.appspot.com",
    messagingSenderId: "484269736961",
    appId: "1:484269736961:web:d3cf3b13c03e25fcf3ac00",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);

  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
     <Link to="/"></Link>
      console.log(result);
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
};

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      <Link to="/"></Link>
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
