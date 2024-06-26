document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! We will get back to you soon.');
});

// Gallery Navigation
const gallery = document.querySelector('.gallery');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const galleryItems = document.querySelectorAll('.gallery div');

let currentIndex = 0;
const maxIndex = galleryItems.length - 1;

backBtn.addEventListener('click', function() {
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    const scrollAmount = galleryItems[currentIndex].offsetWidth;
    gallery.scrollLeft -= scrollAmount;
});

nextBtn.addEventListener('click', function() {
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    const scrollAmount = galleryItems[currentIndex].offsetWidth;
    gallery.scrollLeft += scrollAmount;
});
    document.addEventListener("DOMContentLoaded", function() {
            var backToTop = document.getElementById("back-to-top");

            // Show or hide the button
            window.onscroll = function() {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    backToTop.style.display = "block";
                } else {
                    backToTop.style.display = "none";
                }
            };

            // Scroll to the top smoothly
            backToTop.addEventListener("click", function(event) {
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        });
