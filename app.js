let fName= document.forms['regForm']['fname'];
let lName= document.forms['regForm']['lname'];
let age= document.forms['regForm']['age'];
let number= document.forms['regForm']['number'];
let email= document.forms['regForm']['email'];
let password= document.forms['regForm']['password'];
let conPass= document.forms['regForm']['conpassword'];
let gender= document.forms['regForm']['gender'];
let skill= document.forms['regForm']['skill'];
let date= document.forms['regForm']['date'];
let ucountry= document.getElementById('ucountry');
let time= document.forms['regForm']['time'];
let file = document.forms['regForm']['file'];
let term = document.forms['regForm']['term'];


function setError(id,error){
    
   let name = document.getElementById(id);
   name.innerHTML = `${error}`;
   name.style.color = 'red';

}
function remError(id){
    let name = document.getElementById(id);
    name.innerHTML = "";

}

function validation() {
    
if(/^$/.test(fName.value))
{
   setError("fname","please enter first name")
}else if(!(/^[a-zA-Z]{3,8}$/.test(fName.value)))
{
    setError("fname","please enter valid last name")
}else{
    remError("fname")
    
}

// last name
if(/^$/.test(lName.value))
{
   setError("lname","please enter last name")
}else if(!(/^[a-zA-Z]{3,8}$/.test(lName.value)))
{
    setError("lname","please enter valid last name")
}else{
    remError("lname")
    
}

// age
if(/^$/.test(age.value))
{
   setError("age","please enter age")
}else if(!(parseInt(age.value)>17 && parseInt(age.value)<=120) )
{
    setError("age","please enter valid age")
}else{
    remError("age")
    
}

// number
if(/^$/.test(number.value))
{
   setError("number","please enter mobile number")
}else if(!(/^[0-9]{10,12}$/.test(number.value)))
{
    setError("number","please enter valid ")
}else{
    remError("number")
    
}

// email
if(/^$/.test(email.value))
{
   setError("email","please enter email")
}else if(! /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value))
{
    setError("email","please enter valid email")
}else{
    remError("email")
    
}
// password
if(/^$/.test(password.value))
{
   setError("password","please enter password")
}else if(!(/^[a-zA-Z0-9!@#$%^&*]{6,10}$/.test(password.value)))
{
    setError("password","please enter valid input")
}else{
    remError("password")
    
}
// conpassword

if(/^$/.test(conPass.value))
{
   setError("conpassword","please enter password")
}else if(password.value !== conPass.value)
{
   setError("conpassword","please enter match password")
}
else{
    remError("conpassword")
    
}

// gender


if( !(gender[0].checked || gender[1].checked))
{
   setError("gender","please select gender")
}
else{
    remError("gender")
    
}

// skill
if(!(skill[0].checked || skill[1].checked || skill[2].checked || skill[3].checked|| skill[4].checked || skill[5].checked))
{
   setError("skill","please select skill")
}else{
    remError("skill")
    
}

// date

if( date.value.length == 0)
{
   setError("date","please select date")
}
else{
    remError("date")
    
}
//country
if( ucountry.value == "")
{
   setError("country","please select country")
}
else{
    remError("country")
    
}
// time
if( time.value.length == 0)
{
   setError("time","please select time")
}
else{
    remError("time")
    
}

if(file.value.length == 0)
{ 
    setError("file","please select file")

}else if(!/(\.pdf)$/i.exec(file))
{
    setError("file","only upload pdf file")
}
else {
remError("file")

    }
    
// terms

if(!term.checked)
{
    setError("term","please accept terms and condition")
}
else {
remError("term")

}


    return false;
}