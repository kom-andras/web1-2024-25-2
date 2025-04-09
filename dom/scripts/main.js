const btnGroup = document.querySelector(".btn-group");
const prevbtn = btnGroup.querySelector('button.btn:nth-child(1)');
const numbtn = btnGroup.querySelector('button.btn:nth-child(2)');
const nextbtn = btnGroup.querySelector('button.btn:nth-child(3)');
if(prevbtn){
    prevbtn.classList.add("btn-info");
}
if(numbtn){
    numbtn.classList.add("btn-primary");
}
if(nextbtn){
    nextbtn.classList.add("btn-info");
}


prevbtn.addEventListener("click", {e} => {
    console.log(e);
});