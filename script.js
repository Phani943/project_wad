document.getElementById("login-form").addEventListener("submit",function(event){event.preventDefault();
var username=btoa(document.getElementById("username").value);
var password=btoa(document.getElementById("password").value);
var isAuthenticated=false;
var users=[{username:"phani",password:"YWRnam1wdHcxMjM="},{username:"ZGl2eWE=",password:"UGhhbmljaGFpdGFueWFtZWRpY2hlcmxhQDk5OTM0OTEyMw=="}];
for(var i=0;i<users.length;i++)
{
    if(username===users[i].username&&password===users[i].password)
    {
        isAuthenticated=true;
        break
    }
}var errorMessage=document.getElementById("error-msg");
if(isAuthenticated)
{
    errorMessage.innerHTML="";
    window.location.href="user.html"
}
else
{
    errorMessage.innerHTML="Authentication failed"}
}
);