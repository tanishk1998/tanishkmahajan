// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 0.000001) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 0.1;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait/2;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}


$("#home_button").click(function() {
  $('html,body').animate({scrollTop: $(".intro").offset().top},1000);
});




$(".skills").mouseover(function(){
    $(".dropdown-content").css("display", "block");
});

$(".dropdown-content").mouseover(function(){
    $(".dropdown-content").css("display", "block");
});

$(".dropdown-content").mouseout(function(){
    $(".dropdown-content").css("display", "none");
});
$(".skills").mouseout(function(){
    $(".dropdown-content").css("display", "none");
});



// -----------------------------------------------------------------

$(document).ready(function () {
  const isSmall = window.innerWidth < 500
  $('.home-splash').mousemove(e => {
    const x = e.offsetX
    const y = e.offsetY
    const circle = $('.home-splash .ono-animatedbtn__circle')
    if (!isSmall) {
      circle.css({
        left: `${x / (window.innerWidth / 100)}px`,
        top: `${y / 40}px`
      })
    }
  })

  $('.home-about').mousemove(e => {
    const x = e.offsetX
    const y = e.offsetY
    const circle = $('.home-about .ono-animatedbtn__circle')
    if (!isSmall) {
      circle.css({
        left: `${x / (window.innerWidth / 100)}px`,
        top: `${y / 40}px`
      })
    }
  })

  $('.home-theme').mousemove(e => {
    const x = e.offsetX
    const y = e.offsetY
    const circle = $('.home-theme .ono-animatedbtn__circle')
    if (!isSmall) {
      circle.css({
        left: `${x / (window.innerWidth / 100)}px`,
        top: `${y / 40}px`
      })
    }
  })

  $('.home-contact').mousemove(e => {
    const x = e.offsetX
    const y = e.offsetY
    const circle = $('.home-contact .ono-animatedbtn__circle')
    if (!isSmall) {
      circle.css({
        left: `${x / (window.innerWidth / 100)}px`,
        top: `${y / 40}px`
      })
    }
  })

  $('body').mousemove(e => {
    const x = e.offsetX
    const y = e.offsetY
    const circle = $('.events-list > .ono-animatedbtn__circle')
    if (!isSmall) {
      circle.css({
        left: `${x / (window.innerWidth / 100)}px`,
        top: `${y / 40}px`
      })
    }
  })
})

