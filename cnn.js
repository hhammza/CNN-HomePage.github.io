function scrollRight(){
    var container = document.querySelector("#scroll-content");
    container.scrollBy({left:100, behavior:'smooth'});
    // checkScroll();
}

function scrollToLeft(){
    var container = document.querySelector("#scroll-content");
    container.scrollBy({left:-100, behavior:'smooth'});
    // checkScroll();
}

// function checkScroll(){
//     var container = document.querySelector("#scroll-content");
//     var leftBtn = document.querySelector("#scroll-btn-left");
//     if(container.scrollLeft > 0){
//         leftBtn.style.display = display-block;
//     }
//     else{
//         leftBtn.style.display = none;
//     }
// }


window.addEventListener('scroll', function(){
    var navbar= document.getElementById("navbar");
    var bannerHeight = document.getElementById("banner").offsetHeight;

    if(window.scrollY > bannerHeight){
        navbar.style.position = fixed;
        navbar.style.top = 0;
        navbar.style.width = '100%';
        navbar.style.transform = 'none';
    }
    else{
        navbar.style.position = absolute;
        navbar.style.top = 'auto';
        navbar.style.left = '50%';
        navbar.style.transform = 'translateX(-50%)';
    }
});