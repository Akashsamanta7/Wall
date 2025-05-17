import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8h6wd_CJY0eQ3a6x0ZRHjtz42jbODQq8",
  authDomain: "whisperboard-an-anonymous-wall.firebaseapp.com",
  projectId: "whisperboard-an-anonymous-wall",
  storageBucket: "whisperboard-an-anonymous-wall.appspot.com",
  messagingSenderId: "761343032694",
  appId: "1:761343032694:web:089f74e9fb1c60dbd34e57",
  measurementId: "G-SM5ZX80S71",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Only allow access if the current user is admin
onAuthStateChanged(auth, (user) => {
  if (user && user.email === "admin@whisperboard.com") {
    // Admin is logged in – allow access
    console.log("Admin authenticated");
  } else {
    // Not admin – redirect to login
    window.location.href = "index.html";
  }
});

// Handle logout
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Logout error:", error);
    });
});
