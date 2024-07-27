const URL = "https://striveschool-api.herokuapp.com/api/product/";
const ath =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTRhY2YyNjBjYzAwMTVjYzBkZDAiLCJpYXQiOjE3MjE5ODI0NzYsImV4cCI6MTcyMzE5MjA3Nn0.wx-24D6s38njK1h_SF8Vo_7B1N4UQ8i5Y7-8EtL2S5k";

const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get("id")

const takeProduct = function () {
  fetch(`${URL}${productId}`, {
    headers: {
      Authorization: `Bearer ${ath}`,
    },
  })
    .then((response) => {
      console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Stai sbagliondo qualcosa")
      }
    })
    .then((product) => {
      const productInDetail = document.getElementById("productInDetail")
      const detailCol = `
        <div class="col-8 text-center">
          <div class="card">
            <img src="${product.imageUrl}" class="card-img-top" alt="any">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">${product.price}</p>
              <a href="./backoffice.html?id=${product._id}" class="btn btn-primary">Edit/a>
              <button class="btn btn-primary" onxlick="deleteProduct()">Delete</button>
            </div>
          </div>
        </div>`
        productInDetail.innerHTML += detailCol
    })
    .catch((error) => {
      console.log("Non ci arrivi", error)
    });
};

const deleteProduct = function () {
  fetch(`${URL}${productId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        alert("PRODOTOO ELIMINATO CON SUCCESSO");
      } else {
        throw new Error("Hai un problema con la response");
      }
    })
    .catch((error) => {
      console.log("Errore", error);
    });
};
