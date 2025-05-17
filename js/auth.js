import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

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

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value;

  if (!userId) {
    loginMessage.textContent = "User ID is required.";
    return;
  }

  const email = `${userId}@whisperboard.com`;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (email === "admin@whisperboard.com") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "wall.html";
      }
    })
    .catch((error) => {
      loginMessage.textContent = `Login failed: ${error.message}`;
    });
});
