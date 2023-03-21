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

//closses sidebar modal
const closeSideBarModal = (event) => {
  if (event.target.classList.contains("sidebar-outbox")) {
    sidebarOutbox.style.display = "none";
    sidebar.classList.toggle("active");
  }
};
sidebarOutbox.addEventListener("click", closeSideBarModal);

// menu items header text
const menuHeaderList = document.querySelectorAll(".menu-tabs-header-text");
const weekdayLunch = document.querySelector("#weekday_lunch");
const weekdayLunchDishes = document.querySelector("#weekday_lunch-dishes");
const dinner = document.querySelector("#dinner");
const dinnerDishes = document.querySelector("#dinner-dishes");
console.log(1, weekdayLunch);

// remove active class from menu items
const removeActiveItem = () => {
  menuHeaderList.forEach((item) => {
    item.classList.remove("active");
  });
};

// MENU HEADER ADD ACTIVE ITEMS
menuHeaderList.forEach((item) => {
  console.log(item);

  item.addEventListener("click", () => {
    removeActiveItem();
    item.classList.add("active");
    console.log(item.id);
    if (item.id == "weekday_lunch") {
      weekdayLunchDishes.style.display = "flex";
      dinnerDishes.style.display = "none";
    } else if (item.id == "dinner") {
      console.log(item.id);
      weekdayLunchDishes.style.display = "none";
      dinnerDishes.style.display = "flex";
    } else console.log("paynai");
  });
});

// // menu header icons rotaion
const menuHeaderIcons = document.querySelectorAll(".menu-tabs-header-icon");
var root = document.querySelector(":root");
var i = 0;
console.log(menuHeaderIcons);
function rotateIcons() {
  setInterval(() => {
    // menuHeaderIcons.style.transform = "rotate(45deg)";
    root.style.setProperty("--menu_header-icons-tranform-deg", i + "deg");
    i += 5;
    // console.log(i);
  }, 100);
}
rotateIcons();

// show Dish details
function showDishDetails() {
  window.location.href = "/viewDetailsDishPage.html";
}

// serve count
const serveCount = document.querySelector(".count-number");
var servingCounter = 0;
function serveCountMinus() {
  if (servingCounter > 0) {
    servingCounter--;
  }

  console.log(servingCounter);
  serveCount.innerHTML = servingCounter;
}
function serveCountPlus() {
  servingCounter++;
  console.log(servingCounter);
  serveCount.innerHTML = servingCounter;
}

// show add to cart count
const addedToCart = document.querySelector(".added_items-count");
var addedToCartCounter = 0;
function addToCart() {
  addedToCartCounter++;
  addedToCart.innerHTML = addedToCartCounter;
}

// customized modal
// order
const customize = document.querySelector("#customize");
const orderModal = document.querySelector(".customize-order");
// order customization

//opens modal

const openOrderModal = () => {
  orderModal.style.display = "grid";
};
customize.addEventListener("click", openOrderModal);
//closses modal
const closeOrderModal = (event) => {
  if (event.target.classList.contains("customize-order")) {
    orderModal.style.display = "none";
  }
};
orderModal.addEventListener("click", closeOrderModal);

const SidebarMenuArray = [];
// Fetchhing Sidebar items from API

fetch("http://192.168.2.102:85/GetAllSidebarItems")
  .then((response) => response.json())
  .then((data) => {
    // console.log("All Data");
    // console.log(data);
    // creating object from fetched data
    // data.forEach((item) => {
    //   const obj = {};
    //   obj.MenuID = item.sidebar_item_id;
    //   obj.MenuName = item.sidebar_item_name;
    //   obj.ParentID = item.sidebar_item_parent_id;
    //   obj.Destination = item.sidebar_item_destination;

    //   // pushing objects to array
    //   SidebarMenuArray.push(obj);
    //   console.log(SidebarMenuArray);
    // });
    data.forEach((item) => {
      const obj = {
        MenuID: item.sidebar_item_id,
        MenuName: item.sidebar_item_name,
        ParentID: item.sidebar_item_parent_id,
        Destination: item.sidebar_item_destination,
      };
      // pushing objects to array
      SidebarMenuArray.push(obj);
    });

    console.log("Array");
    console.log(SidebarMenuArray);

    displaySidebarMenuItems();
    // data1();
  })
  .catch((error) => {
    console.error("Error fetching sidebar items:", error);
  });

function displaySidebarMenuItems() {
  const menuItems = document.querySelector(".sidebar__menu-items");
  // icons classlist
  const squareIconClassList = "sidebar_square-icon fa-regular fa-square-full";
  const chevrondownIconClassList = "fa-solid fa-chevron-down";

  // console.log(menuItems);
  let sidebarDelimiter = document.createElement("div");
  sidebarDelimiter.classList = "sidebar_delimiter";
  menuItems.appendChild(sidebarDelimiter);
  for (let i = 0; i < SidebarMenuArray.length; i++) {
    console.log("i: " + i);
    console.log("menuId:" + SidebarMenuArray[i].MenuID);
    console.log("Parent:" + SidebarMenuArray[i].ParentID);
    let menuItem = document.createElement("div");
    menuItem.classList = "sidebar_menu-item";
    let parentMenuItem = document.createElement("div");
    parentMenuItem.classList = "parent-sidebar_menu";
    let menuHeader = document.createElement("div");
    menuHeader.classList = "menu_header";
    let squareIcon = document.createElement("i");
    squareIcon.classList = squareIconClassList;
    let menuHeaderTitle = document.createElement("h6");
    let chevronDiv = document.createElement("div");
    chevronDiv.classList = "chevron-down-icon";
    let chevronIcon = document.createElement("i");
    chevronIcon.classList = chevrondownIconClassList;
    let sidebarDelimiter = document.createElement("div");
    sidebarDelimiter.classList = "sidebar_delimiter";
    menuHeaderTitle.innerText = SidebarMenuArray[i].MenuName;
    menuHeader.appendChild(squareIcon);
    menuHeader.appendChild(menuHeaderTitle);
    chevronDiv.appendChild(chevronIcon);
    parentMenuItem.appendChild(menuHeader);
    parentMenuItem.appendChild(chevronDiv);
    menuItem.appendChild(parentMenuItem);
    // console.log(menuItem);
    menuItems.appendChild(sidebarDelimiter);
    // console.log(menuItems);
    // child loop
    for (var j = i + 1; j < SidebarMenuArray.length; j++) {
      let childMenuItem = document.createElement("div");
      childMenuItem.classList = "child-sidebar_menu";
      if (SidebarMenuArray[i].MenuID == SidebarMenuArray[j].ParentID) {
        let menuHeader = document.createElement("div");
        menuHeader.classList = "menu_header";
        let squareIcon = document.createElement("i");
        squareIcon.classList = squareIconClassList;
        let menuHeaderTitle = document.createElement("h6");
        let chevronDiv = document.createElement("div");
        chevronDiv.classList = "chevron-down-icon";
        let chevronIcon = document.createElement("i");
        chevronIcon.classList = chevrondownIconClassList;
        let sidebarDelimiter = document.createElement("div");
        sidebarDelimiter.classList = "sidebar_delimiter";
        menuHeaderTitle.innerText = SidebarMenuArray[j].MenuName;
        menuHeader.appendChild(squareIcon);
        menuHeader.appendChild(menuHeaderTitle);
        childMenuItem.appendChild(menuHeader);
        chevronDiv.appendChild(chevronIcon);
        childMenuItem.appendChild(chevronDiv);
      }
      // menuItems.appendChild(sidebarDelimiter);
      parentMenuItem.appendChild(childMenuItem);
    }
    menuItems.appendChild(menuItem);
  }
}
const DishItemsArray = [];

// Fetchhing dish items from API
fetch("http://192.168.2.102:85/GetAllDishItems")
  .then((response) => response.json())
  .then((data) => {
    // console.log("All Data");
    // console.log(data);
    // creating object from fetched data
    data.forEach((item) => {
      const obj = { ...item }; // spread operator (...)
      // pushing objects to array
      DishItemsArray.push(obj);
    });
    // console.log("Array");
    // console.log(DishItemsArray);
  });
