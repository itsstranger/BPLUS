window.onload = function() {
    const effect = document.querySelector(".super");
    const efa = document.querySelector(".supera");
    const efb = document.querySelector(".superb");
const nav = document.querySelector(".nav");




        window.addEventListener('scroll',scrollEffect);

    function scrollEffect(){
        if(window.scrollY>=300){
            effect.style.opacity = '1';
            effect.style.transform = 'translateX(0px)';
            effect.style.transition = '1s ease-in-out';



          nav.style.transform = 'scale(100%)';
          nav.style.transition = '0.3s linear';

        }else{
            effect.style.opacity = '0';
            effect.style.transform = 'translateX(-50px)';
          nav.style.transform = 'scale(100%)';
           
        }
      
      if(window.scrollY>=750){
        efa.style.opacity = '1';
        efa.style.transform = 'translateX(0px)';
        efa.style.transition = '1s ease-in-out';

      }else{
        efa.style.opacity = '0';
            efa.style.transform = 'translateX(-50px)';
      }

      if(window.scrollY>=1250){
       
        efb.style.opacity = '1';
        efb.style.transform = 'translateX(0px)';
        efb.style.transition = '1s ease-in-out';

      }else{
        efb.style.opacity = '0';
            efb.style.transform = 'translateX(-50px)';
      }
    }
    scrollEffect()
}

