import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBpvx4Z8-lxtcC7De9FfarV9z5AK8u7NXU",
    authDomain: "baseline-webapp-coasthub.firebaseapp.com",
    databaseURL: "https://baseline-webapp-coasthub.firebaseio.com",
    projectId: "baseline-webapp-coasthub",
    storageBucket: "baseline-webapp-coasthub.appspot.com",
    messagingSenderId: "962287952288",
    appId: "1:962287952288:web:c3de9df93845a5574684c5",
    measurementId: "G-X2R8EPRDPY"
  };

const fire = firebase.initializeApp(firebaseConfig)

firebase.analytics()

export default fire