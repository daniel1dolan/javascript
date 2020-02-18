let fullCharList = [];
let list = document.querySelector("ul");
for (let index = 0; index <= 64; index++) {
  fetch(
    `https://www.anapioficeandfire.com/api/characters?page=${index}&pageSize=50`
  )
    .then(response => {
      return response.json();
    })
    .then(characters => {
      fullCharList = [...fullCharList, ...characters];
    })
    .then(() => {
      if (index == 64) {
        console.log(fullCharList.length);
        for (let p = 0; p < fullCharList.length; p++) {
          let listItems = document.createElement("li");
          listItems.innerText = fullCharList[p].name;
          list.append(listItems);
        }
      }
    });
}
