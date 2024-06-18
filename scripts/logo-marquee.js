const logosContainer = document.querySelector("#infinit-logo ul");

const infinitScroll = async (logosContainer) => {
  const logosCount = logosContainer.children.length;
  const { clientHeight } = logosContainer.children[0];
  let i = 0;
  let isReversed = false;
  while (true) {
    if (i === 0 && isReversed) {
      isReversed = false;
    }
    if (i == logosCount - 1 && !isReversed) {
      isReversed = true;
    }
    await new Promise((res, rej) => {
      setTimeout(() => {
        return res(true);
      }, 2000);
    }).then((data) => {
      logosContainer.style.transform = `translateY(${
        (-i % logosCount) * clientHeight
      }px)`;
    });
    if (!isReversed) {
      i++;
    } else {
      i--;
    }
  }
};

infinitScroll(logosContainer);
