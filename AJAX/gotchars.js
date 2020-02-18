$(() => {
  let i = 0;
  let fullCharList = [];
  for (let p = 0; p <= 50; p++) {
    fetch(
      `https://www.anapioficeandfire.com/api/characters?page=${p}&pageSize=50`
    )
      .then(response => response.json())
      .then(charArray => {
        fullCharList = [...fullCharList, ...charArray];
      })
      .then(() => {
        console.log(fullCharList);
      });
  }
});
