const container = document.querySelector(".container");
const leftParagraph = document.querySelector(".left-paragraphs .first");
const secondLeftParagraph = document.querySelector(".left-paragraphs .second");
const firstImage = document.querySelector(".middle-content #image1");
const secondImage = document.querySelector(".middle-content #image2");
const rightParagraph = document.querySelector(".right-paragraph");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: "300% top",
    markers: false,
    scrub: true,
  },
});

let mm = gsap.matchMedia();
mm.add("(min-width: 800px)", () => {
  tl.fromTo(
    leftParagraph,
    {
      y: 150,
      opacity: 0,
    },
    {
      y: -50,
      opacity: 1,
    }
  );

  tl.to(
    leftParagraph,
    {
      y: -250,
      opacity: 0,
    },
    ">"
  );
  tl.fromTo(
    secondLeftParagraph,
    {
      y: -100,
      opacity: 0,
    },
    {
      y: -250,
      opacity: 1,
    },
    ">"
  );
  tl.to(
    secondLeftParagraph,
    {
      y: -500,
      opacity: 0,
    },
    ">"
  );

  tl.to(
    firstImage,
    {
      opacity: 0,
    },
    "<"
  );

  tl.fromTo(
    secondImage,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    "<50%"
  );

  tl.fromTo(
    rightParagraph,
    {
      y: 0,
      opacity: 0,
    },
    {
      y: -150,
      opacity: 1,
    },
    "<"
  );

  tl.to(
    secondImage,
    {
      opacity: 0,
    },
    ">"
  );

  tl.to(
    rightParagraph,
    {
      opacity: 0,
      y: -300,
    },
    "<"
  );
  tl.from();
});
