var amenuForGrand =document.querySelector(".option");
var amenuForGrandBouton =document.querySelector(".amenuForGrandBouton");
var amenuForPetitBouton =document.querySelector(".bars");

amenuForGrandBouton.addEventListener("click",()=>{
    amenuForGrand.classList.toggle("left");
    
});
amenuForPetitBouton.addEventListener("click",()=>{
    amenuForGrand.classList.toggle("left");
  
});
  window.addEventListener("scroll",()=>{
        if(window.scrollY > 0 ){
            amenuForGrand.style.display="none";
        }else{
            amenuForGrand.style.display="block";  
        }
    })