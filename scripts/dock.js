const dockRef = document.querySelector("#dock");
const dockItemsRef = dockRef.querySelector("ul").children;
const maxAdditionalSize = 5;

const handleAppHover = (e) => {
  if (!e.currentTarget) return;

  const mousePosition = e.clientX;
  const iconPositionLeft = e.currentTarget.getBoundingClientRect().left;
  const iconWidth = e.currentTarget.getBoundingClientRect().width;

  const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
  const offsetPixels = scaleValue(
    cursorDistance,
    [0, 1],
    [maxAdditionalSize * -1, maxAdditionalSize]
  );

  dockRef.style.setProperty("--dock-offset-left", `${offsetPixels * -1}px`);

  dockRef.style.setProperty("--dock-offset-right", `${offsetPixels}px`);
};

for (let items of dockItemsRef) {
  items.addEventListener("mousemove", handleAppHover);
}

const scaleValue = (value, from, to) => {
  const scale = (to[1] - to[0]) / (from[1] - from[0]);
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
  return Math.floor(capped * scale + to[0]);
};
