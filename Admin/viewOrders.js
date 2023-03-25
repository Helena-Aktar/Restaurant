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
function orderselectionone(id,status) {
  // var value ="false";
  //?value=true
  console.log(id,status);
  const obj = {
    order_status: status,
  };
  
  console.log(obj);
  fetch(`http://192.168.2.103:50/api/order/${id}`,
  {
    method: "PUT",
        headers:{
            'content-Type': 'application/json',
            // "Content-Type": "application/json",
        },
        body:JSON.stringify(obj),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("success",data);
  })
  .catch((err) => {
    console.log("error:",err);
  });
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
  var Name = document.getElementById("Name").value;
  console.log(Name);
  var ParentMenuID = document.getElementById("parentMenuID").value;
  console.log(ParentMenuID);
  var Price = document.getElementById("Price").value;
  console.log(Price);
  var Description = document.getElementById("Description").value;
  console.log(Description);
  var fileInput = document.getElementById("ImageFile");
  const file = fileInput.files[0];
  console.log("Full Image: " + file);
  console.log("Image Name: " + file.name);
  console.log("Image Type: " + file.type);
  console.log("Splited Type: " + file.type.split("/")[1]);
  //   random name
  const randomString = Math.random().toString(36).substring(2);
  const timestamp = Date.now();
  const imageType = file.type.split("/")[1];
  const randomName = `${randomString}-${timestamp}.${imageType}`;
  console.log(randomName);
  const formData = new FormData();
  formData.append("Name", Name);
  formData.append("ParentMenuID", ParentMenuID);
  formData.append("Price", Price);
  formData.append("Description", Description);
  formData.append("Image", file);
  formData.append("ImageName", randomName);
  console.log(formData);
  fetch(" http://192.168.2.102:85/AddDishItems", {
    method: "POST",
    body: formData,
  })
    // .then((res) => res.json())
    .then((data) => {
      console.log("data" + data);
    })
    .catch((err) => console.log(err));

  // clear input fields
  const inputs = document.querySelectorAll("input,textarea");
  document.getElementById("parentMenuID");
  inputs.forEach((input) => {
    // console.log(input);
    input.value = "";
  });
});
function hi() {
  fetch("http://192.168.2.102:85/GetAllDishItems")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
const DishItemsArrayT = [];
function sellectoption() {
  fetch("http://192.168.2.102:85/GetAllDishItems")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      data.forEach((item) => {
        const obj = { ...item }; // spread operator (...)
        // pushing objects to array
        DishItemsArrayT.push(obj);
      });
      const optionsparent = document.getElementById("parentMenuID");
      for (i = 0; i < DishItemsArrayT.length; i++) {
        if (DishItemsArrayT[i].id == DishItemsArrayT[i].parentMenuID) {
          // console.log("hh");
          const newOption = document.createElement("option");
          newOption.value = DishItemsArrayT[i].id;
          newOption.text = DishItemsArrayT[i].name;
          optionsparent.add(newOption);
        }

        // Add the new option to the select elemen
        //optionsparent.appendChild(a);
      }
    });
}
sellectoption();
// var op = document.querySelectorAll("option");
// var s = (op[1].selected = true);
// console.log(s);

//get order informations url => http://192.168.2.103:50/api/order/getallorderlist
const orderData=[];
const itemData=[];

function onload()
{
    const alllist=[];
    // const orderData=[];
    // const itemData=[];
    fetch("http://192.168.2.103:50/api/order/getallorderlist")
      .then((response) => response.json())
      .then((orderdata) => {
          orderDatalength=orderData.length;
          orderdata.forEach((item) => {
            const obj = { ...item }; // spread operator (...)
            // pushing objects to array
            orderData.push(obj);
            // alllist.push(obj);
            // console.log(orderData.length);
          });
        // console.log(alllist);
        // load();
      });
    // console.log(orderdata);
    fetch("http://192.168.2.102:85/GetAllDishItems")
      .then((response) => response.json())
      .then((itemdata) => {
        // console.log(itemdata);
          itemdata.forEach((item) => {
            const obj = { ...item }; // spread operator (...)
            // pushing objects to array
            itemData.push(obj);
            // alllist.push(obj);
          });
          load();
        // console.log(alllist);
      });
}
onload();
function load()
{
  // const a = orderData.length;
      console.log(orderData);
      console.log(itemData);
  //     console.log(a);
  var r="rejected";
  console.log(r);
      for(var i=0;i<orderData.length;i++)
      {
        // console.log("hi");
        for(var j=0;j<itemData.length;j++)
        {
          // console.log("hello")
          if(orderData[i].item_id==itemData[j].id)
          {
            var imgpath = itemData[j].imagePath;
            let pathArray = imgpath.split("\\");
            let newPath = pathArray.slice(1).join("\\");
            // console.log(imgpath);
            var p = orderData[i].order_total_cost/orderData[i].quantity;
            var tb=document.getElementById("parentOrder");
            var x= document.createElement("div");
            x.innerHTML=`
            <div id="order_list_one" class="p-3 m-3 bg-white w-75 rounded-3">
            <!-- <div id="order_list" class=""> -->
              <div class="d-flex justify-content-between">
                <div class="text-start m-2">
                  <h5>Order #TN-<label>${orderData[i].table_number}</label></h5>
                  <p>${orderData[i].order_datetime}</p>
                </div>
                <img
                  class="profile_photo"
                  src="/images/user_icon_1.png"
                  alt=""
                />
              </div>
                <div class="d-flex justify-content-around mb-4">
                  <img id=img5
                    class="foodItem_photo me-5"
                    src="/${newPath}"
                    alt=""
                  />
                  <div>
                    <h5>${itemData[j].name}</h5>
                    <p id="dis">${itemData[j].description}</p>
                    <div class="d-flex justify-content-around">
                      <h5>$${p}</h5>
                      <h5>Qty:${orderData[i].quantity}</h5>
                    </div>
                  </div>
                </div>
              <div
                class="m-3"
                style="height: 1.2px; background: #c1c3cd"
              ></div>
              <div class="d-flex justify-content-between">
                <div class="text-start">
                  <p style="font-size: larger">1 Items</p>
                  <h3>$${orderData[i].order_total_cost}</h3>
                </div>
                <div class="text-center pt-3">
                  <p
                    id="${orderData[i].order_id}"
                    onclick="orderselectionone(${orderData[i].order_id},'rejected')"
                    class="btn btn-outline-danger"
                  >
                    <i
                      style="font-size: 40px; width: 42px"
                      class="fa-solid fa-xmark"
                    ></i>
                  </p>
                  <p
                    id="conform"
                    onclick="orderselectionone(${orderData[i].order_id},'conformed')"
                    class="btn btn-outline-success"
                  >
                    <i
                      style="font-size: 40px"
                      class="fa-solid fa-check"
                    ></i>
                  </p>
                </div>
              </div>
            <!-- </div> -->
          </div>
          `;
            // tb.innerText=orderData[i].tablenumber;
            var img =document.querySelector(".foodItem_photo");
            // console.log(img);
            // img.setAttribute("src", newPath);
            tb.appendChild(x);
            // console.log(img);
            j=j+8;
          }
        }
      }

}

