export function scroll_div_contact() {

    // scroll js

    var scrollDiv1s = document.querySelectorAll('.scroll-contact-div1');

    function handleScroll() {
        var windowHeight = window.innerHeight;

        scrollDiv1s.forEach(function (scrollDiv1) {
            var scrollDivs = scrollDiv1.querySelectorAll('.scroll-div');
            var scrollDiv1Position = scrollDiv1.getBoundingClientRect().top;

            if (scrollDiv1Position < windowHeight && scrollDiv1Position > -scrollDiv1.offsetHeight) {
                scrollDivs.forEach(function (scrollDiv) {
                    scrollDiv.style.display = 'block';
                });
            }
        });
    }

    window.addEventListener('DOMContentLoaded', handleScroll);
    window.addEventListener('scroll', handleScroll);
}