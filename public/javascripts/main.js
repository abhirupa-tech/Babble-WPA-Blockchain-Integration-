// Sets up shortcuts to Firebase features and initiate firebase auth.
Babble.prototype.initFirebase = function() {
    // Shortcuts to Firebase SDK features.
    this.auth = firebase.auth();
    this.database = firebase.database();
    this.storage = firebase.storage();
    this.messaging = firebase.messaging();

    // Initiates Firebase auth and listen to auth state changes.
    this.auth.onAuthStateChanged(this.authStateObserver.bind(this));
};