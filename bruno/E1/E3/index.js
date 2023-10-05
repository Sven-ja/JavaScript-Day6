let mybooksv1 = JSON.stringify(books)
let mybooks = JSON.parse(mybooksv1);

 console.table(mybooks)




 let bookCard = document.getElementById("card")



 mybooks.forEach((index)=> {
    let color = "danger"
    if(index.read == "true"){
        color = "success"
    }
     bookCard.innerHTML += `  
     <div class="card" style="width: 18rem; height: 600px;">
     <img src="${index.img}" class="card-img-top" style="height: 400px;" "alt="...">
     <div class="card-body d-flex flex-wrap">
       <h5 class="card-title w-100">${index.title}</h5>
       <p class="card-text w-100">${index.author}</p>
       <a href="#" class="btn btn-${color} align-self-end ">${index.read}</a>
     </div>
   </div>
     
     
     
     `
     
 });