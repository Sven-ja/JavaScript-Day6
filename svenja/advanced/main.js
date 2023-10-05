const bookArr = JSON.parse(books);
console.table(bookArr);

for (i = 0; i < bookArr.length; i++) {
    let read;
    let color = "danger";

    if (bookArr[i].read) {
        read = "Already read";
        color = "success";
    } else {
        read = "Not read yet";
    };

    document.querySelector("#books").innerHTML += `
<div class="card" style="width: 18rem;">
  <img src="${bookArr[i].img}" class="card-img-top img-fluid p-3" style="height: 75%;" alt="...">
  <div class="card-body">
    <h5 class="card-title">${bookArr[i].title}</h5>
    <p class="card-text">${bookArr[i].author}</p>
    <a href="#" class="btn btn-${color}">${read}</a>
  </div>
</div>
`
};