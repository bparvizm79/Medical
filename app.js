const menuBtn = document.getElementById("menu")
const navbar = document.getElementById("navbar")

navbar.style.right = "-250px"
menuBtn.onclick = function(){
    if (navbar.style.right =="-250px"){
        navbar.style.right = "0"
    }
    else{
        navbar.style.right = "-250px"
    }
} 