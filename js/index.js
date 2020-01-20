let scrollTop = document.querySelector(".scroll-up"),
    burgerIcon = document.querySelector(".burger"),
    burgerTagsBlock = document.querySelector(".nav_burger_tags"),
    burgerTabs = document.querySelectorAll(".nav_burger_tags a");



scrollTop.addEventListener("click", function () {
    window.scrollTo(0,0);//доробити
});
window.addEventListener("scroll", function () {
    if(window.pageYOffset > 800){
        scrollTop.style = "display: block";
    } else{
        scrollTop.style = "display: none";
    }
});

burgerIcon.addEventListener("click", function () {
    burgerTagsBlock.classList.toggle("invisible");
});


burgerTabs.forEach(function (tag) {
    tag.addEventListener("click", function () {
        burgerTagsBlock.classList.add("invisible");
    })
});