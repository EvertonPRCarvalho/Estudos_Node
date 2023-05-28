//SÓ FRONTEND
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const navList = document.getElementById('nav');
    navList.classList.toggle('active');
}

var element1 = document.getElementById("form-login-step-one");
var element2 = document.getElementById("form-login-step-tow");
var element3 = document.getElementById("form-login-step-three");
var element4 = document.getElementById("btn-next-step");
function nextStepCreateAccount(){
    if (element1.style.display != "none"){
        element1.style.display = "none";    
        element2.style.display = "block";
    } else if (element1.style.display == "none" && element2.style.display == "none" )
    {
        element2.style.display = "block";
        element1.style.display = "none";
        element3.style.display = "none";
    }else {
        element1.style.display = "none";
        element2.style.display = "none";
        element4.style.display = "none";
        element3.style.display = "block";
    }
}

const routeSendItem = require('../routes/routes');
function sendITem(){
    routeSendItem().require('/itens-doados')
}
function getItem(){
    var item = document.createElement()
}
/*
btnMobile.addEventListener('click', toggleMenu);

const routeLogin = require('../routes/routes');

function goToLogin(){
    const login = document.getElementById('btn-login');
    login.addEventListener('click', () => {
        routeLogin.route;
    });
} 

module.exports = {
    goToLogin,
}
*/