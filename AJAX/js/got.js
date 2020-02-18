$(() => {
  let house_helper = [
    "Stark",
    "Tyrell",
    "Arryn",
    "Greyjoy",
    "Lannister",
    "Martell",
    "Baratheon",
    "Tully",
    "Targaryen"
  ];
  let house_data = [];
  let ids = [362, 7, 395, 169, 229, 16, 398, 285, 378];
  for (let houses in ids) {
    console.log(ids[houses]);
    let url = `https://www.anapioficeandfire.com/api/houses/${ids[houses]}`;
    fetch(url)
      .then(response => response.json())
      .then(obj => {
        house_data.push(obj);
        console.log(obj);
        let house_name = house_helper[houses];
        console.log(house_data);
        $(`#${house_name}-info`).text(
          house_data[houses].coatOfArms +
            "<br></br>" +
            " Sworn Members:" +
            house_data[houses].swornMembers.length
        );
      });
  }

  for (let houses in house_data) {
  }
  let founder = i => {
    fetch(`${house_data[i].founder}`)
      .then(response => response.json())
      .then(obj => {
        return obj[0].name;
      });
  };
  console.log(house_data);

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
