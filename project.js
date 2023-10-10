let scrollContainer = document.querySelector("gallery");
let backBtn = document.getElementById("backBtn");
let forwardBtn = document.getElementById("forwardBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})


forwardbtn.addEventListener("click", ()=> {
    scrollContainer.scrollLeft += 900;
});


backbtn.addEventListener("click", ()=> {
    scrollContainer.scrollLeft -= 900;
});