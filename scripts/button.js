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
