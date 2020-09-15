

const btnSignIn = document.querySelector("#btnSignIn");
    
btnSignIn.onclick = function() {
    const username = document.querySelector("#inputEmail").value;
    const password = document.querySelector("#inputPassword").value;

    const input = document.querySelector("#tulos");
    tulos.innerHTML = `${username}, ${password}`;
    
    return false;
}