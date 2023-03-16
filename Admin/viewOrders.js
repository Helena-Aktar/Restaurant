// var buttonActive = document.querySelector(".Button");
// console.log(buttonActive);
// buttonActive.addEventListener('click',function(){
//     if(buttonActive=="Button p-4")
//     {
//         buttonActive.classList.add('active');
//     }
// })
console.log("Eureka!");

function active(num) {
  const home = document.getElementById("core_container_home");
  const orderHistory = document.getElementById("core_container_Order-History");
  const Messages = document.getElementById("core_container_Messages");
  const Statistics = document.getElementById("core_container_Statistics");
  const Setting = document.getElementById("core_container_Setting");
  const AddFoodItem = document.getElementById("core_container_Add-food-item");

  const buttonHome = document.getElementById("home");
  const buttonOrderHistory = document.getElementById("Order_History");
  const buttonAddFoodItem = document.getElementById("Add_food_item");
  const buttonMessages = document.getElementById("Messages");
  const buttonStatistics = document.getElementById("Statistics");
  const buttonSetting = document.getElementById("Setting");
  if (num == 1) {
    home.style.display = "block";
    orderHistory.style.display = "none";
    AddFoodItem.style.display = "none";
    Messages.style.display = "none";
    Statistics.style.display = "none";
    Setting.style.display = "none";
    buttonHome.classList.add("active");
    buttonOrderHistory.classList.remove("active");
    buttonMessages.classList.remove("active");
    buttonStatistics.classList.remove("active");
    buttonSetting.classList.remove("active");
    buttonAddFoodItem.classList.remove("active");
  } else if (num == 2) {
    home.style.display = "none";
    orderHistory.style.display = "block";
    AddFoodItem.style.display = "none";
    Messages.style.display = "none";
    Statistics.style.display = "none";
    Setting.style.display = "none";
    buttonHome.classList.remove("active");
    buttonOrderHistory.classList.add("active");
    buttonMessages.classList.remove("active");
    buttonStatistics.classList.remove("active");
    buttonSetting.classList.remove("active");
    buttonAddFoodItem.classList.remove("active");
  } else if (num == 3) {
    home.style.display = "none";
    orderHistory.style.display = "none";
    AddFoodItem.style.display = "block";
    Messages.style.display = "none";
    Statistics.style.display = "none";
    Setting.style.display = "none";
    buttonHome.classList.remove("active");
    buttonOrderHistory.classList.remove("active");
    buttonAddFoodItem.classList.add("active");
    buttonMessages.classList.remove("active");
    buttonStatistics.classList.remove("active");
    buttonSetting.classList.remove("active");
  } else if (num == 4) {
    home.style.display = "none";
    orderHistory.style.display = "none";
    AddFoodItem.style.display = "none";
    Messages.style.display = "block";
    Statistics.style.display = "none";
    Setting.style.display = "none";
    buttonHome.classList.remove("active");
    buttonOrderHistory.classList.remove("active");
    buttonAddFoodItem.classList.remove("active");
    buttonMessages.classList.add("active");
    buttonStatistics.classList.remove("active");
    buttonSetting.classList.remove("active");
  } else if (num == 5) {
    home.style.display = "none";
    orderHistory.style.display = "none";
    AddFoodItem.style.display = "none";
    Messages.style.display = "none";
    Statistics.style.display = "block";
    Setting.style.display = "none";
    buttonHome.classList.remove("active");
    buttonOrderHistory.classList.remove("active");
    buttonAddFoodItem.classList.remove("active");
    buttonMessages.classList.remove("active");
    buttonStatistics.classList.add("active");
    buttonSetting.classList.remove("active");
  } else if (num == 6) {
    home.style.display = "none";
    orderHistory.style.display = "none";
    AddFoodItem.style.display = "none";
    Messages.style.display = "none";
    Statistics.style.display = "none";
    Setting.style.display = "block";
    buttonHome.classList.remove("active");
    buttonOrderHistory.classList.remove("active");
    buttonAddFoodItem.classList.remove("active");
    buttonMessages.classList.remove("active");
    buttonStatistics.classList.remove("active");
    buttonSetting.classList.add("active");
  }
}

// conformOder
function orderselectionone(num) {
  const parentOrderList = document.getElementById("order_list_one");
  // const order = document.getElementById("order_list");
  const orderCardsInHistory = document.getElementById("order_Cards_In_History");
  console.log("inside fun", parentOrderList);
  // const firstOrder = document.getElementById("first_order");
  if (num == 1) {
    console.log(1, orderCardsInHistory);
    var a = orderCardsInHistory.appendChild(parentOrderList);
    // parentOrderList.style.display="none";
    console.log(a);
  }
}
function orderselectiontwo(num) {
  const parentOrderList = document.getElementById("order_list_two");
  // const order = document.getElementById("order_list");
  const orderCardsInHistory = document.getElementById("order_Cards_In_History");
  console.log("inside fun", parentOrderList);
  // const firstOrder = document.getElementById("first_order");
  if (num == 1) {
    console.log(1, orderCardsInHistory);
    var a = orderCardsInHistory.appendChild(parentOrderList);
    // parentOrderList.style.display="none";
    console.log(a);
  }
}

//add list
const orderform = document.getElementById("form_card");
const buttonSubmit = document.getElementById("btn-submit");

//console.log(orderform);
orderform.addEventListener("submit", (e) => {
  e.preventDefault();
  // var a = document.getElementById("ImagePath").value;
  // console.log(a);
  // const imageInput = document.getElementById("ImagePath");
  //   const file = imageInput.files[0];
  //   const imageUrl = URL.createObjectURL(file);
  // show.src = imageUrl;
  // var a= imageInput.value;
  // console.log(imageUrl); // Output the file path to the console
  var obj = {
    Name: document.getElementById("Name").value,
    ParentMenuName: document.getElementById("parentMenuID").value,
    Price: document.getElementById("Price").value,
    Description: document.getElementById("Description").value,
    // ImagePath: imageUrl,
  };
  // console.log(obj);
  // const orderformData =new FormData(orderform);
  // const orderdata = Object.fromEntries(orderformData);
  // console.log(orderdata);
  fetch("http://193.168.2.102:99/AddDishItems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log("data");
    })
    .catch((err) => console.log(err));
});

const dataArray = [];
// API
fetch("http://192.168.2.102:99/GetAllDishItems")
  .then((response) => response.json())
  .then((data) => {
    // json File
    // fetch("./data.json")
    //   .then((response) => response.json())
    //   .then((data) => {
    // Initialize the array
    console.log(data);
    // Loop through the data and create objects
    // data.forEach((item) => {
    //   const obj = {};
    //   obj.menuId = item.menu_id;
    //   obj.menuName = item.menu_name;
    //   obj.parentID = item.parent_id;
    //   obj.pageName = item.page_name;

    //   dataArray.push(obj);
    // });
    // // done();
    // console.log(dataArray);
    // displaydata();
  });
