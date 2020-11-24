
function validate(logincheck){
    var user=document.getElementById('inputUser');
    var pass=document.getElementById('inputPassword');
    if(user.value.trim()!='' || pass.value!=''){
        return logincheck(user.value,pass.value);
    }
    else{
        alert('User name or Password cannot be empty');
        return false;
    }
}

function logincheck(uname,pwd){
    if(uname=='admin' && pwd=='12345'){
        return true;
    }
    else{
        alert('Incorrect Username or password');
        return false;
    }
}

