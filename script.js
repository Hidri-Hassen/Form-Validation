function validForm(){
    let message=""
    if (document.forms["myForm"]["name"].value =="") { 
    message+="- First Name must be filled out\n"}
    else if (document.forms["myForm"]["lastName"].value =="")  {
     message+="- Last Name must be filled out\n"}
    else if (document.forms["myForm"]["address"].value =="") {  
     message+="- Address must be filled out\n"}
    let email = document.forms["myForm"]["email"].value
    let regEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!regEmail.test(email)) message+="- Email address is not valid\n"
    
    let password = document.forms["myForm"]["password"].value
  
   
    let regPassword=/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
    if(!regPassword.test(password)) 
        message+="- Password should contain at least 8 characters, where at least one number, one lower case and one upper case and one special characters\n"
    if (document.forms["myForm"]["comments"].value =="")   message+="- Comments must be filled out\n"
    if(message=="")  {  
    alert("submission successful");
    document.forms["myForm"].reset();
}
    else 
    alert("You have the following error(s):\n"+message);
    return false;
}
   