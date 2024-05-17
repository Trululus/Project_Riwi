//codigo fornulario efectos 
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () =>{
    wrapper.classList.add('active');
}
loginLink.onclick = () =>{
    wrapper.classList.remove('active');
}



const URL = "http://localhost:3000/users";

const btn = document.querySelector("#btnSU");
const userName = document.querySelector("#Username");
const userEmail = document.querySelector("#useremail");
const userPassword = document.querySelector("#userpassword");

btn.addEventListener('click', async function(event) {
    const userData = {
        username: userName.value,
        email: userEmail.value,
        password: userPassword.value
    };

    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    userName.textContent = " ";
    userEmail.textContent = " ";
    userPassword.textContent = " ";
});
