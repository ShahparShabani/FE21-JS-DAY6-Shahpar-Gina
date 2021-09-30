console.log(books);

let booksParse = JSON.parse(books);
console.log(booksParse.length);

for (let i=0 ;  i < booksParse.length ; i++) {
  let readParse = JSON.parse(booksParse[i].read);

  document.getElementById(
    "result"
  ).innerHTML += `<div class="col-4"><div class="card" style="width: 18rem;">
    <img class=small-img src="../img/${
        booksParse[i].image
    }" class="card-img-top" alt="small car photo">
    <div class="card-body ${readParse ? "read" : "not-read"}">
      <h5 class="card-title"><a class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
      ${booksParse[i].title}
    </a></h5>
       
    </div>
    </div>
  </div>  
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered ">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${booksParse[i].title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img class=big-img src="../img/${
            booksParse[i].image
        }" class="card-img-top" alt="big car photo">
        <p>Description: ${booksParse[i].shortDescription}</p>
        <p>Pages: ${booksParse[i].pageCount}</p>
        <p>Read: ${
            booksParse[i].read
          } </p> 
          <br/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
  `;
}
