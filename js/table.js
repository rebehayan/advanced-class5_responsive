// const tableWrap = $(".table-wrap");

// tableWrap.on("click", function () {
//   $(this).addClass("--active");
// });

// function(){} === ()=>{}

const tableWrap = document.querySelector(".table-wrap");

tableWrap.addEventListener("click", (e) => {
  const thisEl = e.target;
  thisEl.classList.add("--active");
});

// GNB
// const gnbToggle = $(".btn-sitemap");
// const gnb = $(".gnb");
// const body = $("body");
// const searchBtn = $(".btn-search");

// gnbToggle.on("click", function () {
//   const windowWidth = $(window).width();

//   if (windowWidth < 900) {
//     $(this).toggleClass("--active");
//     gnb.toggleClass("--active");
//     searchBtn.toggleClass("--active");
//     body.toggleClass("--hidden");
//   }
// });

// $(window).on("resize", function () {
//   const windowWidth = $(this).width();
//   // console.log(windowWidth);
//   if (windowWidth >= 900) {
//     gnbToggle.removeClass("--active");
//     gnb.removeClass("--active");
//     searchBtn.removeClass("--active");
//     body.removeClass("--hidden");
//   }
// });

const gnbToggle = document.querySelector(".btn-sitemap");
const gnb = document.querySelector(".gnb");
const body = document.querySelector("body");
const searchBtn = document.querySelector(".btn-search");

gnbToggle.addEventListener("click", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth < 900) {
    gnbToggle.classList.toggle("--active");
    gnb.classList.toggle("--active");
    searchBtn.classList.toggle("--active");
    body.classList.toggle("--hidden");
  }
});
window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 900) {
    gnbToggle.classList.remove("--active");
    gnb.classList.remove("--active");
    searchBtn.classList.remove("--active");
    body.classList.remove("--hidden");
  }
});
