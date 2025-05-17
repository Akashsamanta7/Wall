// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8h6wd_CJY0eQ3a6x0ZRHjtz42jbODQq8",
  authDomain: "whisperboard-an-anonymous-wall.firebaseapp.com",
  projectId: "whisperboard-an-anonymous-wall",
  storageBucket: "whisperboard-an-anonymous-wall.appspot.com",
  messagingSenderId: "761343032694",
  appId: "1:761343032694:web:089f74e9fb1c60dbd34e57",
  measurementId: "G-SM5ZX80S71"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();