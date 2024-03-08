 const navbarMenu = document.querySelector(".navbar .links");
 const hamburgerBtn = document.querySelector(".hamburger-btn");
 const hideMenuBtn = navbarMenu.querySelector(".close-btn");
 const showPopupBtn = document.querySelector(".login-btn");
 const formPopup = document.querySelector(".form-popup");
 const hidePopupBtn = formPopup.querySelector(".close-btn");
 const loginSignupLink = formPopup.querySelectorAll(".bottom-link a")

//Show Mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

//hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());


 //show login popup
 showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
 });


 //hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click()); 

//show or hide signup form
loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
});
