function validation()
{
    'use strict';
    var fname=document.getElementById("fname"),
        lname=document.getElementById("lname"),
        age=document.getElementById("age"),
        number=document.getElementById("number"),
        adresse=document.getElementById("adresse"),
        select=document.getElementById("select"),
        email=document.getElementById("email"),
        pass=document.getElementById("pass");

    if(fname.value ==0||fname.value==null)
    {
        document.getElementById("div1").innerHTML="please,enter your first name";
        return false;
    }

    if(lname.value==0||lname.value==null)
    {
        document.getElementById("div2").innerHTML="please,enter your last name";
        return false;
    }

    if(age.value==0||age.value==null)
    {
        document.getElementById("div3").innerHTML="please,enter your age";
        return false;
    }

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

    if(number.value==0||number.value==null)
    {
        document.getElementById("div4").innerHTML="please,enter your phone number";
        return false;
    }

    if(isNaN(number.value))
    {
        document.getElementById("div4").innerHTML="please,enter a valid phone number";
        return false;
    }

    if(adresse.value==0||adresse.value==null)
    {
        document.getElementById("div5").innerHTML="please,enter your adresse";
        return false;
    }

    if(select.value=="")
    {
        document.getElementById("div6").innerHTML="please,choose your gender";
        return false;
    }

    if(email.value==0||email.value==null)
    {
        alert("please,enter your email");
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
     document.getElementById("div8").innerHTML="password must start with an upper case character";
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

