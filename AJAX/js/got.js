$(() => {
  let house_helper = [
    "Stark",
    "Arryn",
    "Tully",
    "Greyjoy",
    "Lannister",
    "Baratheon",
    "Tyrell",
    "Martell",
    "Targaryen"
  ];
  let house_data = [];
  let ids = [362, 7, 395, 169, 229, 16, 398, 285, 378];
  let promiseList = [];
  for (let houses in ids) {
    console.log(ids[houses]);
    console.log(1);
    let url = `https://www.anapioficeandfire.com/api/houses/${ids[houses]}`;
    promiseList.push(fetch(url));
  }
  let incrementer = 0;
  Promise.all(promiseList)
    .then(responses => Promise.all(responses.map(house => house.json())))
    .then(houses =>
      houses.forEach(house => {
        console.log("hey guys");
        console.log(house);
        let house_name = house_helper[incrementer];
        $(`#${house_name}-info`).text(
          house.name +
            ". Coat of Arms: " +
            house.coatOfArms +
            ". Sworn Members:" +
            house.swornMembers.length
        );
        incrementer++;
      })
    );

  //   house_data.push(obj);
  //   console.log(obj);
  //   let house_name = house_helper[houses];
  //   console.log(house_name);
  //   console.log(2);
  //   $(`#${house_name}-info`).text(
  //     house_data[houses].name +
  //       ". Coat of Arms: " +
  //       house_data[houses].coatOfArms +
  //       ". Sworn Members:" +
  //       house_data[houses].swornMembers.length
  //   );
  // });

  let founder = i => {
    fetch(`${house_data[i].founder}`)
      .then(response => response.json())
      .then(obj => {
        return obj[0].name;
      });
  };

  $("#Arryn").click(() => {
    $("#Arryn-info").toggle();
  });
  $("#Baratheon").click(() => {
    $("#Baratheon-info").toggle();
  });
  $("#Greyjoy").click(() => {
    $("#Greyjoy-info").toggle();
  });
  $("#Lannister").click(() => {
    $("#Lannister-info").toggle();
  });
  $("#Martell").click(() => {
    $("#Martell-info").toggle();
  });
  $("#Stark").click(() => {
    $("#Stark-info").toggle();
  });
  $("#Targaryen").click(() => {
    $("#Targaryen-info").toggle();
  });
  $("#Tully").click(() => {
    $("#Tully-info").toggle();
  });
  $("#Tyrell").click(() => {
    $("#Tyrell-info").toggle();
  });
});
