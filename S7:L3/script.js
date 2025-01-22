fetch("https://striveschool-api.herokuapp.com/books")
  .then((libriObj) => {
    if (libriObj.ok) {
      return libriObj.json();
    }
  })
  .then((booksObj) => {
    console.log(booksObj);
    const colletions = document.getElementById("bookCollections");
    const cart = document.getElementById("cart")
    cart.classList.add("col")

    for (let i = 0; i < booksObj.length; i++) {
      const element = booksObj[i];

      const col = document.createElement("div");
      col.classList.add("col", "g-3");

      /*col.innerHTML = `<div class="card">
                    <img src=${element.img} class="card-img-top" alt="${element.title}">
                    <div class="card-body">
                      <h5 class="card-title">${element.title}</h5>
                      <p class="card-text">Price: $ ${element.price}</p>
                      <button class="btn btn-danger btn-sm">Delete</button>
                      <button type="submit" class="btn btn-primary btn-sm">Add to Cart</button>
                    </div>
                  </div>`;*/
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<img src=${element.img} class="card-img-top" alt="${element.title}">`;
      col.appendChild(card);

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      cardBody.innerHTML = `<h5 class="card-title">${element.title}</h5>
                      <p class="card-text">Price: $ ${element.price}</p>`;
      card.appendChild(cardBody);
      const delButton = document.createElement("button");
      delButton.classList.add("btn", "btn-danger", "btn-sm", "me-1");
      delButton.innerHTML = "Delete";
      cardBody.appendChild(delButton);
      const carButton = document.createElement("button");
      carButton.classList.add("btn", "btn-primary", "btn-sm");
      carButton.innerHTML = "Add to cart";
      cardBody.appendChild(carButton);
      colletions.appendChild(col);

      delButton.addEventListener("click", function () {
        card.remove();
      });

      /*const col2 = document.createElement("div");
      col2.classList.add("col");
      cart.appendChild(col2);*/

      carButton.addEventListener("click", function (){
        card.remove();
        cart.appendChild(card);
      });
    }
  })
  .catch((err) => console.log(err));
