let lang=document.querySelector(".lang"),
langButton=document.querySelector(".lang__button");
langButton.addEventListener("click",(function(){lang.classList.contains("lang--closed")?(lang.classList.remove("lang--closed"),
lang.classList.add("lang--opened")):(lang.classList.add("lang--closed"),
lang.classList.remove("lang--opened"))}));

