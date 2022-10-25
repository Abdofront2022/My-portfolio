let burger = document.querySelector(".burger");
let oo = document.querySelector(".one");
let tt = document.querySelector(".two");
let hh = document.querySelector(".three");
let non = document.querySelector(".non");
let gearimg = document.querySelector(".gearimg");
let dlocal = document.querySelector(".d-local");
gearimg.onclick = function(){
    dlocal.classList.toggle("loctwo");
    dlocal.classList.toggle("loctwoo");
}
burger.onclick = function(){

    if(oo.className === "one"){
        oo.classList.remove("one");
        hh.classList.remove("three");
        
    }else{
        oo.classList.add("one");
        hh.classList.add("three");
    }
        oo.classList.toggle("oo");
        tt.classList.toggle("tt");
        hh.classList.toggle("hh");
        non.classList.toggle("non");
}
let sictionSkils = document.querySelector(".skils");
let span = document.querySelectorAll(".porogrs span");
window.onscroll = function(){
    if(window.scrollY >= sictionSkils.offsetTop - 450){
        span.forEach((span)=>{
            span.style.width = span.dataset.width;
        })
    }else{
        span.forEach((span)=>{
            span.style.width = "0%";
        })
    }
}
let colors = localStorage.getItem("color");
if(colors !== null){
    document.documentElement.style.setProperty('--color--one',localStorage.getItem("color"))
}
let loctwo = document.querySelectorAll(".loctwo div");
loctwo.forEach(div =>{
    div.addEventListener("click", (e) =>{
        document.documentElement.style.setProperty('--color--one',e.target.dataset.color)
        localStorage.setItem("color", e.target.dataset.color)
    })
})
let darkmoon = document.querySelector(".darkmoon");
darkmoon.onclick=function(){
    document.body.classList.toggle("abdo")
}
let inone = document.querySelectorAll(".forminput input");
let intwo = document.querySelector(".masseg textarea");
let sindemail = document.querySelector(".submit");;
sindemail.onclick = function(){
    window.location = 'https://gmail.com';
}