document.getElementById('input-submit').addEventListener('click',function(){
    const userEmailValue = document.getElementById('user-email');
    const userEmail = userEmailValue.value;
    
    const userPasswordValue = document.getElementById('user-password');
    const userPassword = userPasswordValue.value;

    if(userEmail == 'topu199041@gmail.com' && userPassword == '123456'){
        window.location.href = 'banking.html';
    }
    else{
        document.getElementById('user-password').style.borderColor = 'red'
    }
})
