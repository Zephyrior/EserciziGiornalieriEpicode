const loadButton = document.getElementById("loadButton");

/*loadButton.addEventListener("click", function () {
  fetch("https://api.pexels.com/v1/search?query=hamsters", {
    //method: "GET",
    headers: {
      Authorization: "gWFTitwcX5uRfsPU2UpajQfiugGKjEb5Wl7xYw6JfaSAvBFaPR6xXngh",
    },
  })
    .then((resp) => {
      console.log(resp);

      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Ci dispiace ma non siamo riusciti a reperire il dato");
      }
    })
    .then((imgList) => {
      console.log(imgList.photos);

      const row = document.getElementById("imgContRow");

      for (let i = 0; i < imgList.photos.length; i++) {
        const element = imgList.photos[i];

        const imgCol = document.createElement("div");
        imgCol.innerHTML = `<div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                      <img
                        src="${element.src.small}"
                        class="bd-placeholder-img card-img-top"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Lorem Ipsum</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a natural
                          lead-in to additional content. This content is a little bit
                          longer.
                        </p>
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>`;
        row.appendChild(imgCol);
      }
      /*imgList.forEach(img => {
            console.log(img);
      
            const imgCol = document.createElement("div");
            imgCol.innerHTML = `<div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                      <img
                        src="${img.src.original}"
                        class="bd-placeholder-img card-img-top"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Lorem Ipsum</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a natural
                          lead-in to additional content. This content is a little bit
                          longer.
                        </p>
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>`;
            row.appendChild(imgCol);
          });*/
//    })
//    .catch((err) => console.log(err));
//});*/

fetch("https://api.pexels.com/v1/search?query=hamsters", {
  method: "GET",
  headers: {
    Authorization: "gWFTitwcX5uRfsPU2UpajQfiugGKjEb5Wl7xYw6JfaSAvBFaPR6xXngh",
  },
})
  .then((resp) => {
    console.log(resp);

    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("Ci dispiace ma non siamo riusciti a reperire il dato");
    }
  })
  .then((imgList) => {
    console.log(imgList.photos);

    const row = document.getElementById("imgContRow");

    for (let i = 0; i < imgList.photos.length; i++) {
      const element = imgList.photos[i];

      const imgCol = document.createElement("div");
      imgCol.classList.add("col-md-4");

      const card = document.createElement("div");
      card.classList.add("card", "mb-4", "shadow-sm");
      card.innerHTML = `<img
                    src="${element.src.small}"
                    class="bd-placeholder-img card-img-top"
                  />`;
      imgCol.appendChild(card);

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      cardBody.innerHTML = `<h5 class="card-title">${element.photographer}</h5>
                    <p class="card-text">
                      ${element.alt}.
                    </p>`;
      card.appendChild(cardBody);
      const cardBody2 = document.createElement("div");
      cardBody2.classList.add("d-flex", "justify-content-between", "align-items-center");
      cardBody.appendChild(cardBody2);

      const btnGrp = document.createElement("div");
      btnGrp.classList.add("btn-group");
      cardBody.appendChild(btnGrp);

      const viewButton = document.createElement("button");
      viewButton.innerHTML = "View";
      viewButton.classList.add("btn", "btn-sm", "btn-outline-secondary");

      const hideButton = document.createElement("button");
      hideButton.innerHTML = "Hide";
      hideButton.classList.add("btn", "btn-sm", "btn-outline-secondary");

      btnGrp.appendChild(viewButton);
      btnGrp.appendChild(hideButton);

      const idElem = document.createElement("small");
      idElem.classList.add("text-muted");
      idElem.innerHTML = `${element.id}`;
      btnGrp.appendChild(idElem);
      row.appendChild(imgCol);
    }
  })
  .catch((err) => console.log(err));
