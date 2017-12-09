var validateForm=function() {
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        console.log('False');
    }
    else{console.log('true');}
}