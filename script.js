document.querySelectorAll('.MobileMenuToggle').forEach((element, idx, elements) =>{
    element.addEventListener('click', (e)=>{        
            const x = document.querySelector(".containermenu");
            const y = document.querySelector("#secondnav");
            if (x.style.display === "block") {
                x.style.display = "none";
                y.style.display = "none";
            } else {
                x.style.display = "block";
                y.style.display = "block";
            }
    });
});