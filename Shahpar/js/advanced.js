console.log(books);

let booksParse =  JSON.parse(books);
console.log(booksParse.length)

for (val of booksParse) {

    let readParse = JSON.parse(val.read)
   
    document.getElementById('result').innerHTML += `<div class="col-4"><div class="card" style="width: 18rem;">
    <img class=small-img src="../img/${val.image}" class="card-img-top" alt="...">
    <div class="card-body ${readParse ? "read" : "not-read"}">
      <h5 class="card-title">${val.title}</h5>
      <p class="card-text">${val.shortDescription}</p> <br/> <p>${val.read} </p>
      <a href="#" class="btn btn-primary"></a>
    </div>
    </div>
  </div>`
}