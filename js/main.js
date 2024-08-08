/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== ADD BLUR HEADER ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
  loop: true,
spaceBetween: 16,
grabCursor: true,
slidesPerView: 'auto',
centeredSlides: 'auto',
  breakpoints: {
      1150:{
        slidesPerView: 3,
        centeredSlides: false,
      }
    }
});


const modalViews = document.querySelectorAll('.services__model'),
      modalBtns  = document.querySelectorAll('.serv__botton'),
      modalClose = document.querySelectorAll('.services__model-close')

let modal =  function(modalClick){
  console.log("Opening modal:", modalClick);
  modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((mb,i)=>{
  mb.addEventListener('click',()=>{
    modal(i)
  })
})
modalClose.forEach((mc)=>{
  mc.addEventListener('click',()=>{
    modalViews.forEach((mv)=>{
      mv.classList.remove('active-modal')
    })
  })
})

/*=============== SWIPER PLANETS ===============*/ 
const swiperTravel = new Swiper('.travel__swiper', {
    loop: true,
  spaceBetween: 32,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      }
  });

/*=============== SHOW SCROLL UP ===============*/ 
const swiper1 = new Swiper('#swiper1', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  autoplay: {
    delay: 3000, // الوقت بالمللي ثانية (3000 مللي ثانية = 3 ثوانٍ)
    disableOnInteraction: false,
  },
  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  }
});

const swiper2 = new Swiper('#swiper2', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  autoplay: {
    delay: 3000, // الوقت بالمللي ثانية (3000 مللي ثانية = 3 ثوانٍ)
    disableOnInteraction: false,
    reverseDirection: true, // لتحريك الشريط إلى اليسار
  },
  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  }
});


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)
/*=============== DARK LIGHT THEME ===============*/ 


/* choose faq */
const faqItems = document.querySelectorAll('.choose__faq-item')
// 1.select each item
faqItems.forEach( (item) =>{
    const faqHeader = item.querySelector('.choose__faq-header')

    // select each button click
    faqHeader.addEventListener('click' , () =>{
        // select the current faq-open class
        const openItem = document.querySelector('.faq-open')
        // call the  toggleitem function
        toggleItem(item)
        // remove the faq-open class from other items
        if(openItem && openItem != item){
            toggleItem(openItem)
        }
    })
})
// creat function to display the contect
const toggleItem = (item) =>{
    // select each faq contecnt
    const faqContent =item.querySelector('.choose__faq-content')
    // if the same item contains the faq-open class ,remove
    if(item.classList.contains('faq-open')){
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')

    } else{
            // add max-height to use the content and the faq-open class
    faqContent.style.height = faqContent.scrollHeight + 'px'
    item.classList.add('faq-open')
    }

}
/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');
const volumeSlider = document.getElementById('volume-slider');

// Set initial volume to a low value (10%)
videoFile.volume = 0.1;

// Update volume slider to match initial volume
volumeSlider.value = 0.1;

function playPause() {
    if (videoFile.paused) {
        // Play video
        videoFile.play();
        // Change the icon
        videoIcon.classList.remove('ri-play-large-fill');
        videoIcon.classList.add('ri-pause-large-fill');
    } else {
        // Pause video
        videoFile.pause();
        // Change the icon
        videoIcon.classList.remove('ri-pause-large-fill');
        videoIcon.classList.add('ri-play-large-fill');
    }
}

videoButton.addEventListener('click', playPause);

function finalVideo() {
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-large-fill');
    videoIcon.classList.add('ri-play-large-fill');
}

// When the video ends
videoFile.addEventListener('ended', finalVideo);

// Adjust volume based on slider
volumeSlider.addEventListener('input', () => {
    videoFile.volume = volumeSlider.value;
});


let toggleBtn = document.querySelector(".toggle__btn");
let starterInbody = document.querySelector("#starter-inbody");
let proInbody = document.querySelector("#pro-inbody");
let premiumInbody = document.querySelector("#premium-inbody");

toggleBtn.addEventListener("click", () => {
    const newText = "inbody only for women";
    const defaultText = "Includes photos and inbody";
    
    starterInbody.innerHTML = starterInbody.innerHTML === defaultText ? newText : defaultText;
    proInbody.innerHTML = proInbody.innerHTML === defaultText ? newText : defaultText;
    premiumInbody.innerHTML = premiumInbody.innerHTML === defaultText ? newText : defaultText;
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
