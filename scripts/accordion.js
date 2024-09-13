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

  // INFO : Added debounce on screen resize and recalculating accordion content max-height.
  window.onresize = () => {
    debouncedSetMaxHeight();
  };
};
