// var buttonActive = document.querySelector(".Button");
// console.log(buttonActive);
// buttonActive.addEventListener('click',function(){
//     if(buttonActive=="Button p-4")
//     {
//         buttonActive.classList.add('active');
//     }
// })

const orderData = [];
const itemData = [];
const orderDatahis = [];
const itemDatahis = [];
// console.log("Eureka!");

function active(num) {
  const home = document.getElementById("core_container_home");
  const orderHistory = document.getElementById("core_container_Order-History");
  const Messages = document.getElementById("core_container_Messages");
  const Statistics = document.getElementById("core_container_Statistics");
  const Setting = document.getElementById("core_container_Setting");
  const FoodReady = document.getElementById("core_container_food_ready");

  const buttonHome = document.getElementById("home");
  const buttonOrderHistory = document.getElementById("Order_History");
  const buttonFoodReady = document.getElementById("food_ready");
  const buttonMessages = document.getElementById("Messages");
  const buttonStatistics = document.getElementById("Statistics");
  const buttonSetting = document.getElementById("Setting");
  if (num == 1) {
    home.style.display = "block";
    orderHistory.style.display = "none";
    FoodReady.style.display = "none";
    Messages.style.display = "none";
    Statistics.style.display = "none";
    Setting.style.display = "none";
    buttonHome.classList.add("active");
    buttonOrderHistory.classList.remove("active");
    buttonMessages.classList.remove("active");
    buttonStatistics.classList.remove("active");
    buttonSetting.classList.remove("active");
    buttonFoodReady.classList.remove("active");
  } else if (num == 2) {
    home.style.display = "none";
    orderHistory.style.display = "block";
    FoodReady.style.display = "none";
    Messages.style.display = "none";
    Statistics.style.display = "none";
    Setting.style.display = "none";
    buttonHome.classList.remove("active");
    buttonOrderHistory.classList.add("active");
    buttonMessages.classList.remove("active");
    buttonStatistics.classList.remove("active");
    buttonSetting.classList.remove("active");
    buttonFoodReady.classList.remove("active");
    if(orderDatahis==0 || itemDatahis!=0||orderDatahis!=0 || itemDatahis==0)
    {
      orderDatahis.length=0;
      itemDatahis.length=0;
      fetch("http://192.168.2.103:50/api/order/getallorderlist")
      .then((response) => response.json())
      .then((orderdata) => {
          console.log(orderdata,orderdata.length);
          //orderDatalength=orderData.length;
          orderdata.forEach((item) => {
            const obj = { ...item }; // spread operator (...)
            // pushing objects to array
            orderDatahis.push(obj);
            // alllist.push(obj);
            console.log(orderdata.length);
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
              itemDatahis.push(obj);
              // alllist.push(obj);
            });
            // load();
            // let allbuttonClicked = false;
            // let completebuttonClicked = false;
            // let rejectedbuttonClicked = false;
            let completebuttonClicked = false;
            let rejectedbuttonClicked = false;
            let allbuttonClicked = false;
            var all=document.querySelector("#all");
            var complete = document.querySelector("#complete");
            var rejected = document.querySelector("#rejected");

              all.addEventListener("click",function(){
                allbuttonClicked = true;
                completebuttonClicked = false;
                rejectedbuttonClicked = false;
                  console.log("event all",allbuttonClicked);
                  all.style.background="orange";
                  complete.style.background="green";
                  rejected.style.background="green";
                  history(allbuttonClicked,completebuttonClicked,rejectedbuttonClicked);
                })

              complete.addEventListener("click",function(){
                completebuttonClicked = true;
                allbuttonClicked = false;
                rejectedbuttonClicked = false;
                  console.log("event complete",completebuttonClicked);
                  all.style.background="green";
                  complete.style.background="orange";
                  rejected.style.background="green";
                  history(allbuttonClicked,completebuttonClicked,rejectedbuttonClicked);
                })

              rejected.addEventListener("click",function(){
                rejectedbuttonClicked = true;
                completebuttonClicked = false;
                allbuttonClicked = false;
                  console.log("event rejected",rejectedbuttonClicked);
                  all.style.background="green";
                  complete.style.background="green";
                  rejected.style.background="orange";
                  history(allbuttonClicked,completebuttonClicked,rejectedbuttonClicked);
                })
            if(allbuttonClicked==false && completebuttonClicked==false && rejectedbuttonClicked==false)
            {
              all.style.background="yellow";
              complete.style.background="green";
              rejected.style.background="green";
              history(allbuttonClicked,completebuttonClicked,rejectedbuttonClicked);
            }

          // console.log(alllist);
        });
    }
    
  } else if (num == 3) {
    home.style.display = "none";
    orderHistory.style.display = "none";
    FoodReady.style.display = "block";
    Messages.style.display = "none";
    Statistics.style.display = "none";
    Setting.style.display = "none";
    buttonHome.classList.remove("active");
    buttonOrderHistory.classList.remove("active");
    buttonFoodReady.classList.add("active");
    buttonMessages.classList.remove("active");
    buttonStatistics.classList.remove("active");
    buttonSetting.classList.remove("active");
    foodReady();
  } else if (num == 4) {
    home.style.display = "none";
    orderHistory.style.display = "none";
    FoodReady.style.display = "none";
    Messages.style.display = "block";
    Statistics.style.display = "none";
    Setting.style.display = "none";
    buttonHome.classList.remove("active");
    buttonOrderHistory.classList.remove("active");
    buttonFoodReady.classList.remove("active");
    buttonMessages.classList.add("active");
    buttonStatistics.classList.remove("active");
    buttonSetting.classList.remove("active");
  } else if (num == 5) {
    home.style.display = "none";
    orderHistory.style.display = "none";
    FoodReady.style.display = "none";
    Messages.style.display = "none";
    Statistics.style.display = "block";
    Setting.style.display = "none";
    buttonHome.classList.remove("active");
    buttonOrderHistory.classList.remove("active");
    buttonFoodReady.classList.remove("active");
    buttonMessages.classList.remove("active");
    buttonStatistics.classList.add("active");
    buttonSetting.classList.remove("active");

    const ctx = document.getElementById('myChart');
    var Items=[];
    var ItemsId=[];
    var sell=[];
    var x=0;
    var totalCost = 0;
    for(var i=0;i<itemData.length;i++)
    {
      if(itemData[i].id != itemData[i].parentMenuID)
      {
        Items[x]=itemData[i].name;
        ItemsId[x]=itemData[i].id;
        x++;
      }
    }
    for(var i=0;i<ItemsId.length;i++)
    {
      for(var j=0;j<orderData.length;j++)
      {
        if(ItemsId[i] == orderData[j].item_id)
        {
          totalCost = totalCost + orderData[j].order_total_cost;
        }
      }
      sell[i]=totalCost;
      totalCost=0;
    }
    console.log("ItemsId",ItemsId);
    console.log(Items);
    console.log(sell);
    Chart.defaults.font.size=18;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Items,
        datasets: [{
          label: '# sell Report',
          data: sell,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  } 
  else if (num == 6) {
    home.style.display = "none";
    orderHistory.style.display = "none";
    FoodReady.style.display = "none";
    Messages.style.display = "none";
    Statistics.style.display = "none";
    Setting.style.display = "block";
    buttonHome.classList.remove("active");
    buttonOrderHistory.classList.remove("active");
    buttonFoodReady.classList.remove("active");
    buttonMessages.classList.remove("active");
    buttonStatistics.classList.remove("active");
    buttonSetting.classList.add("active");
  }
}
function foodReady() {
  fetch("http://192.168.2.103:50/api/order/getallorderlist")
      .then((response) => response.json())
      .then((orderdata) => {
        console.log(orderdata);
        // load();
        // const a = orderData.length;
        // console.log(orderdata);
        console.log(itemData);
        //     console.log(a);
        var r = "rejected";
        console.log(r);
        var tb = document.getElementById("order_Ready_parent");
        tb.innerHTML="";
        for (var i = orderdata.length - 1; i > 0; i--) {
          // console.log("hi");
          for (var j = 0; j < itemData.length; j++) {
            if (orderdata[i].order_status == "cooking") {
              if (orderdata[i].item_id == itemData[j].id) {
                var imgpath = itemData[j].imagePath;
                let pathArray = imgpath.split("\\");
                let newPath = pathArray.slice(1).join("\\");
                // console.log(imgpath);
                var p = orderdata[i].order_total_cost / orderdata[i].quantity;
                var x = document.createElement("div");
                x.style.width = "45%";
                x.style.paddingRight = "25px";
                x.innerHTML = `
                    <div id="order_list_one" class="p-3 m-3 bg-white w-100 rounded-3">
                    <!-- <div id="order_list" class=""> -->
                      <div class="d-flex justify-content-between">
                        <div class="text-start m-2">
                          <h5>Order #TN-<label>${orderdata[i].table_number}</label></h5>
                          <p>${orderdata[i].order_datetime}</p>
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
                              <h5>Qty:${orderdata[i].quantity}</h5>
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
                          <h3>$${orderdata[i].order_total_cost}</h3>
                        </div>
                        <div class="text-center pt-3">
                          <p
                            id="${orderdata[i].order_id}"
                            onclick="orderselectionone(${orderdata[i].order_id},'ready')"
                            class="btn btn-outline-primary"
                          >
                          cooking Started
                          </p>
                        </div>
                      </div>
                    <!-- </div> -->
                  </div>
                  `;
                // tb.innerText=orderData[i].tablenumber;
                var img = document.querySelector(".foodItem_photo");
                // console.log(img);
                // img.setAttribute("src", newPath);
                tb.appendChild(x);
                // console.log(img);
                j = j + 8;
              }
            }
            // console.log("hello")
          }
        }
      });
}
// conformOder
function orderselectionone(id, status) {
  // var value ="false";
  //?value=true
  console.log(id, status);
  const obj = {
    order_status: status,
  };

  console.log(obj);
  fetch(`http://192.168.2.103:50/api/order/${id}`, {
    method: "PUT",
    headers: {
      "content-Type": "application/json",
      // "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("success",data);
    //window.location.href="http://127.0.0.1:5001/Admin/viewOrders.html";
  })
  .catch((err) => {
    console.log("error:",err);
    //window.location.href="http://127.0.0.1:5001/Admin/viewOrders.html";
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

// function hi() {
//   fetch("http://192.168.2.102:85/GetAllDishItems")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }
// var op = document.querySelectorAll("option");
// var s = (op[1].selected = true);
// console.log(s);

//get order informations url => http://192.168.2.103:50/api/order/getallorderlist

function onload()
{
    // const alllist=[];
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
          // history();
        // console.log(alllist);
      });
}
onload();


function load() {
  // const a = orderData.length;
  console.log(orderData);
  console.log(itemData);
  //     console.log(a);
  var r = "rejected";
  console.log(r);
  for (var i = orderData.length - 1; i > 0; i--) {
    // console.log("hi");
    for (var j = 0; j < itemData.length; j++) {
      if (orderData[i].order_status == "conformed") {
        if (orderData[i].item_id == itemData[j].id) {
          var imgpath = itemData[j].imagePath;
          let pathArray = imgpath.split("\\");
          let newPath = pathArray.slice(1).join("\\");
          // console.log(imgpath);
          var p = orderData[i].order_total_cost / orderData[i].quantity;
          var tb = document.getElementById("parentOrder");
          // tb.innerHTML="";
          var x = document.createElement("div");
          x.style.width = "45%";
          x.style.paddingRight = "25px";
          x.innerHTML = `
              <div id="order_list_one" class="p-3 m-3 bg-white w-100 rounded-3">
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
                      onclick="orderselectionone(${orderData[i].order_id},'cooking')"
                      class="btn btn-outline-primary"
                    >
                    cooking Started
                    </p>
                  </div>
                </div>
              <!-- </div> -->
            </div>
            `;
          // tb.innerText=orderData[i].tablenumber;
          var img = document.querySelector(".foodItem_photo");
          // console.log(img);
          // img.setAttribute("src", newPath);
          tb.appendChild(x);
          // console.log(img);
          j = j + 8;
        }
      }
      // console.log("hello")
    }
  }
}
// history();
// let completebuttonClicked = false;
// let rejectedbuttonClicked = false;
// let allbuttonClicked = false;
// var all=document.querySelector("#all");
//   all.addEventListener("click",function(){
//     allbuttonClicked = true;
//     completebuttonClicked = false;
//     rejectedbuttonClicked = false;
//       console.log("event all",allbuttonClicked);
//     })
// var complete = document.querySelector("#complete");
//   complete.addEventListener("click",function(){
//     completebuttonClicked = true;
//     allbuttonClicked = false;
//     rejectedbuttonClicked = false;
//       console.log("event complete",completebuttonClicked);
//     })
// var rejected = document.querySelector("#rejected");
//   rejected.addEventListener("click",function(){
//     rejectedbuttonClicked = true;
//     completebuttonClicked = false;
//     allbuttonClicked = false;
//       console.log("event rejected",rejectedbuttonClicked);
//     })

function history(a,c,r) {
  console.log(orderDatahis);
  console.log(itemDatahis);
  console.log(a,c,r)
  if(a == true)
  {
    // const a = orderData.length;
  console.log(orderDatahis);
  console.log(itemDatahis);
  //     console.log(a);
  // var r = "rejected";
  console.log(r);
  var tb = document.getElementById("order_Cards_In_History");
  tb.innerHTML="";
  for (var i = orderDatahis.length - 1; i > 0; i--) {
    // console.log("hi");
    for (var j = 0; j < itemDatahis.length; j++) {
      if (
        orderDatahis[i].order_status == "rejected" ||
        orderDatahis[i].order_status == "conformed"
      ) {
        if (orderDatahis[i].item_id == itemDatahis[j].id) {
          var imgpath = itemDatahis[j].imagePath;
          let pathArray = imgpath.split("\\");
          let newPath = pathArray.slice(1).join("\\");
          // console.log(imgpath);
          var p = orderDatahis[i].order_total_cost / orderDatahis[i].quantity;
          var x = document.createElement("div");
          x.style.width = "45%";
          x.style.paddingRight = "25px";
          x.innerHTML = `
            <div id="order_list_one" class="p-3 m-3 bg-white w-100 rounded-3">
            <!-- <div id="order_list" class=""> -->
              <div class="d-flex justify-content-between">
                <div class="text-start m-2">
                  <h5>Order #TN-<label>${orderDatahis[i].table_number}</label></h5>
                  <p>${orderDatahis[i].order_datetime}</p>
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
                    <h5>${itemDatahis[j].name}</h5>
                    <p id="dis">${itemDatahis[j].description}</p>
                    <div class="d-flex justify-content-around">
                      <h5>$${p}</h5>
                      <h5>Qty:${orderDatahis[i].quantity}</h5>
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
                  <h3>$${orderDatahis[i].order_total_cost}</h3>
                </div>
                <div class="text-center pt-3">
                <p
                  id="${orderData[i].order_id}"
                  onclick="orderselectionone(${orderData[i].order_id},'cooking')"
                  class="btn btn-outline-primary"
                >
                cooking Started
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
            j=j+15;
          }
          }
          // console.log("hello")
        }
      }

  }
  else if(c==true)
  {
    // const a = orderData.length;
    console.log(orderDatahis);
    console.log(itemDatahis);
    //     console.log(a);
    var r = "rejected";
    console.log("i am in complete",c);
    var tb = document.getElementById("order_Cards_In_History");
    tb.innerHTML="";
    for (var i = orderDatahis.length - 1; i > 0; i--) 
    {
      console.log("i am in complete cross orderdetailshis length",c);
      for (var j = 0; j < itemDatahis.length; j++) 
      {
        if (orderDatahis[i].order_status == "conformed") 
        {
          if (orderDatahis[i].item_id == itemDatahis[j].id) 
          {
            var imgpath = itemDatahis[j].imagePath;
            let pathArray = imgpath.split("\\");
            let newPath = pathArray.slice(1).join("\\");
            // console.log(imgpath);
            var p = orderDatahis[i].order_total_cost / orderDatahis[i].quantity;

            var x = document.createElement("div");
            x.style.width = "45%";
            x.style.paddingRight = "25px";
            x.innerHTML = `
              <div id="order_list_one" class="p-3 m-3 bg-white w-100 rounded-3">
              <!-- <div id="order_list" class=""> -->
                <div class="d-flex justify-content-between">
                  <div class="text-start m-2">
                    <h5>Order #TN-<label>${orderDatahis[i].table_number}</label></h5>
                    <p>${orderDatahis[i].order_datetime}</p>
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
                      <h5>${itemDatahis[j].name}</h5>
                      <p id="dis">${itemDatahis[j].description}</p>
                      <div class="d-flex justify-content-around">
                        <h5>$${p}</h5>
                        <h5>Qty:${orderDatahis[i].quantity}</h5>
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
                    <h3>$${orderDatahis[i].order_total_cost}</h3>
                  </div>
                  <div class="text-center pt-3">
                    <p
                      class="btn btn-primary"
                    >
                      <label
                        style="font-size: 20px; width: 120px"
                      >${orderDatahis[i].order_status}</label>
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
            j=j+15;
          }
        }
            // console.log("hello")
      }
    }

  }
  else if(r==true)
  {
    // const a = orderData.length;
  console.log(orderDatahis);
  console.log(itemDatahis);
  //     console.log(a);
  var r = "rejected";
  console.log(r);
  var tb = document.getElementById("order_Cards_In_History");
  tb.innerHTML="";
  for (var i = orderDatahis.length - 1; i > 0; i--) {
    // console.log("hi");
    for (var j = 0; j < itemDatahis.length; j++) {
      if (
        orderDatahis[i].order_status == "rejected"
      ) {
        if (orderDatahis[i].item_id == itemDatahis[j].id) {
          var imgpath = itemDatahis[j].imagePath;
          let pathArray = imgpath.split("\\");
          let newPath = pathArray.slice(1).join("\\");
          // console.log(imgpath);
          var p = orderDatahis[i].order_total_cost / orderDatahis[i].quantity;
          var x = document.createElement("div");
          x.style.width = "45%";
          x.style.paddingRight = "25px";
          x.innerHTML = `
            <div id="order_list_one" class="p-3 m-3 bg-white w-100 rounded-3">
            <!-- <div id="order_list" class=""> -->
              <div class="d-flex justify-content-between">
                <div class="text-start m-2">
                  <h5>Order #TN-<label>${orderDatahis[i].table_number}</label></h5>
                  <p>${orderDatahis[i].order_datetime}</p>
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
                    <h5>${itemDatahis[j].name}</h5>
                    <p id="dis">${itemDatahis[j].description}</p>
                    <div class="d-flex justify-content-around">
                      <h5>$${p}</h5>
                      <h5>Qty:${orderDatahis[i].quantity}</h5>
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
                  <h3>$${orderDatahis[i].order_total_cost}</h3>
                </div>
                <div class="text-center pt-3">
                  <p
                    class="btn btn-primary"
                  >
                    <label
                      style="font-size: 20px; width: 120px"
                    >${orderDatahis[i].order_status}</label>
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
            j=j+15;
          }
          }
          // console.log("hello")
        }
      }

  }
  else{
    // const a = orderData.length;
  console.log(orderDatahis);
  console.log(itemDatahis);
  //     console.log(a);
  var r = "rejected";
  console.log(r);
  var tb = document.getElementById("order_Cards_In_History");
  tb.innerHTML="";
  for (var i = orderDatahis.length - 1; i > 0; i--) {
    // console.log("hi");
    for (var j = 0; j < itemDatahis.length; j++) {
      if (
        orderDatahis[i].order_status == "rejected" ||
        orderDatahis[i].order_status == "conformed"
      ) {
        if (orderDatahis[i].item_id == itemDatahis[j].id) {
          var imgpath = itemDatahis[j].imagePath;
          let pathArray = imgpath.split("\\");
          let newPath = pathArray.slice(1).join("\\");
          // console.log(imgpath);
          var p = orderDatahis[i].order_total_cost / orderDatahis[i].quantity;
          var x = document.createElement("div");
          x.style.width = "45%";
          x.style.paddingRight = "25px";
          x.innerHTML = `
            <div id="order_list_one" class="p-3 m-3 bg-white w-100 rounded-3">
            <!-- <div id="order_list" class=""> -->
              <div class="d-flex justify-content-between">
                <div class="text-start m-2">
                  <h5>Order #TN-<label>${orderDatahis[i].table_number}</label></h5>
                  <p>${orderDatahis[i].order_datetime}</p>
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
                    <h5>${itemDatahis[j].name}</h5>
                    <p id="dis">${itemDatahis[j].description}</p>
                    <div class="d-flex justify-content-around">
                      <h5>$${p}</h5>
                      <h5>Qty:${orderDatahis[i].quantity}</h5>
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
                  <h3>$${orderDatahis[i].order_total_cost}</h3>
                </div>
                <div class="text-center pt-3">
                  <p
                    class="btn btn-primary"
                  >
                    <label
                      style="font-size: 20px; width: 120px"
                    >${orderDatahis[i].order_status}</label>
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
            j=j+15;
          }
          }
          // console.log("hello")
        }
      }
  }
}