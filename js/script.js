if (document.querySelector(".feedback")) {
var link = document.querySelector(".feedback");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".form-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=mail]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("show-popup");
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("show-popup");
    popup.classList.remove("popup-error");
  });

form.addEventListener("submit", function (evt) {
    if (!login.value || !mail.value) {
    	evt.preventDefault();
        popup.classList.add("popup-error");
    }
       else {
       	localStorage.setItem("login", login.value);
    }})


var openMap = document.querySelector(".maps");
var map = document.querySelector(".popup.map");
var closeMap = map.querySelector(".close");

openMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("show-popup");
  });

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("show-popup");
  });
};


var buy = document.querySelectorAll(".buy");
var cart = document.querySelector(".add-in-cart");
var closeCart = document.querySelector(".close.cart");

buy.forEach(function(elem) {
	elem.addEventListener("click", function (evt) {
    evt.preventDefault();
    cart.classList.add("show-popup");});

closeCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    cart.classList.remove("show-popup");
});
});

