function validation()
{
    'use strict';
    var age=document.getElementById("age"),
        number=document.getElementById("number"),
        pass=document.getElementById("pass");

    if(age.value<0)
    {
        document.getElementById("div3").innerHTML="please,enter a valid age";
        return false;
    }

    if(isNaN(age.value))
    {
        document.getElementById("div3").innerHTML="please,enter a valid age";
        return false;
    }

    if(isNaN(number.value))
    {
        document.getElementById("div4").innerHTML="please,enter a valid phone number";
        return false;
    }

    if(pass.value==0||pass.value==null)
    {
        document.getElementById("div8").innerHTML="please,enter your password";
        return false;
    }

    if((pass.value).search(/[ ]/)!=-1)
    {
        document.getElementById("div8").innerHTML="password cannot contain a space";
        return false;
    }

    if((pass.value).charAt(0)!==(pass.value).charAt(0).toUpperCase())
    {
     document.getElementById("div8").innerHTML="password must start with an upper character";
     return false;
    }

    if((pass.value).search(/[a-z]/)==-1){
        document.getElementById("div8").innerHTML="password must contain at least 1 lower character";
       return false;//
   }
    
    if((pass.value).search(/[0-9]/)==-1){
    document.getElementById("div8").innerHTML="password must contain a number";
    return false;
    }

    if((pass.value).search(/[!/@/#/$/%/^/&/*/>/<]/)==-1)
    {
        document.getElementById("div8").innerHTML="password must contain at least 1 special character";
        return false;
    }
    else
    {
     return true;
    }
}

