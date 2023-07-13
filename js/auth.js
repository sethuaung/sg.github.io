function checkPswd() {
    var username = document.getElementById("usrname").value;
    var password = document.getElementById("pswd").value;
    if (username == "root" && password == "root") {
         window.location="indexM.html";
    }
    else if( username == "admin1" && password == "admin1") {
        window.location="indexC1.html";
      // login Formdata
    }
    else if( username == "admin2" && password == "admin2") {
        window.location="indexC2.html";
      // login Meeting
    }
    else{
        alert("Passwords do not match.");
    }
}