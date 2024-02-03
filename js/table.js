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
