// toggle menu bar
const sidebar = document.querySelector("#side_nav_container");
const sidebarMenuButton = document.querySelector("#sidebar-menu");
const sidebarCrossButton = document.querySelector("#sidebar-cross-btn");
const sidebarOutbox = document.querySelector(".sidebar-outbox");
// console.log(sidebarCrossButton);
const sidebarMenuItems = document.querySelector(".sidebar__menu-items");
// menu button on click
sidebarMenuButton.addEventListener("click", function () {
  sidebarMenuItems.classList.toggle("active");
  sidebar.classList.toggle("active");
  sidebarOutbox.style.display = "block";

  console.log(sidebarMenuItems.className);
});
// cross button on click
sidebarCrossButton.addEventListener("click", function () {
  sidebarMenuItems.classList.toggle("active");
  sidebar.classList.toggle("active");
  sidebarOutbox.style.display = "none";
});
