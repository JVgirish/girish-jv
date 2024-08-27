// Function to wrap text content in two spans for animation purposes
function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    // Create parent and child span elements
    var parent = document.createElement("span");
    var child = document.createElement("span");

    // Assign classes to the spans
    parent.classList.add("parent");
    child.classList.add("child");

    // Set text content of child span and append to parent span
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    // Clear original element's content and append the parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

// Execute the function to prepare elements for animation
revealToSpan();

var tl = gsap.timeline();

// GSAP animation to move child spans upwards with a smooth easing effect
tl
.from(".child .span", {
  x: 100,
  duration: 2,
  delay: 1,
  stagger: .2,
  ease: Power3.ease
})
.to(".parent .child", {
  y: "-100%",
  duration: 1,
  ease: "Circ.inOut" // Correctly referenced ease function
});
