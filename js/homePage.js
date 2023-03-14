// fetching data from json file
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
