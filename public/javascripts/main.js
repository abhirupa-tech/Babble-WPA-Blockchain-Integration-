function loadMessages(){
    console.log("loadMessages running");
    var userDataRef = firebase.database().ref("messages").orderByKey();
    userDataRef.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();

            var messageUser = childSnapshot.val().msg;
            var user = childSnapshot.val().name;

            $("#name").append(user);
            $("#text").append(messageUser);

        });
    });

}

loadMessages();