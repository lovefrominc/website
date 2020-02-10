let menu = document.getElementById('menu')
menu.addEventListener('click', e => {
    e.preventDefault()
    document.getElementById('menu-screen').style.top = "0"
    setTimeout( ()=>{
        document.getElementById('menu-screen').style.opacity = "1"
    },101)
})
let close = document.getElementById('close')
close.addEventListener('click', e => {
    e.preventDefault()
    document.getElementById('menu-screen').style.opacity = "0"
    setTimeout( ()=>{
        document.getElementById('menu-screen').style.top = "-100%"
    },151)
})

var active = null;
function expand(element){
    if(active === null){
        element.parentNode.parentNode.style.height = "100%"
        element.setAttribute('style', 'transform: rotate(-90deg');
        element.style.alignItems = "flex-end";
        active = element.parentNode.parentNode;
        return active;
        
    }else if(active === element.parentNode.parentNode){
        active.style.height = "76px";
        element.setAttribute('style', 'transform: rotate(90deg');
        element.style.alignItems = "flex-start";
        active = null;
        return active;
    }else{
        active.style.height = "76px";
        active.children[0].children[1].setAttribute('style', 'transform: rotate(90deg');
        active.children[0].children[1].style.alignItems = "flex-start";
        element.parentNode.parentNode.style.height = "100%";
        element.setAttribute('style', 'transform: rotate(-90deg');
        element.style.alignItems = "flex-end";
        active = element.parentNode.parentNode;
        return active;
    }
}





let info = document.getElementById('info')
info.addEventListener('click', e=>{
    e.preventDefault()
    document.getElementById('notif').style.bottom = "52px";
    document.getElementById('notif').style.transform = "scale(1)";
    document.getElementById('notif').style.opacity = "1";
})


let ok = document.getElementById('ok-close')
ok.addEventListener('click', e=>{
    e.preventDefault()
    document.getElementById('notif').style.bottom = "0px";
    document.getElementById('notif').style.transform = "scale(0.8)";
    document.getElementById('notif').style.opacity = "0";
})