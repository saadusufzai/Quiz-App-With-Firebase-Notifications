import firebase from 'firebase'

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

  firebase.initializeApp(firebaseConfig);
  const massaging = firebase.messaging();

export const configureNotification = ()=>{
    Notification.requestPermission().then((permission)=>{
        console.log(permission)
        if(permission === 'granted'){
            massaging.getToken().then((currentToken)=>{
                if(currentToken){
                    console.log('TOKEN => ')
                    console.log( currentToken)
                } else {
                    console.log(' No Instance ID token available. Request permission to generate one.')
                }
            }).catch((err)=>{
                console.log('An Error occured while retreving token. ', err)
            })
        }
    })
}