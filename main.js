let burger = document.querySelector(".header__burger")
console.log(burger)
burger.addEventListener("click", function(){
    burger.classList.toggle("burger-active")
})