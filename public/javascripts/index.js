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

function signUp(){
    name=$("#nameS").val();
    mailS=$("#mailS").val();
    pwdS=$("#pwdS").val();
    pwdS2=$("#pwdS2").val();
    firebase.auth().createUserWithEmailAndPassword(mailS, pwdS2).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error",errorCode,":",errorMessage);
        // ...
    });
    return false;
}