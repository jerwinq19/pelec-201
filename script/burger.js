// Toggle navbar visibility
document.getElementById('navbar-toggle').addEventListener('click', function() {
     const buttonsContainer = document.querySelector('.buttons');
     buttonsContainer.classList.toggle('active'); // Toggle active class to show/hide links
});
 
 // Change navbar toggle icon
function myFunction(x) {
     x.classList.toggle("change");
}
 
 // Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
     loop: true,
     grabCursor: true,
     spaceBetween: 30,
 
     // Pagination bullets
     pagination: {
         el: '.swiper-pagination',
         clickable: true,
         dynamicBullets: true,
     },
 
     // Navigation arrows
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
 
     // Responsive breakpoints
     breakpoints: {
         0: {
             slidesPerView: 1,
         },
         768: {
             slidesPerView: 2,
         },
         1024: {
             slidesPerView: 3,
         },
     },
});
 
 // Toggle dropdown menu visibility
function dropDown() {
     const dropdown = document.getElementById("myDropdown");
     dropdown.classList.toggle("show");
}
 
 // Close dropdown if clicking outside
window.onclick = function (e) {
     if (!e.target.matches('.dropbtn')) {
         const dropdown = document.getElementById("myDropdown");
         if (dropdown.classList.contains('show')) {
             dropdown.classList.remove('show');
         }
     }
};
 