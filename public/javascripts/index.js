firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        alert("You have been logged in");
    } else {
        alert("Incorrect Credentials");
    }
});

function login(){
    mail=$("#email").val();
    psw=$("#pwd").val();
    console.log(mail,psw,"is the pass");
}