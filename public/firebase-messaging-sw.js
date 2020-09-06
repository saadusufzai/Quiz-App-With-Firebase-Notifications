importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');



const firebaseConfig = {
    apiKey: "AIzaSyBaU7IuJxGZeGhIT3lao20PYqiGsvQmsYM",
    authDomain: "quiz-app-push-notificati-10d11.firebaseapp.com",
    databaseURL: "https://quiz-app-push-notificati-10d11.firebaseio.com",
    projectId: "quiz-app-push-notificati-10d11",
    storageBucket: "quiz-app-push-notificati-10d11.appspot.com",
    messagingSenderId: "245030509701",
    appId: "1:245030509701:web:685f8f66c27a92dc9d5dec",
    measurementId: "G-NKV3G0F3SW"
  };

  firebaseConfig.initializeApp(firebaseConfig);
  firebase.messaging();