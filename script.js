function result() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;


    var mail_1 = firstname.slice(0,3) + lastname.slice(Math.floor(Math.random()*lastname.length +1)) + Math.floor(Math.random()*9999+1) + '@gmail.com'
  
    var  mail_2 = firstname.slice(0,3) + lastname.slice(Math.floor(Math.random()*lastname.length +1)) + Math.floor(Math.random()*9999+1) + '@gmail.com';
   
    var mail_3 = firstname.slice(0,3) + lastname.slice(Math.floor(Math.random()*lastname.length +1)) + Math.floor(Math.random()*9999+1) + '@gmail.com';
    console.log(mail_1);
    console.log(mail_2);
    console.log(mail_3);
    document.getElementById('Xmail').innerHTML = mail_1;
    document.getElementById('Ymail').innerHTML = mail_2;
    document.getElementById('Zmail').innerHTML = mail_3;
   
    }
   