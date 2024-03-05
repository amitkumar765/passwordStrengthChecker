const inputfield = document.querySelector('#password');
const outputfield = document.querySelector('#output');

inputfield.addEventListener('input', function() {
    console.log(inputfield.value);
    let password = inputfield.value;
    if(password.length < 8) {
        outputfield.innerText='Password is too Short';
        outputfield.style.color= 'purple';
    }else{
        // outputfield.innerText ='Password  is long enough';
        // outputfield.style.color= 'blue';
        console.log("Is lower case", password.search(/[a-z]/));
        if(password.search(/[a-z]/)==-1){
            outputfield.innerText= 'Password is missing a lowercase letter';
            outputfield.style.color= 'purple';
        }else if (password.search(/[A-Z]/)==-1){
            outputfield.innerText = 'password is missing a uppercase';
            outputfield.style.color='purple';

        }else if(password.search(/[0-9]/)==-1){
            outputfield.innerText ='password is missing character';
            outputfield.style.color ='purple'; 
        }
        else if(password.search(/[`\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+[\]\{\}\|\:\;\'\"\,\<\>\.\?\/]/)==-1){
            outputfield.innerText= 'password is missing special character';
            outputfield.style.color = 'purple';
        }
        else{
            outputfield.innerText = 'password is valid';
            outputfield.style.color = 'green';
        }
    }

}); 