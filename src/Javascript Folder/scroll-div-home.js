
export function scroll_div_home() {

// scroll js


var scrollDiv1s = document.querySelectorAll('.scroll-div1');
var desc_div1 = document.querySelector('.work-1-desc-points-div');
  var desc_div2 = document.querySelector('.work-2-desc-points-div');

function handleScroll() {
  var windowHeight = window.innerHeight;

  scrollDiv1s.forEach(function (scrollDiv1) {
    var scrollDivs = scrollDiv1.querySelectorAll('.scroll-div');
    var scrollDiv1Position = scrollDiv1.getBoundingClientRect().top;

    if (scrollDiv1Position < windowHeight && scrollDiv1Position > -scrollDiv1.offsetHeight) {
      scrollDivs.forEach(function (scrollDiv) {
        scrollDiv.style.display = 'flex';
        desc_div1.style.flexDirection = 'column';
        desc_div2.style.flexDirection = 'column';
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', handleScroll);
window.addEventListener('scroll', handleScroll);

}