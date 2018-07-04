//Firebase Messagin Service Worker for receive messaging notifications
importScripts('/__/firebase/5.1.0/firebase-app.js');
importScripts('/__/firebase/5.1.0/firebase-messaging.js');
importScripts('/__/firebase/init.js');

firebase.messaging();