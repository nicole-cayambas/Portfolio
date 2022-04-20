function hire(){
    let hireBtn = document.getElementById("hireBtn")
    console.log("hire clicked!");
}
function changeColor(){
    let arrowDownLink = document.getElementById("arrow-down-a")
    arrowDownLink.style.color = "rgb("
    + Math.floor(Math.random()*255)
    + ","
    + Math.floor(Math.random()*255)
    + ","
    + Math.floor(Math.random()*255)
    + ")"
}

const header = document.getElementById("header")
window.addEventListener("scroll", function(){
    if(window.scrollY > 100){
        header.style.backgroundColor = "#C8C8C8"
        header.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)"
        header.style.transition = "all 0.5s"
    } else {
        header.style.backgroundColor = "transparent"
        header.style.boxShadow = "none"
        header.style.transition = "all 0.5s"
    }
})