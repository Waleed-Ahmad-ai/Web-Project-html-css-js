document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.product-card .btn');

    cartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Added to cart!');
        });
    });
});
