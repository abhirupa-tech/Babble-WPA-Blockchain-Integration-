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