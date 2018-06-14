firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        alert("You have been logged in");
    } else {
        console.log("Not logged in");
    }
});

function login(){
    mail=$("#email").val();
    psw=$("#pwd").val();
    console.log(mail,psw,"is the pass");

    firebase.auth().signInWithEmailAndPassword(mail, psw).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error",errorCode,":",errorMessage);
    });
    return false;
}