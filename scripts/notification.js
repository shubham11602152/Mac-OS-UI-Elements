const notificationBtn = document.querySelector(".notification-btn");
const notificationContainer = document.querySelector(".notification__wrapper");

notificationBtn.addEventListener("click", addNotification);

function addNotification(title = "Hey", body = "Will call you in some time.") {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  const notificationIcon = document.createElement("div");
  notificationIcon.classList.add("notification__icon");
  const notificationContent = document.createElement("div");
  notificationContent.classList.add("notification__content");
  const notificationHeader = document.createElement("div");
  notificationHeader.classList.add("notification__header");
  const notificationTitle = document.createElement("div");
  notificationTitle.classList.add("notification__title");
  notificationTitle.innerText = title;
  notificationHeader.appendChild(notificationTitle);

  const notificationDescription = document.createElement("div");
  notificationDescription.classList.add("notification__description");
  notificationDescription.innerText = body;

  notification.appendChild(notificationIcon);
  notification.appendChild(notificationHeader);
  notification.appendChild(notificationDescription);
  notificationContainer.appendChild(notification);
}
