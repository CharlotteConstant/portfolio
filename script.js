"use strict";

//header animation
$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});

// animation au scroll
const sr = ScrollReveal({
  reset: false,
  mobile: false,
});

sr.reveal(".logocharlotte", {
  rotate: {
    x: 0,
    y: 90,
    z: 0,
  },
  duration: 1500,
});

sr.reveal(".photoInfo", {
  origin: "left",
  distance: "300px",
  duration: 2000,
});

sr.reveal(".btn", {
  rotate: {
    x: 90,
    y: 0,
    z: 0,
  },
  duration: 1500,
  interval: 500,
});

sr.reveal(".emploi1", {
  origin: "left",
  distance: "170px",
  duration: 2000,
  delay: 500,
});

sr.reveal(
  ".emploi2",
  {
    origin: "right",
    distance: "170px",
    duration: 2000,
    delay: 500,
  },
  200
);

sr.reveal(
  ".emploi3",
  {
    origin: "left",
    distance: "170px",
    duration: 2000,
    delay: 500,
  },
  200
);

sr.reveal(".card", {
  delay: 500,
  interval: 400,
});
