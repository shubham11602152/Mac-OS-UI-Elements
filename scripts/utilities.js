export const debounce = (callback, delay) => {
  let timerId = null;

  return () => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay);
  };
};
