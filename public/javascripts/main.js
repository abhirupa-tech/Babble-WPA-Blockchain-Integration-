function loadMessages(){
    console.log("loadMessages running");
    var userDataRef = firebase.database().ref("messages").orderByKey();
    userDataRef.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();

            var messageUser = childSnapshot.val().msg;
            var user = childSnapshot.val().name;

            $("#name").append(user+'</br>');
            $("#text").append(messageUser+'</br>');

        });
    });

}
function saveMessage(messageText)
{
    console.log("saveMessage running");
    console.log(firebase.auth().currentUser.displayName);
    return firebase.database().ref('/messages/').push({
        name:firebase.auth().currentUser.displayName,
        msg:messageText

    }).catch(function(error){
        console.error ("Cannot write new messages to database");
    });
}

loadMessages();
 function readMessage(){
         console.log("Submit clicked");
         var messageText=$('#msg').val();
         saveMessage(messageText);
         $("#name").html("");
         $("#text").html("");
         loadMessages();
 }
//Save FCM device token for notification
 function saveMessagingDeviceToken(){
     firebase.messaging().getToken().then(function(currentToken) {
         if (currentToken) {
             console.log('Got FCM device token:', currentToken);
             // Saving the Device Token to the datastore.
             firebase.database().ref('/fcmTokens').child(currentToken)
                 .set(firebase.auth().currentUser.uid);
         } else {
             // Need to request permissions to show notifications.
             requestNotificationsPermissions();
         }
     }).catch(function(error){
         console.error('Unable to get messaging token.', error);
     });
 };

 //Request action for Notification Permission
function requestNotificationsPermissions() {
    console.log('Requesting notifications permission...');
    firebase.messaging().requestPermission().then(function() {
        // Notification permission granted.
        saveMessagingDeviceToken();
    }).catch(function(error) {
        console.error('Unable to get permission to notify.', error);
    });
};