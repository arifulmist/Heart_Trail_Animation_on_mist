const bodye1 = document.querySelector("body");


bodye1.addEventListener("mousemove", (event) => {
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const spane1 = document.createElement("span");
    spane1.style.left = xpos + "px";
    spane1.style.top = ypos + "px";
    const size = Math.random()*100;
    spane1.style.width = size + "px";
    spane1.style.height = size + "px";
    bodye1.appendChild(spane1);

    setTimeout(() => {
        spane1.remove();
    }, 3000);
        
    
});