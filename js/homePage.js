// fetching data from json file
// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("json Data: " + data);
//   });

const SidebarMenuArray = [];

// Fetchhing from API
fetch("http://192.168.2.102:85/GetAllSidebarItems")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // creating object from fetched data
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
    console.log(SidebarMenuArray);
  });
const DishItemsArray = [];
// Fetchhing from API
fetch("http://192.168.2.102:85/GetAllDishItems")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // creating object from fetched data
    data.forEach((item) => {
      const obj = { ...item }; // spread operator (...)
      // pushing objects to array
      DishItemsArray.push(obj);
    });
    console.log(DishItemsArray);
  });
