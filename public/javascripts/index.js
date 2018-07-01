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
    window.location = "index3.html";
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

function googleLogin(){


    var provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider);
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log("Success");
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log("Error",errorCode,"msg:",errorMessage,"mail:",email);
        // ...
    });

    //Getting redirected result
    firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
        }
        var user = result.user;
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;// The firebase.auth.AuthCredential type that was used.

    });
    console.log("Logged in with Google");
    return false;
}