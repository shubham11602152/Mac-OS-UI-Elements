import { debounce } from "./utilities.js";

function setAccordionMaxHeight() {
  let ACCORDION_CONTENT = document.querySelectorAll(
    ".accordions .accordion-content-wrapper"
  );

  for (let wrapper of ACCORDION_CONTENT) {
    const { clientHeight } = wrapper.querySelector(".accordion-content");
    const duration = (clientHeight * 0.2) / 50;
    wrapper.style.setProperty("--transition-duration", `${duration}s`);
    wrapper.style.setProperty("--max-height", `${clientHeight}px`);
  }

  ACCORDION_CONTENT = document.querySelectorAll(".accordion-tray");

  for (let wrapper of ACCORDION_CONTENT) {
    const { clientHeight } = wrapper.querySelector(".accordion-content");
    const duration = (clientHeight * 0.2) / 50;
    wrapper.style.setProperty("--transition-duration", `${duration}s`);
    wrapper.style.setProperty("--max-height", `${clientHeight}px`);
  }
}

window.onload = () => {
  const debouncedSetMaxHeight = debounce(() => setAccordionMaxHeight(), 2000);
  setAccordionMaxHeight();

  //* Toggle accordion icon based on expanded/collapsed state.
  document.querySelectorAll(".accordion-item").forEach((accordion) => {
    accordion.addEventListener("change", function () {
      console.log({
        this: this,
        accordion,
      });
      // Find the animations in the SVG
      const expandAnimation = accordion.querySelector("#expand-animation");
      const collapseAnimation = accordion.querySelector("#collapse-animation");

      console.log({
        this: this,
        expandAnimation,
        collapseAnimation,
        accordion,
      });

      // If checked, trigger expand, otherwise trigger collapse
      if (this.checked) {
        collapseAnimation.beginElement();
      } else {
        expandAnimation.beginElement();
      }
    });
  });

  // INFO : Added debounce on screen resize and recalculating accordion content max-height.
  window.onresize = () => {
    debouncedSetMaxHeight();
  };
};

// let newX = 0,
//   newY = 0,
//   startX = 0,
//   startY = 0;

// const card = document.querySelector("[data-draggable='true']");

// card.addEventListener("mousedown", mouseDown);

// function mouseDown(e) {
//   console.log({ e });
//   startX = e.clientX;
//   startY = e.clientY;

//   document.addEventListener("mousemove", mouseMove);
//   document.addEventListener("mouseup", mouseUp);
// }

// function mouseMove(e) {
//   newX = startX - e.clientX;
//   newY = startY - e.clientY;

//   startX = e.clientX;
//   startY = e.clientY;

//   card.style.left = `${card.offsetLeft - newX}px`;
//   card.style.top = `${card.offsetTop - newY}px`;
// }

// function mouseUp() {
//   document.removeEventListener("mousemove", mouseMove);
// }

// let yDragValue = 0;
// let isDragging = false;
// let initialDragClientY = 0;
// const draggableElement = document.querySelector(".draggable-card");
// const draggableThumbEl = document.querySelector(".draggable-thumb-wrapper");

// draggableThumbEl.addEventListener("touchstart", startDraggingHandler);
// draggableThumbEl.addEventListener("touchmove", draggingHandler);
// draggableThumbEl.addEventListener("touchend", stopDraggingHandler);
// function startDraggingHandler(event) {
//   isDragging = true;
//   const { clientY } = event.touches[0];
//   initialDragClientY = clientY;
// }
// function draggingHandler(event) {
//   if (!isDragging) return;
//   const { clientY } = event.touches[0];
//   yDragValue = clientY - initialDragClientY;
//   draggableElement.style.transform = `translateY(${yDragValue}px)`;

//   console.log(event);
// }
// function stopDraggingHandler(event) {
//   if (!isDragging) return;
//   const { clientY } = event.changedTouches[0];
//   isDragging = false;
// }

// ! Scrolls the accordion into view after expanding.
// const accordionItems = document.querySelectorAll(".accordion-item");

// for (let item of accordionItems) {
//   item.addEventListener("click", (e) =>
//     setTimeout(
//       () =>
//         e.target.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         }),
//       1000
//     )
//   );
// }

const BUTTONS = document.querySelectorAll('button[data-type="hold"]');
for (let btn of BUTTONS) {
  let isHold = false;
  // const bg = document.createElement("div");
  // bg.classList.add("progress");
  btn.addEventListener("pointerdown", (e) => {
    btn.classList.add("progress");

    isHold = true;
    btn.appendChild(bg);
    // while (isHold) {
    console.log("hold", btn.style.scale);

    // btn.style.scale = `${btn.style.scale + 0.01}`;
    // }
  });
  btn.addEventListener("pointerup", (e) => {
    isHold = false;
    // btn.removeChild(bg);
    btn.classList.remove("progress");
  });
}
