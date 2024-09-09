// $(document).ready(function(){
//     $('.your-class').slick({
//         // Add your Slick Slider options here
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         arrows: true
//     });
// });




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5, // Default number of slides per view
    spaceBetween: 10, // Space between slides
    loop: true, // Enable looping
    autoplay: {
        delay: 2000, // Time span in milliseconds (2 seconds)
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        375: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        425: {
            slidesPerView: 3,
            spaceBetween: 10
        },
       
        // when window width is <= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 5,
            spaceBetween: 15
        },
        // when window width is <= 1024px
        1024: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        // when window width is > 1024px
        1025: {
            slidesPerView: 5,
            spaceBetween: 10
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-toggle');
    
    accordionButtons.forEach(button => {
        const accordionContent = document.querySelector(button.getAttribute('data-accordion-target'));
        const plusIcon = button.querySelector('.plus-icon');
        const minusIcon = button.querySelector('.minus-icon');
        
        button.addEventListener('click', function () {
            const isOpen = !accordionContent.classList.contains('hidden');
            accordionContent.classList.toggle('hidden');
            plusIcon.classList.toggle('hidden', !isOpen); // Show plus icon when closed
            minusIcon.classList.toggle('hidden', isOpen); // Show minus icon when open
        });
    });
});