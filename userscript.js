let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");
} 

btnSignUp.onclick  = function(){
    signIn.classList.remove("active");
    signUp.classList.remove("inActive");
} 


/* function ValidateEmail(username,password) 
{

if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password))
{
    passwordArray.push(password);
}
else
  {
    alert("You have entered an invalid password!");
    //return (false);
  }
  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username))
  {
    //return (true);
    usernameArray.push(username);
    //alert("regular expression");
  }
  else
  {
    alert("You have entered an invalid email address!");
    //return (false);
  }
    
}
 */
function check(){

    var username = document.getElementById("mailId").value;
    var password = document.getElementById("password").value;
    //ValidateEmail(username,password);
 
    
    //console.log(username);
    //console.log(username+" "+password);
    //usernameArray = 
    

    if(username=="naresh" && password=="gajul")
    {
        
        //alert("login success");
       // header("Location:index1.html");
      // window.location.href = "index1.html";
      
      window.location= "NEW.html";
    
    }
    else{
        alert("Invalid input");
    }

    //document.getElementById("mailIdOnDashboard").innerHTML = "naresh"; 
}

