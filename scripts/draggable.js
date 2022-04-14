// target elements with the "draggable" class
interact(".draggable").draggable({
  // enable inertial throwing
  inertia: {
    resistance: 15,
    minSpeed: 80,
    endSpeed: 20,
  },
  // keep the element within the area of it's parent
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent',
      endOnly: true,
    })
  ],

  // call this function on every dragmove event
  onmove: dragMoveListener,
  // call this function on every dragend event
  // onend: function (event) {
  //   var textEl = event.target.querySelector("p");

  //   textEl &&
  //     (textEl.textContent =
  //       "moved a distance of " +
  //       (Math.sqrt(event.dx * event.dx + event.dy * event.dy) | 0) +
  //       "px");
  // },
});

function dragMoveListener(event) {
  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
    y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform =
    "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

// this is used later in the resizing demo
window.dragMoveListener = dragMoveListener;

//draggable-switch
interact(".draggable").on("doubletap", function (event) {
  event.currentTarget.classList.toggle("switch-bg");
  event.preventDefault();
});
