// var buttonActive = document.querySelector(".Button");
// console.log(buttonActive);
// buttonActive.addEventListener('click',function(){
//     if(buttonActive=="Button p-4")
//     {
//         buttonActive.classList.add('active');
//     }
// })


function active(num)
{
    const home =document.getElementById("core_container_home");
    const orderHistory =document.getElementById("core_container_Order-History");
    const Messages =document.getElementById("core_container_Messages");
    const Statistics =document.getElementById("core_container_Statistics");
    const Setting =document.getElementById("core_container_Setting");

    const buttonHome =document.getElementById("home");
    const buttonOrderHistory =document.getElementById("Order_History");
    const buttonMessages =document.getElementById("Messages");
    const buttonStatistics =document.getElementById("Statistics");
    const buttonSetting =document.getElementById("Setting");
    if(num==1){
        home.style.display="block";
        orderHistory.style.display="none";
        Messages.style.display="none";
        Statistics.style.display="none";
        Setting.style.display="none";
        buttonHome.classList.add('active');
        buttonOrderHistory.classList.remove('active');
        buttonMessages.classList.remove('active');
        buttonStatistics.classList.remove('active');
        buttonSetting.classList.remove('active');

    }
    else if(num==2){ 
        home.style.display="none";
        orderHistory.style.display="block";
        Messages.style.display="none";
        Statistics.style.display="none";
        Setting.style.display="none";
        buttonHome.classList.remove('active');
        buttonOrderHistory.classList.add('active');
        buttonMessages.classList.remove('active');
        buttonStatistics.classList.remove('active');
        buttonSetting.classList.remove('active');
    }
    else if(num==3){ 
        home.style.display="none";
        orderHistory.style.display="none";
        Messages.style.display="block";
        Statistics.style.display="none";
        Setting.style.display="none";
        buttonHome.classList.remove('active');
        buttonOrderHistory.classList.remove('active');
        buttonMessages.classList.add('active');
        buttonStatistics.classList.remove('active');
        buttonSetting.classList.remove('active');
    }
    else if(num==4){ 
        home.style.display="none";
        orderHistory.style.display="none";
        Messages.style.display="none";
        Statistics.style.display="block";
        Setting.style.display="none";
        buttonHome.classList.remove('active');
        buttonOrderHistory.classList.remove('active');
        buttonMessages.classList.remove('active');
        buttonStatistics.classList.add('active');
        buttonSetting.classList.remove('active');
    }
    else if(num==5){ 
        home.style.display="none";
        orderHistory.style.display="none";
        Messages.style.display="none";
        Statistics.style.display="none";
        Setting.style.display="block";
        buttonHome.classList.remove('active');
        buttonOrderHistory.classList.remove('active');
        buttonMessages.classList.remove('active');
        buttonStatistics.classList.remove('active');
        buttonSetting.classList.add('active');
    }
}

// conformOder
function orderselectionone(num)
{
    const parentOrderList = document.getElementById("order_list_one");
    // const order = document.getElementById("order_list");
    const orderCardsInHistory = document.getElementById("order_Cards_In_History");
    console.log("inside fun",parentOrderList);
    // const firstOrder = document.getElementById("first_order");
    if (num==1){
        console.log(1,orderCardsInHistory);
        var a = orderCardsInHistory.appendChild(parentOrderList);
        // parentOrderList.style.display="none";
        console.log(a);
    }
}
function orderselectiontwo(num)
{
    const parentOrderList = document.getElementById("order_list_two");
    // const order = document.getElementById("order_list");
    const orderCardsInHistory = document.getElementById("order_Cards_In_History");
    console.log("inside fun",parentOrderList);
    // const firstOrder = document.getElementById("first_order");
    if (num==1){
        console.log(1,orderCardsInHistory);
        var a = orderCardsInHistory.appendChild(parentOrderList);
        // parentOrderList.style.display="none";
        console.log(a);
    }
}