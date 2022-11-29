window.onload = function() {
    const effect = document.querySelector(".map");





        window.addEventListener('scroll',scrollEffect);

    function scrollEffect(){
        if(window.scrollY>=500){
            effect.style.opacity = '1';
            effect.style.transform = 'translateX(0px)';
            effect.style.transition = '1s ease-in-out';
        }else{
            effect.style.opacity = '0';
            effect.style.transform = 'translateX(-50px)';
           
        }
    }
    scrollEffect()
}
