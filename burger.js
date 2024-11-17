document.getElementById('navbar-toggle').addEventListener('click', function() {
    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.classList.toggle('active'); // Toggle active class to show/hide links
});

function myFunction(x) {
     x.classList.toggle("change");
}