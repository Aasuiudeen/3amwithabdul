const sliderImage = [
  {
    img1: "pexels-cottonbro-studio-7600891.png",
  },
  {
    img2: "pexels-cottonbro-studio-6144024.png",
  },
];
const NewEpisodes = [
  {
    img: "/images/episode-images/newepisode.png",
    header: "Mental health awareness and self-care practices",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, amet ex cumque modi, nihil, temporibus aut molestias dicta consectetur maiores dolor atque in sequi distinctio quod. Veritatis in sequi cupiditate?",
  },
];
const OldEpisodes = [
  {
    img: "/images/episode-images/img-1.png",
    header: "Dating and navigating the modern dating scene",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, amet ex cumque modi, nihil, temporibus aut molestias dicta consectetur maiores dolor atque in sequi distinctio quod. Veritatis in sequi cupiditate?",
  },
  {
    img: "/images/episode-images/img-2.png",
    header: "Building and maintainig healthy relationships",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, amet ex cumque modi, nihil, temporibus aut molestias dicta consectetur maiores dolor atque in sequi distinctio quod. Veritatis in sequi cupiditate?",
  },
  {
    img: "/images/episode-images/img-3.png",
    header: "Effective communication skills",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, amet ex cumque modi, nihil, temporibus aut molestias dicta consectetur maiores dolor atque in sequi distinctio quod. Veritatis in sequi cupiditate?",
  },
  {
    img: "/images/episode-images/img-4.png",
    header: "Overcoming self-doubt and imposter syndrome",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, amet ex cumque modi, nihil, temporibus aut molestias dicta consectetur maiores dolor atque in sequi distinctio quod. Veritatis in sequi cupiditate?",
  },
  {
    img: "/images/episode-images/img-5.png",
    header: "Building and maintainig healthy relationships",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, amet ex cumque modi, nihil, temporibus aut molestias dicta consectetur maiores dolor atque in sequi distinctio quod. Veritatis in sequi cupiditate?",
  },
];
const guest = [
  {
    img: "/images/episode-images/Guest1.png",
    name: "Jonny Walker",
    brand: "Musician",
  },
  {
    img: "/images/episode-images/Guest2.png",
    name: "Kylie Pinup",
    brand: "C.E.O Startup",
  },
  {
    img: "/images/episode-images/Guest3.png",
    name: "Jovial sisters",
    brand: "Music group",
  },
  {
    img: "/images/episode-images/Guest4.png",
    name: "Joshua Waish",
    brand: "Chef",
  },
  {
    img: "/images/episode-images/Guest5.png",
    name: "Nancy Greenwood",
    brand: "Tutor",
  },
];
// const myths = [
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
//   {
//     mythsItems: "Job Hunting",
//   },
// ];

const hamburger = document.querySelector(".hamburger");
const aside = document.querySelector("aside");
const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");
const slider3 = document.querySelector(".slider3");
const heroContainer = document.querySelector(".hero-container");

const currentImage = 0;
//Header Slider
slider2.addEventListener("click", function () {
  slidereach();
});
slider3.addEventListener("click", function () {
  heroContainer.style.background = `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url('/images/header-image/pexels-cottonbro-studio-6144024.png')`;
  slider3.setAttribute("class", "slider1");
  slider2.classList.remove();
  slider1.classList.add("slider");
});
slider1.addEventListener("click", function () {
  heroContainer.style.background = `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url('/images/header-image/pexels-cottonbro-studio-7600891.png')`;
});
//Hamburger button
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  aside.classList.toggle("open-sidebar");
});

function slidereach() {
  heroContainer.style.background = `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url('/images/header-image/pexels-cottonbro-studio-7600891.png')`;
  slider2.setAttribute("class", "slider1");
  slider1.classList.remove("slider1");
}

const episodesCenter = document.querySelector(".episode-center");
// Episode contents

window.addEventListener("DOMContentLoaded", function () {
  getnewEpisode(NewEpisodes);
});

// Old Episdoes
const oldEpisode = document.querySelector(".oldepisode-center");

window.addEventListener("DOMContentLoaded", function () {
  getoldEpisodes(OldEpisodes);
});

function getnewEpisode(newepisodeItems) {
  const newMenu = newepisodeItems.map(function (item) {
    return `      <div class="epsiode-banner-container">
        <div class="episode-img-container">
          <img src=${item.img} alt="">
        </div>
        <div class="episode-banner-article">
          <h2>${item.header}</h2>
          <p>${item.text}</p>
          <div class="episode-social-container">
            <svg width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9 19.0714L24.242 13.5L14.9 7.92857V19.0714ZM35.708 4.53C35.942 5.40286 36.104 6.57286 36.212 8.05857C36.338 9.54429 36.392 10.8257 36.392 11.94L36.5 13.5C36.5 17.5671 36.212 20.5571 35.708 22.47C35.258 24.1414 34.214 25.2186 32.594 25.6829C31.748 25.9243 30.2 26.0914 27.824 26.2029C25.484 26.3329 23.342 26.3886 21.362 26.3886L18.5 26.5C10.958 26.5 6.26 26.2029 4.406 25.6829C2.786 25.2186 1.742 24.1414 1.292 22.47C1.058 21.5971 0.896 20.4271 0.788 18.9414C0.662 17.4557 0.608 16.1743 0.608 15.06L0.5 13.5C0.5 9.43286 0.788 6.44286 1.292 4.53C1.742 2.85857 2.786 1.78143 4.406 1.31714C5.252 1.07571 6.8 0.908571 9.176 0.797143C11.516 0.667143 13.658 0.611428 15.638 0.611428L18.5 0.5C26.042 0.5 30.74 0.797143 32.594 1.31714C34.214 1.78143 35.258 2.85857 35.708 4.53Z" fill="black" />
            </svg>
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.9792 23.0417C23.9792 22.5972 23.7708 22.2431 23.3542 21.9792C20.6736 20.3819 17.5694 19.5833 14.0417 19.5833C12.1944 19.5833 10.2014 19.8194 8.0625 20.2917C7.47917 20.4167 7.1875 20.7778 7.1875 21.375C7.1875 21.6528 7.28125 21.8924 7.46875 22.0938C7.65625 22.2951 7.90278 22.3958 8.20833 22.3958C8.27778 22.3958 8.53472 22.3403 8.97917 22.2292C10.8125 21.8542 12.5 21.6667 14.0417 21.6667C17.1806 21.6667 19.9375 22.3819 22.3125 23.8125C22.5764 23.9653 22.8056 24.0417 23 24.0417C23.2639 24.0417 23.4931 23.9479 23.6875 23.7604C23.8819 23.5729 23.9792 23.3333 23.9792 23.0417ZM25.9792 18.5625C25.9792 18.0069 25.7361 17.5833 25.25 17.2917C21.9583 15.3333 18.1528 14.3542 13.8333 14.3542C11.7083 14.3542 9.60417 14.6458 7.52083 15.2292C6.85417 15.4097 6.52083 15.8542 6.52083 16.5625C6.52083 16.9097 6.64236 17.2049 6.88542 17.4479C7.12847 17.691 7.42361 17.8125 7.77083 17.8125C7.86806 17.8125 8.125 17.7569 8.54167 17.6458C10.2361 17.1875 11.9792 16.9583 13.7708 16.9583C17.6458 16.9583 21.0347 17.8194 23.9375 19.5417C24.2708 19.7222 24.5347 19.8125 24.7292 19.8125C25.0764 19.8125 25.3715 19.691 25.6146 19.4479C25.8576 19.2049 25.9792 18.9097 25.9792 18.5625ZM28.2292 13.3958C28.2292 12.7431 27.9514 12.2569 27.3958 11.9375C25.6458 10.9236 23.6111 10.1562 21.2917 9.63542C18.9722 9.11458 16.5903 8.85417 14.1458 8.85417C11.3125 8.85417 8.78472 9.18056 6.5625 9.83333C6.24306 9.93056 5.97569 10.1076 5.76042 10.3646C5.54514 10.6215 5.4375 10.9583 5.4375 11.375C5.4375 11.8056 5.57986 12.1667 5.86458 12.4583C6.14931 12.75 6.50694 12.8958 6.9375 12.8958C7.09028 12.8958 7.36806 12.8403 7.77083 12.7292C9.61806 12.2153 11.75 11.9583 14.1667 11.9583C16.375 11.9583 18.5243 12.1944 20.6146 12.6667C22.7049 13.1389 24.4653 13.7986 25.8958 14.6458C26.1875 14.8125 26.4653 14.8958 26.7292 14.8958C27.1319 14.8958 27.4826 14.7535 27.7812 14.4688C28.0799 14.184 28.2292 13.8264 28.2292 13.3958ZM32.5 16.5C32.5 19.4028 31.7847 22.0799 30.3542 24.5312C28.9236 26.9826 26.9826 28.9236 24.5312 30.3542C22.0799 31.7847 19.4028 32.5 16.5 32.5C13.5972 32.5 10.9201 31.7847 8.46875 30.3542C6.01736 28.9236 4.07639 26.9826 2.64583 24.5312C1.21528 22.0799 0.5 19.4028 0.5 16.5C0.5 13.5972 1.21528 10.9201 2.64583 8.46875C4.07639 6.01736 6.01736 4.07639 8.46875 2.64583C10.9201 1.21528 13.5972 0.5 16.5 0.5C19.4028 0.5 22.0799 1.21528 24.5312 2.64583C26.9826 4.07639 28.9236 6.01736 30.3542 8.46875C31.7847 10.9201 32.5 13.5972 32.5 16.5Z" fill="black" />
            </svg>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.17503 0.500026C6.29776 0.497552 5.42865 0.668517 4.61769 1.00309C3.80672 1.33766 3.06989 1.82925 2.44957 2.44957C1.82925 3.06989 1.33766 3.80672 1.00309 4.61769C0.668517 5.42865 0.497552 6.29776 0.500026 7.17503V23.825C0.497552 24.7023 0.668517 25.5714 1.00309 26.3824C1.33766 27.1933 1.82925 27.9302 2.44957 28.5505C3.06989 29.1708 3.80672 29.6624 4.61769 29.997C5.42865 30.3315 6.29776 30.5025 7.17503 30.5H23.825C24.7023 30.5025 25.5714 30.3315 26.3824 29.997C27.1933 29.6624 27.9302 29.1708 28.5505 28.5505C29.1708 27.9302 29.6624 27.1933 29.997 26.3824C30.3315 25.5714 30.5025 24.7023 30.5 23.825V7.17503C30.5025 6.29776 30.3315 5.42865 29.997 4.61769C29.6624 3.80672 29.1708 3.06989 28.5505 2.44957C27.9302 1.82925 27.1933 1.33766 26.3824 1.00309C25.5714 0.668517 24.7023 0.497552 23.825 0.500026H7.17503ZM15.3285 3.70721C18.2488 3.70721 20.8897 4.83596 22.9025 6.9444C24.4316 8.53159 25.2903 10.2153 25.73 12.4335C25.881 13.1713 25.881 15.1822 25.7385 16.0119C25.2716 18.6501 23.8262 21.0149 21.6913 22.6335C20.93 23.21 19.0691 24.2113 18.771 24.2113C18.6585 24.2113 18.65 24.0988 18.6988 23.6347C18.7916 22.8922 18.8788 22.7413 19.2988 22.565C19.9672 22.2875 21.11 21.471 21.8085 20.7735C23.0295 19.5527 23.8968 18.0238 24.3182 16.3494C24.5816 15.3182 24.5469 13.0278 24.2591 11.9694C23.3507 8.59909 20.5963 5.98346 17.2278 5.2794C16.2519 5.07971 14.4688 5.07971 13.4778 5.2794C10.0691 5.98346 7.24628 8.73221 6.38753 12.1897C6.15784 13.131 6.15784 15.4222 6.38753 16.3597C6.95846 18.65 8.43878 20.7482 10.3766 21.9988C10.7582 22.2528 11.2166 22.5116 11.4078 22.5903C11.8269 22.7703 11.9207 22.9232 11.9975 23.6591C12.0463 24.1138 12.036 24.2403 11.93 24.2403C11.8616 24.2403 11.3488 24.02 10.806 23.7613L10.7572 23.7228C7.66628 22.2041 5.68815 19.6316 4.96628 16.2078C4.79096 15.3238 4.75628 13.22 4.93253 12.4091C5.38159 10.2313 6.24128 8.53253 7.67096 7.02878C9.73253 4.85471 12.3838 3.70721 15.3322 3.70721H15.3285ZM15.5 7.22378C15.9635 7.22267 16.426 7.26663 16.881 7.35503C20.3638 8.13128 22.8285 11.6141 22.3494 15.0697C22.1591 16.4657 21.681 17.6094 20.8316 18.6735C20.4116 19.2107 19.3907 20.1097 19.2107 20.1097C19.1807 20.1097 19.1516 19.7675 19.1516 19.3569V18.5994L19.6691 17.9797C21.6313 15.6313 21.4907 12.35 19.3513 10.2022C18.5216 9.36221 17.5588 8.86815 16.3185 8.64503C15.5188 8.49409 15.3519 8.49409 14.5119 8.63471C13.2332 8.84003 12.246 9.33221 11.3666 10.2022C9.21878 12.3313 9.07628 15.6313 11.0403 17.9797L11.5578 18.5994V19.3616C11.5578 19.7816 11.5232 20.1182 11.4791 20.1182C11.4453 20.1182 11.1519 19.9185 10.8388 19.6691L10.7947 19.6541C9.75503 18.8244 8.83721 17.3544 8.45565 15.9088C8.2269 15.035 8.2269 13.3803 8.46596 12.5103C9.09596 10.1619 10.8294 8.34034 13.2275 7.48628C13.7403 7.30534 14.6422 7.20784 15.4925 7.22284L15.5 7.22378ZM15.3341 10.9588C15.725 10.9588 16.1103 11.0375 16.3944 11.1838C16.9991 11.5016 17.5035 12.111 17.6928 12.756C18.2741 14.7285 16.1844 16.4572 14.2888 15.5732H14.2747C13.3813 15.1578 12.9022 14.3769 12.8919 13.3607C12.8919 12.4428 13.3991 11.6469 14.2832 11.1782C14.5616 11.0319 14.9478 10.9578 15.3378 10.9578L15.3341 10.9588ZM15.3238 16.8725C16.5603 16.8678 17.4528 17.3066 17.7847 18.0828C18.0332 18.6641 17.9413 20.495 17.511 23.4594C17.2232 25.5294 17.0619 26.0516 16.6625 26.4041C16.1103 26.8916 15.3341 27.0294 14.5916 26.765H14.5878C13.6944 26.4425 13.5032 26.0075 13.1319 23.4585C12.7082 20.495 12.6144 18.6632 12.8647 18.0819C13.191 17.3103 14.0797 16.8772 15.3247 16.8716L15.3238 16.8725Z" fill="black" />
            </svg>
          </div>
        </div>
        <!--Sland banner-->
      <div class="ad-container">
        <div class="ad-1">
          <div class="ad-dot"></div>
          <p>NEW</p>
        </div>
        <div class="ad-2">
          <div class="ad-dot"></div>
          <p>NEW</p>
        </div>
        <div class="ad-3">
          <div class="ad-dot"></div>
          <p>NEW</p>
        </div>
        <div class="ad-4">
          <div class="ad-dot"></div>
          <p>NEW</p>
        </div>
        <div class="ad-5">
          <div class="ad-dot"></div>
          <p>NEW</p>
        </div>
        <div class="ad-6">
          <div class="ad-dot"></div>
          <p>NEW</p>
        </div>
      </div>
      <!--End of slant banner-->
      </div>`;
  });
  newdisplay = newMenu.join("");
  episodesCenter.innerHTML = newdisplay;
}

// const mythContainer = document.querySelector("myth-item-container");

// function getMyths(newMyths) {
//   const eachMyths = (myths.map = (item) => {
//     return `<div class="myths-item1">
//                     <h3>${myths.mythsItems}</h3>
//                 </div>`;
//   });
//   newEachMyths = eachMyths.join("");
//   mythContainer.innerHTML = newEachMyths;
// }

function getoldEpisodes(oldepisodesItems) {
  const newOldEpisodes = oldepisodesItems.map(function (item) {
    return `<div class="old-epispde-container">
      <div class="oldepisode-img-container">
        <img src=${item.img} alt="">
      </div>
      <div class="oldepisode-content">
        <h2>${item.header}</h2>
        <p>${item.text}</p>
        <div class="episode-social-container">
          <svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4 19.0714L23.742 13.5L14.4 7.92857V19.0714ZM35.208 4.53C35.442 5.40286 35.604 6.57286 35.712 8.05857C35.838 9.54428 35.892 10.8257 35.892 11.94L36 13.5C36 17.5671 35.712 20.5571 35.208 22.47C34.758 24.1414 33.714 25.2186 32.094 25.6829C31.248 25.9243 29.7 26.0914 27.324 26.2029C24.984 26.3329 22.842 26.3886 20.862 26.3886L18 26.5C10.458 26.5 5.76 26.2029 3.906 25.6829C2.286 25.2186 1.242 24.1414 0.792 22.47C0.558 21.5971 0.396 20.4271 0.288 18.9414C0.162 17.4557 0.108 16.1743 0.108 15.06L0 13.5C0 9.43286 0.288 6.44286 0.792 4.53C1.242 2.85857 2.286 1.78143 3.906 1.31714C4.752 1.07571 6.3 0.908571 8.676 0.797143C11.016 0.667143 13.158 0.611428 15.138 0.611428L18 0.5C25.542 0.5 30.24 0.797143 32.094 1.31714C33.714 1.78143 34.758 2.85857 35.208 4.53Z" fill="#AAB91E" />
          </svg>
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.4792 23.0417C23.4792 22.5972 23.2708 22.2431 22.8542 21.9792C20.1736 20.3819 17.0694 19.5833 13.5417 19.5833C11.6944 19.5833 9.70139 19.8194 7.5625 20.2917C6.97917 20.4167 6.6875 20.7778 6.6875 21.375C6.6875 21.6528 6.78125 21.8924 6.96875 22.0938C7.15625 22.2951 7.40278 22.3958 7.70833 22.3958C7.77778 22.3958 8.03472 22.3403 8.47917 22.2292C10.3125 21.8542 12 21.6667 13.5417 21.6667C16.6806 21.6667 19.4375 22.3819 21.8125 23.8125C22.0764 23.9653 22.3056 24.0417 22.5 24.0417C22.7639 24.0417 22.9931 23.9479 23.1875 23.7604C23.3819 23.5729 23.4792 23.3333 23.4792 23.0417ZM25.4792 18.5625C25.4792 18.0069 25.2361 17.5833 24.75 17.2917C21.4583 15.3333 17.6528 14.3542 13.3333 14.3542C11.2083 14.3542 9.10417 14.6458 7.02083 15.2292C6.35417 15.4097 6.02083 15.8542 6.02083 16.5625C6.02083 16.9097 6.14236 17.2049 6.38542 17.4479C6.62847 17.691 6.92361 17.8125 7.27083 17.8125C7.36806 17.8125 7.625 17.7569 8.04167 17.6458C9.73611 17.1875 11.4792 16.9583 13.2708 16.9583C17.1458 16.9583 20.5347 17.8194 23.4375 19.5417C23.7708 19.7222 24.0347 19.8125 24.2292 19.8125C24.5764 19.8125 24.8715 19.691 25.1146 19.4479C25.3576 19.2049 25.4792 18.9097 25.4792 18.5625ZM27.7292 13.3958C27.7292 12.7431 27.4514 12.2569 26.8958 11.9375C25.1458 10.9236 23.1111 10.1563 20.7917 9.63542C18.4722 9.11458 16.0903 8.85417 13.6458 8.85417C10.8125 8.85417 8.28472 9.18056 6.0625 9.83333C5.74306 9.93056 5.47569 10.1076 5.26042 10.3646C5.04514 10.6215 4.9375 10.9583 4.9375 11.375C4.9375 11.8056 5.07986 12.1667 5.36458 12.4583C5.64931 12.75 6.00694 12.8958 6.4375 12.8958C6.59028 12.8958 6.86806 12.8403 7.27083 12.7292C9.11806 12.2153 11.25 11.9583 13.6667 11.9583C15.875 11.9583 18.0243 12.1944 20.1146 12.6667C22.2049 13.1389 23.9653 13.7986 25.3958 14.6458C25.6875 14.8125 25.9653 14.8958 26.2292 14.8958C26.6319 14.8958 26.9826 14.7535 27.2813 14.4688C27.5799 14.184 27.7292 13.8264 27.7292 13.3958ZM32 16.5C32 19.4028 31.2847 22.0799 29.8542 24.5313C28.4236 26.9826 26.4826 28.9236 24.0313 30.3542C21.5799 31.7847 18.9028 32.5 16 32.5C13.0972 32.5 10.4201 31.7847 7.96875 30.3542C5.51736 28.9236 3.57639 26.9826 2.14583 24.5313C0.715278 22.0799 0 19.4028 0 16.5C0 13.5972 0.715278 10.9201 2.14583 8.46875C3.57639 6.01736 5.51736 4.07639 7.96875 2.64583C10.4201 1.21528 13.0972 0.5 16 0.5C18.9028 0.5 21.5799 1.21528 24.0313 2.64583C26.4826 4.07639 28.4236 6.01736 29.8542 8.46875C31.2847 10.9201 32 13.5972 32 16.5Z" fill="#AAB91E" />
          </svg>
          <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_16_722)">
              <rect y="0.5" width="30" height="30" rx="15" fill="black" />
              <path d="M6.67503 0.500026C5.79776 0.497552 4.92865 0.668517 4.11769 1.00309C3.30672 1.33766 2.56989 1.82925 1.94957 2.44957C1.32925 3.06989 0.837664 3.80672 0.50309 4.61769C0.168517 5.42865 -0.00244819 6.29776 2.64855e-05 7.17503V23.825C-0.00244819 24.7023 0.168517 25.5714 0.50309 26.3824C0.837664 27.1933 1.32925 27.9302 1.94957 28.5505C2.56989 29.1708 3.30672 29.6624 4.11769 29.997C4.92865 30.3315 5.79776 30.5025 6.67503 30.5H23.325C24.2023 30.5025 25.0714 30.3315 25.8824 29.997C26.6933 29.6624 27.4302 29.1708 28.0505 28.5505C28.6708 27.9302 29.1624 27.1933 29.497 26.3824C29.8315 25.5714 30.0025 24.7023 30 23.825V7.17503C30.0025 6.29776 29.8315 5.42865 29.497 4.61769C29.1624 3.80672 28.6708 3.06989 28.0505 2.44957C27.4302 1.82925 26.6933 1.33766 25.8824 1.00309C25.0714 0.668517 24.2023 0.497552 23.325 0.500026H6.67503ZM14.8285 3.70721C17.7488 3.70721 20.3897 4.83596 22.4025 6.9444C23.9316 8.53159 24.7903 10.2153 25.23 12.4335C25.381 13.1713 25.381 15.1822 25.2385 16.0119C24.7716 18.6501 23.3262 21.0149 21.1913 22.6335C20.43 23.21 18.5691 24.2113 18.271 24.2113C18.1585 24.2113 18.15 24.0988 18.1988 23.6347C18.2916 22.8922 18.3788 22.7413 18.7988 22.565C19.4672 22.2875 20.61 21.471 21.3085 20.7735C22.5295 19.5527 23.3968 18.0238 23.8182 16.3494C24.0816 15.3182 24.0469 13.0278 23.7591 11.9694C22.8507 8.59909 20.0963 5.98346 16.7278 5.2794C15.7519 5.07971 13.9688 5.07971 12.9778 5.2794C9.56909 5.98346 6.74628 8.73221 5.88753 12.1897C5.65784 13.131 5.65784 15.4222 5.88753 16.3597C6.45846 18.65 7.93878 20.7482 9.87659 21.9988C10.2582 22.2528 10.7166 22.5116 10.9078 22.5903C11.3269 22.7703 11.4207 22.9232 11.4975 23.6591C11.5463 24.1138 11.536 24.2403 11.43 24.2403C11.3616 24.2403 10.8488 24.02 10.306 23.7613L10.2572 23.7228C7.16628 22.2041 5.18815 19.6316 4.46628 16.2078C4.29096 15.3238 4.25628 13.22 4.43253 12.4091C4.88159 10.2313 5.74128 8.53253 7.17096 7.02878C9.23253 4.85471 11.8838 3.70721 14.8322 3.70721H14.8285ZM15 7.22378C15.4635 7.22267 15.926 7.26663 16.381 7.35503C19.8638 8.13128 22.3285 11.6141 21.8494 15.0697C21.6591 16.4657 21.181 17.6094 20.3316 18.6735C19.9116 19.2107 18.8907 20.1097 18.7107 20.1097C18.6807 20.1097 18.6516 19.7675 18.6516 19.3569V18.5994L19.1691 17.9797C21.1313 15.6313 20.9907 12.35 18.8513 10.2022C18.0216 9.36221 17.0588 8.86815 15.8185 8.64503C15.0188 8.49409 14.8519 8.49409 14.0119 8.63471C12.7332 8.84003 11.746 9.33221 10.8666 10.2022C8.71878 12.3313 8.57628 15.6313 10.5403 17.9797L11.0578 18.5994V19.3616C11.0578 19.7816 11.0232 20.1182 10.9791 20.1182C10.9453 20.1182 10.6519 19.9185 10.3388 19.6691L10.2947 19.6541C9.25503 18.8244 8.33721 17.3544 7.95565 15.9088C7.7269 15.035 7.7269 13.3803 7.96596 12.5103C8.59596 10.1619 10.3294 8.34034 12.7275 7.48628C13.2403 7.30534 14.1422 7.20784 14.9925 7.22284L15 7.22378ZM14.8341 10.9588C15.225 10.9588 15.6103 11.0375 15.8944 11.1838C16.4991 11.5016 17.0035 12.111 17.1928 12.756C17.7741 14.7285 15.6844 16.4572 13.7888 15.5732H13.7747C12.8813 15.1578 12.4022 14.3769 12.3919 13.3607C12.3919 12.4428 12.8991 11.6469 13.7832 11.1782C14.0616 11.0319 14.4478 10.9578 14.8378 10.9578L14.8341 10.9588ZM14.8238 16.8725C16.0603 16.8678 16.9528 17.3066 17.2847 18.0828C17.5332 18.6641 17.4413 20.495 17.011 23.4594C16.7232 25.5294 16.5619 26.0516 16.1625 26.4041C15.6103 26.8916 14.8341 27.0294 14.0916 26.765H14.0878C13.1944 26.4425 13.0032 26.0075 12.6319 23.4585C12.2082 20.495 12.1144 18.6632 12.3647 18.0819C12.691 17.3103 13.5797 16.8772 14.8247 16.8716L14.8238 16.8725Z" fill="#AAB91E" />
            </g>
            <defs>
              <clipPath id="clip0_16_722">
                <rect y="0.5" width="30" height="30" rx="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
     </div>`;
  });
  newdisplayEpisode = newOldEpisodes.join("");
  oldEpisode.innerHTML = newdisplayEpisode;
}

// Guest js
const guestContainer = document.querySelector(".max-img-container");
window.addEventListener("DOMContentLoaded", function () {
  getGuest(guest);
});

function getGuest(newguestItem) {
  const newGuest = newguestItem.map(function (item) {
    return `<div class="img-container-1">
                  <img src=${item.img} alt="">
                  <div class="guest-id">
                  <h3>${item.name}</h3>
                  <p>${item.brand}</p>
                  </div>
                </div>`;
  });
  newdisplayGuest = newGuest.join("");
  guestContainer.innerHTML = newdisplayGuest;
}

// // FAQ Section

// const faqQuestion = document.querySelectorAll(".faq-question");

// faqQuestion.forEach(function (question) {
//   const faqBtn = question.querySelector(".faq-btn");

//   faqBtn.addEventListener("click", function (e) {
//     const newQuestion = e.currenTarget;
//   });
// });

// console.log("work");
