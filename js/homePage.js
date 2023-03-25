// toggle menu bar
const sidebar = document.querySelector("#side_nav_container");
const sidebarMenuButton = document.querySelector("#sidebar-menu");
const sidebarCrossButton = document.querySelector("#sidebar-cross-btn");
const sidebarOutbox = document.querySelector(".sidebar-outbox");

// console.log(sidebarCrossButton);
const sidebarMenuItems = document.querySelector(".sidebar__menu-items");

// menu button on click
sidebarMenuButton.addEventListener("click", function () {
  // sidebarMenuItems.classList.toggle("active");
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

// ================================================ ********* =============================================
// add order

function orderNow() {
  console.log("helloorder");
  console.log(DishItemsArray);
  let id = event.target.id;
  let itemID = id.split("orderNow")[1];
  console.log(itemID);
  let quantity = servingCounter;
  let serveElementID = "count" + itemID;
  console.log(serveElementID);
  const servedCountSpan = document.getElementById(`${serveElementID}`);
  console.log(servedCountSpan);
  if (servedCountSpan !== null) {
    servedCountSpan.innerHTML = 0;
  }
  // console.log(quantity);
  let cost;
  let status = true;
  let instruction = "Less Spice";
  let orderCustomization = "Add Bell Paper";

  // get the table number from the url
  const urlParams = new URLSearchParams(window.location.search);
  const tableNumber = parseInt(urlParams.get("tableNumber"));
  // console.log(tableNumber); // Output: 123
  DishItemsArray.forEach((item) => {
    if (item.id == itemID) {
      let price = item.price;
      cost = price * quantity;
    }
    // console.log(item);
  });
  console.log("order");
  console.log(itemID);
  console.log(quantity);
  console.log(cost);
  console.log(status);
  console.log(instruction);
  console.log(orderCustomization);
  console.log(tableNumber);

  const formData = new FormData();
  formData.append("item_id", itemID);
  formData.append("quantity", quantity);
  formData.append("order_total_cost", cost);
  formData.append("order_status", status);
  formData.append("customization_instructions", instruction);
  formData.append("customization", orderCustomization);
  formData.append("table_number", tableNumber);
  console.log(formData);

  fetch("http://192.168.2.103:50/api/order/addorder", {
    method: "POST",
    body: formData,
  })
    // .then((res) => res.json())
    .then((data) => {
      console.log("data" + data);
      // alert("Order added!");

      document.querySelector(".confirm-order-outerbox").style.display = "grid";
    })
    .catch((err) => console.log(err));
}
const OrdersArray = [];
// Fetchhing Ortders from API
fetch("http://192.168.2.103:50/api/order/getallorderlist")
  // fetch("/order.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log("All Data");
    // console.log(data);
    // creating object from fetched data
    data.forEach((item) => {
      const obj = { ...item }; // spread operator (...)
      // pushing objects to array
      OrdersArray.push(obj);
    });
    // console.log("Orders Array");
    // console.log(OrdersArray);
    showOrders();
  });

function showOrders() {
  console.log("Orders Array");
  console.log(OrdersArray);
}

// order confirm
const okBTN = document.getElementById("order_ok-btn");
okBTN.addEventListener("click", () => {
  document.querySelector(".confirm-order-outerbox").style.display = "none";
});
// added Order array
const AddedOrderItems = [];
// show add to cart count
const addedToCart = document.querySelector(".added_items-count");
var addedToCartCounter = 0;
function addToCart(id) {
  let quantity = servingCounter;
  const serveCountSpan = document.getElementById(`count${id}`);
  console.log(servingCounter);
  servingCounter = 0;
  serveCountSpan.innerHTML = 0;
  console.log(id, "item id");
  addedToCartCounter++;
  addedToCart.innerHTML = addedToCartCounter;
  DishItemsArray.forEach((item) => {
    if (item.id == id) {
      let price = item.price;
      cost = price * quantity;
      const obj = {
        Name: item.name,
        ImageSRC: item.imagePath,
        ID: item.id,
        Quantity: quantity,
        Cost: item.price * quantity,
      };
      // pushing objects to array
      AddedOrderItems.push(obj);
    }

    // console.log(item);
  });
  console.log("order");
  console.log(id);
  console.log(quantity);
  console.log(cost);
  console.log(AddedOrderItems, "added order items");
}

// display added to cart items

function displayCartItems() {
  console.log(AddedOrderItems, "displayCartItems() ");

  
}
displayCartItems();

const cartOutbox = document.querySelector(".cart-outbox");
const cartContainer = document.getElementById("cart_container");
const cartBTN = document.querySelector("#main_cart");

cartBTN.addEventListener("click", () => {
  cartContainer.classList.toggle("active");
  console.log(AddedOrderItems, " cart: added order items");

  displayCartItems();
  // cartOutbox.style.display = "block";
});

// serve count

// var servingCounter = 0;
// function serveCountMinus(arg) {
//   console.log("hello minus");
//   console.log(arg);
//   let id = "count" + arg;
//   const serveCountSpan = document.getElementById(`${id}`);
//   console.log(serveCountSpan);
//   if (servingCounter > 0) {
//     servingCounter--;
//   }

//   console.log(servingCounter);
//   serveCountSpan.innerHTML = servingCounter;
// }
// function serveCountPlus(arg) {
//   console.log("hello plus");
//   console.log(arg);
//   let id = "count" + arg;
//   const serveCountSpan = document.getElementById(`${id}`);
//   console.log(serveCountSpan);

//   servingCounter++;

//   console.log(servingCounter);
//   serveCountSpan.innerHTML = servingCounter;
// }

// optimal counter
var servingCounter = 0;
var prevID;

function quantityCounter(id, icon) {
  let elementID = "count" + id;
  let prevElementID = "count" + prevID;
  const serveCountSpan = document.getElementById(`${elementID}`);
  const prevServeCountSpan = document.getElementById(`${prevElementID}`);
  console.log(serveCountSpan);
  if (prevID !== id) {
    servingCounter = 0;
    if (prevServeCountSpan !== null) {
      prevServeCountSpan.innerHTML = 0;
    }
    prevID = id;
  }

  if (icon == "minus") {
    console.log("hello minus");
    if (servingCounter > 0) {
      servingCounter--;
    }
    console.log(servingCounter);
    if (serveCountSpan !== null) {
      serveCountSpan.innerHTML = servingCounter;
    }
  }
  if (icon == "plus") {
    console.log("hello plus");
    servingCounter++;
    console.log(servingCounter);
    if (serveCountSpan !== null) {
      serveCountSpan.innerHTML = servingCounter;
    }
  }
}
const SidebarMenuArray = [];

// Fetchhing Sidebar items from json

// fetch("/sidebarData.json")
//   .then((response) => response.json())
//   .then((data) => {
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
    sidebarOnClick();
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

// customized order
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
//sidebar onclick
function sidebarOnClick() {
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
// Fetchhing dish items items from json
// fetch("/dishItemsData.json")
//   .then((response) => response.json())
//   .then((data) => {

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
    console.log("Array");
    console.log(DishItemsArray);

    displayMenuHeaderTitles();
    menuHeaderActive();
    displayDishItems();
    // addOrder();
  });
const parentArray = [];
// displayMenuHeaderTitle
function displayMenuHeaderTitles() {
  const menuHeaderItems = document.querySelector(".menu-tabs-header-items");
  menuHeaderItems.innerHTML = "";
  // icons
  const squareIconClassList = "menu-tabs-header-icon fa-regular fa-square-full";
  var parentCNT = 0,
    iconCNT = 0;
  for (let i = 0; i < DishItemsArray.length; i++) {
    if (DishItemsArray[i].id == DishItemsArray[i].parentMenuID) {
      parentArray.push(DishItemsArray[i]);
      console.log(parentArray, "parent");
    }
  }
  console.log(parentArray, "parent");
  for (let i = 0; i < parentArray.length; i++) {
    // if (DishItemsArray[i].id == DishItemsArray[i].parentMenuID) {
    let menuHeaderTextDiv = document.createElement("div");
    menuHeaderTextDiv.classList = "menu-tabs-header-text";
    if (i == 0) {
      menuHeaderTextDiv.classList = "menu-tabs-header-text active";
    }
    let idLower = `${parentArray[i].name}`.toLowerCase();
    menuHeaderTextDiv.setAttribute("id", idLower);
    let title = document.createElement("h5");
    title.innerText = parentArray[i].name;
    menuHeaderTextDiv.appendChild(title);

    menuHeaderItems.appendChild(menuHeaderTextDiv);
    if (iconCNT < parentArray.length - 1) {
      iconCNT++;
      let squareIconDiv = document.createElement("div");
      squareIconDiv.classList = "menu_header-Square_icon";
      let squareIcon = document.createElement("i");
      squareIcon.classList = squareIconClassList;
      squareIconDiv.appendChild(squareIcon);
      menuHeaderItems.appendChild(squareIconDiv);
    }
    // }
  }
}

// display Dish Items
function displayDishItems() {
  const dishItemsContainer = document.querySelector(".special_dishes");
  console.log(DishItemsArray);
  // dishItemsContainer.innerHTML = "";
  for (let i = 0; i < DishItemsArray.length; i++) {
    if (DishItemsArray[i].id != DishItemsArray[i].parentMenuID) {
      // console.log(DishItemsArray[i]);
      let spDishBlock = document.createElement("div");
      spDishBlock.classList = "sp_dish-block";
      spDishBlock.setAttribute("id", `${DishItemsArray[i].id}`);
      // console.log(spDishBlock, "dishblock");
      let spDishimgDiv = document.createElement("div");
      spDishimgDiv.classList = "sp_dish-img";
      let spDishimg = document.createElement("img");

      let imgSRC = DishItemsArray[i].imagePath;
      // console.log(imgSRC);
      // let index = imgSRC.indexOf("\\");
      // let newPath = imgSRC.substring(index + 1);

      let pathArray = imgSRC.split("\\"); // Split the file path into an array based on the backslash character
      let newPath = pathArray.slice(1).join("\\"); // Join the array elements starting from the second element using the backslash character
      // console.log("new path" + newPath);

      spDishimg.setAttribute("src", newPath);
      // console.log(spDishimg);
      // console.log(spDishimg);
      spDishimgDiv.appendChild(spDishimg);
      spDishBlock.appendChild(spDishimgDiv);
      let spDishBodyDiv = document.createElement("div");
      spDishBodyDiv.classList = "sp_dish-body";
      let spDishTitle = document.createElement("div");
      spDishTitle.classList = "sp_dish-title";
      let dishTitelh5 = document.createElement("h5");
      dishTitelh5.innerText = DishItemsArray[i].name;
      spDishTitle.appendChild(dishTitelh5);
      let spDishPrice = document.createElement("span");
      spDishPrice.classList = "price";
      spDishPrice.innerText = "$" + DishItemsArray[i].price;
      spDishTitle.appendChild(spDishPrice);
      let addTOCartDiv = document.createElement("div");
      addTOCartDiv.classList = "add_to_cart-menu_btn";
      addTOCartDiv.setAttribute(
        "onclick",
        `addToCart(${DishItemsArray[i].id})`
      );
      let navCartIcon = document.createElement("i");
      navCartIcon.classList = "fa-solid fa-cart-shopping";
      addTOCartDiv.appendChild(navCartIcon);
      spDishTitle.appendChild(addTOCartDiv);
      spDishBodyDiv.appendChild(spDishTitle);
      let spDishDetails = document.createElement("p");
      spDishDetails.classList = "sp_dish-details text-center";
      spDishDetails.innerText = DishItemsArray[i].description;
      spDishBodyDiv.appendChild(spDishDetails);
      let spDishBtnDiv = document.createElement("div");
      spDishBtnDiv.classList = "dish-buttons d-flex justify-content-around";
      let customizebtn = document.createElement("button");
      customizebtn.classList = "dish-btn";
      customizebtn.innerHTML = "Customize";
      spDishBtnDiv.appendChild(customizebtn);
      let serveCountDiv = document.createElement("div");
      serveCountDiv.classList = "serve_count d-flex justify-content-between";
      // serveCountDiv.setAttribute("id", "scdiv" + `${DishItemsArray[i].id}`);
      let countMinus = document.createElement("span");
      countMinus.classList = "count-minus";
      countMinus.setAttribute(
        "onclick",
        `quantityCounter(${DishItemsArray[i].id},"minus")`
      );
      // countMinus.setAttribute(
      //   "onclick",
      //   `serveCountMinus(${DishItemsArray[i].id})`
      // );
      // countMinus.setAttribute("id", "countMinus" + `${DishItemsArray[i].id}`);
      let minusIcon = document.createElement("i");
      minusIcon.classList = "fa-solid fa-minus";
      countMinus.appendChild(minusIcon);
      serveCountDiv.appendChild(countMinus);
      let counterSpan = document.createElement("span");
      counterSpan.setAttribute("id", "count" + `${DishItemsArray[i].id}`);
      counterSpan.innerText = 0;
      serveCountDiv.appendChild(counterSpan);
      let countPlus = document.createElement("span");
      countPlus.classList = "count-plus";
      countPlus.setAttribute(
        "onclick",
        `quantityCounter(${DishItemsArray[i].id},"plus")`
      );
      // countPlus.setAttribute(
      //   "onclick",
      //   `serveCountPlus(${DishItemsArray[i].id})`
      // );

      // countPlus.setAttribute("id", "countPlus" + `${DishItemsArray[i].id}`);

      let plusIcon = document.createElement("i");
      plusIcon.classList = "fa-solid fa-plus";
      countPlus.appendChild(plusIcon);
      serveCountDiv.appendChild(countPlus);
      spDishBtnDiv.appendChild(serveCountDiv);
      let orderNowbtn = document.createElement("button");
      orderNowbtn.classList = "dish-btn";
      orderNowbtn.innerHTML = "Order Now";
      spDishBtnDiv.appendChild(orderNowbtn);
      orderNowbtn.setAttribute("id", "orderNow" + `${DishItemsArray[i].id}`);
      orderNowbtn.setAttribute("onclick", "orderNow()");
      console.log(orderNowbtn);
      // output

      spDishBlock.appendChild(spDishBodyDiv);
      spDishBlock.appendChild(spDishBtnDiv);
      dishItemsContainer.appendChild(spDishBlock);
      // console.log(dishItemsContainer);
    }
  }
}
