let navbar = document.querySelector(".navbar");
var menubtn = document.querySelector("#menu-btn")
menubtn.onclick = () =>{
    navbar.classList.toggle("active");
}

window.onscroll = () =>{
    navbar.classList.remove("active");
    liclist.classList.remove("active");
    i1.classList.remove("active");
    starlist.classList.remove("active");
    i2.classList.remove("active");
    healthlist.classList.remove("active");
    i5.classList.remove("active");
}
document.onclick = function(e){
    if (!star.contains(e.target) && !lic.contains(e.target) && !liclist.contains(e.target) && !starlist.contains(e.target) && !navbar.contains(e.target) && !menubtn.contains(e.target)){
        liclist.classList.remove("active");
        i1.classList.remove("active");
        starlist.classList.remove("active");
        i2.classList.remove("active");
        healthlist.classList.remove("active");
        i5.classList.remove("active");
        navbar.classList.remove("active");
    }
}

var mailform = document.querySelector(".mail-form");

let emailform = document.querySelector(".email-body");
document.querySelector("#mail-btn").onclick = () =>{
    emailform.classList.add("active");
}
document.querySelector("#close-btn").onclick = () =>{
    emailform.classList.remove("active");
    mailform.reset('')
}

document.querySelector("#send-btn").onclick = () =>{
    var params = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
    };
    const serviceID = "service_tbmf5d7";
    const templateID = "template_bmk0vms";

    emailjs.send(serviceID, templateID, params);
    mailform.reset('');
    emailform.classList.remove("active");
    
}

let liclist = document.querySelector(".sub-menu-1");
let i1 = document.querySelector("#i1");
document.querySelector("#lic").onclick = () =>{
    liclist.classList.toggle("active");
    i1.classList.toggle("active");
    starlist.classList.remove("active");
    i2.classList.remove("active");
    healthlist.classList.remove("active");
    i5.classList.remove("active");
}

let starlist = document.querySelector(".sub-menu-2");
let i2 = document.querySelector("#i2");
document.querySelector("#star").onclick = () =>{
    starlist.classList.toggle("active");
    i2.classList.toggle("active");
    liclist.classList.remove("active");
    i1.classList.remove("active");
    healthlist.classList.remove("active");
    i5.classList.remove("active");
}

let healthlist = document.querySelector(".sub-menu-2-1");
let i5 = document.querySelector("#i5");
document.querySelector("#starhealth").onclick = () =>{
    healthlist.classList.toggle("active");
    i5.classList.toggle("active");
}