
console.log("hello");
getValueFromController()
function getValueFromController() {
    fetch("http://192.168.2.103:50/api/order/getallorderlist")
    .then((response) => response.json())
    .then((orderdata) => {
      console.log(orderdata);
               loop();
               function loop() {
                   var i = 0;
                   var k = 5;
                   var p = 0;
                   slide(i, k, p);
                   function slide(j, x, p) {
                       if (p > 4) {
                           p = 0;
                       } else {
                           p = p + 1;
                       }
                       var q = 0;
                       for (j; j < x; j++) {
                           var id = document.getElementById("id" + q);
                           id.innerHTML = orderdata[j].table_number;
                           document.getElementById("name" + q).innerHTML = orderdata[j].order_total_cost;
                           var did = document.getElementById("email" + q).innerHTML = orderdata[j].order_datetime;
                           document.getElementById("phone" + q).innerHTML = orderdata[j].order_status;
                           document.getElementById("address" + q).innerHTML = orderdata[j].destination_country;

                           // ------- Date Checker ------------

                           const today = new Date();
                           let tomorrow = new Date();
                           tomorrow.setDate(today.getDate() + 1);

                           //  -------------  Date based Color Changer

                           if (today.toDateString() === new Date(did).toDateString()) {
                               console;
                               // document.getElementById("row" + q).style.color = "white";
                               document.getElementById("id" + q).style.background = "red";
                               document.getElementById("name" + q).style.background = "red";
                               document.getElementById("email" + q).style.background = "red";
                               document.getElementById("phone" + q).style.background = "red";
                               document.getElementById("address" + q).style.background = "red";
                               document.getElementById("id" + q).style.color = "white";
                               document.getElementById("name" + q).style.color = "white";
                               document.getElementById("email" + q).style.color = "white";
                               document.getElementById("phone" + q).style.color = "white";
                               document.getElementById("address" + q).style.color = "white";
                           } 
                           else if (tomorrow.toDateString() === new Date(did).toDateString()) {
                               // document.getElementById("row" + q).style.color = "black";
                               document.getElementById("id" + q).style.background = "yellow";
                               document.getElementById("name" + q).style.background = "yellow";
                               document.getElementById("email" + q).style.background = "yellow";
                               document.getElementById("phone" + q).style.background = "yellow";
                               document.getElementById("address" + q).style.background = "yellow";
                               document.getElementById("id" + q).style.color = "black";
                               document.getElementById("name" + q).style.color = "black";
                               document.getElementById("email" + q).style.color = "black";
                               document.getElementById("phone" + q).style.color = "black";
                               document.getElementById("address" + q).style.color = "black";
                           } 
                           else {
                               // document.getElementById("row" + j).style.color = "white";
                               // document.getElementById("row" + q).style.color = "red";
                               // console.log("row" + q);
                               document.getElementById("id" + q).style.background = "black";
                               document.getElementById("name" + q).style.background = "black";
                               document.getElementById("email" + q).style.background = "black";
                               document.getElementById("phone" + q).style.background = "black";
                               document.getElementById("address" + q).style.background = "black";
                               document.getElementById("id" + q).style.color = "white";
                               document.getElementById("name" + q).style.color = "white";
                               document.getElementById("email" + q).style.color = "white";
                               document.getElementById("phone" + q).style.color = "white";
                               document.getElementById("address" + q).style.color = "white";
                           }
                           q++;
                           //console.log(q);
                       }

                       // console.log(orderdata.length);
                       if (orderdata.length <= x) {
                           j = 0;
                           x = 5;
                           p = 0;

                           setTimeout(function () {
                               slide(j, x, p);
                           }, 3000);
                       } else {
                           j = p + 0;
                           x = p + 5;

                           setTimeout(function () {
                               slide(j, x, p);
                           }, 3000);
                       }
                   }
               }
        })
}
//foreach(var item in Model)
//{
//    <tr>
//        <td> @item.Customer_Name</td>
//        <td>@item.destination_country </td>
//        <td> @item.order_status</td>
//        <td>@item.delivery_date </td>
//        <td>
//            @Html.ActionLink("Edit", "Edit", new {orderid = item.orderid}) |
//            @Html.ActionLink("Details", "Details", new {orderid = item.orderid}) |
//            @Html.ActionLink("Delete", "Delete", new {orderid = item.orderid})
//        </td>
//    </tr>
//}

