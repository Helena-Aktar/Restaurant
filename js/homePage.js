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

  // console.log(sidebarMenuItems.className);
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

function menuHeaderActive() {
  // menu items header text
  const menuHeaderList = document.querySelectorAll(".menu-tabs-header-text");
  const weekdayLunch = document.querySelector("#lunch");
  const weekdayLunchDishes = document.querySelector("#lunch-dishes");
  const dinner = document.querySelector("#dinner");
  const dinnerDishes = document.querySelector("#dinner-dishes");
  console.log(1, weekdayLunch);

  // remove active class from menu items
  const removeActiveMenuItem = () => {
    menuHeaderList.forEach((item) => {
      item.classList.remove("active");
    });
  };

  // MENU HEADER ADD ACTIVE ITEMS
  menuHeaderList.forEach((item) => {
    console.log(item);

    item.addEventListener("click", () => {
      removeActiveMenuItem();
      item.classList.add("active");
      console.log(item.id);
      if (item.id == "lunch") {
        weekdayLunchDishes.style.display = "flex";
        dinnerDishes.style.display = "none";
      } else if (item.id == "dinner") {
        console.log(item.id);
        weekdayLunchDishes.style.display = "none";
        dinnerDishes.style.display = "flex";
        console.log(dinnerDishes.style.display);
      } else console.log("paynai");
    });
  });
}

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
const customize = document.querySelector("#customizee");
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

// Fetchhing Sidebar items from json

fetch("/sidebarData.json")
  .then((response) => response.json())
  .then((data) => {
    // Fetchhing Sidebar items from API
    // fetch("http://192.168.2.102:85/GetAllSidebarItems")
    //   .then((response) => response.json())
    //   .then((data) => {
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
    test();
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
    // console.log(SidebarMenuArray);
    // console.log("i: " + i);
    // console.log("menuId:" + SidebarMenuArray[i].MenuID);
    // console.log("Parent:" + SidebarMenuArray[i].ParentID);
    let menuItem = document.createElement("div");
    menuItem.classList = "sidebar_menu-item";
    if (SidebarMenuArray[i].MenuID == SidebarMenuArray[i].ParentID) {
      // console.log("if conditon");
      let ParentMenuItem = document.createElement("div");
      ParentMenuItem.classList = "parent";
      let menuHeader = document.createElement("div");
      menuHeader.classList = "menu_header";
      let squareIcon = document.createElement("i");
      squareIcon.classList = squareIconClassList;
      let menuHeaderTitle = document.createElement("h6");
      let chevronDiv = document.createElement("div");
      chevronDiv.classList = "chevron-down-icon";
      let chevronIcon = document.createElement("i");
      chevronIcon.classList = chevrondownIconClassList;
      let parentSidebarDelimiter = document.createElement("div");
      parentSidebarDelimiter.classList = "parent_sidebar_delimiter";
      menuHeaderTitle.innerText = SidebarMenuArray[i].MenuName;
      menuHeader.appendChild(squareIcon);
      menuHeader.appendChild(menuHeaderTitle);
      ParentMenuItem.appendChild(menuHeader);
      chevronDiv.appendChild(chevronIcon);
      ParentMenuItem.appendChild(chevronDiv);
      menuItem.appendChild(ParentMenuItem);
      menuItem.appendChild(parentSidebarDelimiter);
      let childsMenuItem = document.createElement("div");
      childsMenuItem.classList = "childs";
      for (var j = i + 1; j < SidebarMenuArray.length; j++) {
        if (SidebarMenuArray[i].MenuID == SidebarMenuArray[j].ParentID) {
          let childMenuItem = document.createElement("div");
          childMenuItem.classList = "child";
          let menuHeader = document.createElement("div");
          menuHeader.classList = "menu_header";
          let squareIcon = document.createElement("i");
          squareIcon.classList = squareIconClassList;
          let menuHeaderTitle = document.createElement("h6");
          // let chevronDiv = document.createElement("div");
          // chevronDiv.classList = "chevron-down-icon";
          // let chevronIcon = document.createElement("i");
          chevronIcon.classList = chevrondownIconClassList;
          let childSidebarDelimiter = document.createElement("div");
          childSidebarDelimiter.classList = "child_sidebar_delimiter";
          menuHeaderTitle.innerText = SidebarMenuArray[j].MenuName;
          menuHeader.appendChild(squareIcon);
          menuHeader.appendChild(menuHeaderTitle);
          childMenuItem.appendChild(menuHeader);
          // chevronDiv.appendChild(chevronIcon);
          // childMenuItem.appendChild(chevronDiv);
          childsMenuItem.appendChild(childMenuItem);
          // console.log(childsMenuItem);
          menuItem.appendChild(childsMenuItem);
          childsMenuItem.appendChild(childSidebarDelimiter);
        }
      }
      menuItems.appendChild(menuItem);
    }
  }
}
// test();
//sidebar onclick
function test() {
  const removeParentActiveSidebarItem = () => {
    parentSidebarMenuList.forEach((item) => {
      item.classList.remove("active");
    });
  };

  const removeChildsActiveSidebarItem = () => {
    childsSidebarMenuList.forEach((item) => {
      item.classList.remove("active");
    });
  };

  const parentSidebarMenuList = document.querySelectorAll(".parent");
  const childsSidebarMenuList = document.querySelectorAll(".childs");

  parentSidebarMenuList.forEach(function (parentMenuItem) {
    parentMenuItem.addEventListener("click", function () {
      // console.log(parentMenuItem);
      parentMenuItem.classList.toggle("active");
      // console.log(parentMenuItem.classList);
      const delimiter = parentMenuItem.nextElementSibling;
      const childs = delimiter.nextElementSibling;
      // console.log(childs);
      if (childs) {
        // removeChildsActiveSidebarItem();
        childs.classList.toggle("active");
      }
    });
  });
}

const DishItemsArray = [];

// Fetchhing dish items from API
// fetch("http://192.168.2.102:85/GetAllDishItems")
//   .then((response) => response.json())
//   .then((data) => {

// Fetchhing dish items items from json

fetch("/dishItemsData.json")
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
    console.log(DishItemsArray);

    displayMenuHeaderTitles();
    menuHeaderActive();
    displayDishItems();
  });

// displayMenuHeaderTitle
function displayMenuHeaderTitles() {
  const menuHeaderItems = document.querySelector(".menu-tabs-header-items");
  menuHeaderItems.innerHTML = "";
  // icons
  const squareIconClassList = "menu-tabs-header-icon fa-regular fa-square-full";
  var cnt = 0;
  for (let i = 0; i < DishItemsArray.length; i++) {
    if (DishItemsArray[i].id == DishItemsArray[i].parentMenuID) {
      cnt++;
      let menuHeaderTextDiv = document.createElement("div");
      menuHeaderTextDiv.classList = "menu-tabs-header-text";
      if (i == 0) {
        menuHeaderTextDiv.classList = "menu-tabs-header-text active";
      }
      let idLower = `${DishItemsArray[i].name}`.toLowerCase();
      menuHeaderTextDiv.setAttribute("id", idLower);
      let title = document.createElement("h5");
      title.innerText = DishItemsArray[i].name;
      menuHeaderTextDiv.appendChild(title);
      let squareIconDiv = document.createElement("div");
      squareIconDiv.classList = "menu_header-Square_icon";
      let squareIcon = document.createElement("i");
      squareIcon.classList = squareIconClassList;
      squareIconDiv.appendChild(squareIcon);
      menuHeaderItems.appendChild(menuHeaderTextDiv);
      if (cnt < DishItemsArray.length - 2) {
        menuHeaderItems.appendChild(squareIconDiv);
      }
    }
  }
}

// display Dish Items
function displayDishItems() {
  const dishItemsContainer = document.querySelector(".special_dishes");
  // dishItemsContainer.innerHTML = "";
}


// get the table number from the url
const urlParams = new URLSearchParams(window.location.search);
const number = parseInt(urlParams.get("tableNumber"));
console.log(number); // Output: 123
