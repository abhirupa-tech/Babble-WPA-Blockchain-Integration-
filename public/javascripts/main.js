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

// Loads chat messages history and listens for upcoming ones.
Babble.prototype.loadMessages = function() {
    // Loads the last 12 messages and listen for new ones.
    var setMessage = function(snap) {
        var data = snap.val();
        this.displayMessage(snap.key, data.name, data.text, data.profilePicUrl, data.imageUrl);
    }.bind(this);

    this.database.ref('/messages/').limitToLast(12).on('child_added', setMessage);
    this.database.ref('/messages/').limitToLast(12).on('child_changed', setMessage);
};