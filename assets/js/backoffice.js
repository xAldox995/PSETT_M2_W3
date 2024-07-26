const addWatch = function () {
    const URL = "https://striveschool-api.herokuapp.com/api/product/";
    const ath =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTRhY2YyNjBjYzAwMTVjYzBkZDAiLCJpYXQiOjE3MjE5ODI0NzYsImV4cCI6MTcyMzE5MjA3Nn0.wx-24D6s38njK1h_SF8Vo_7B1N4UQ8i5Y7-8EtL2S5k";
      fetch(URL, {
        headers: {
            'Authorization': `Bearer ${ath}`
        }
    })
  };
  
  addWatch();
//   const getWatchId = function (id) {
//     return fetch(URL + id, {
//         headers: {
//             "Authorization": `Bearer ${ath}`
//         }
//     })
//     .then((response) => {
//         if (response)
//     });
// }


class Watch {
  constructor(_brand, _name, _price, _imageUrl, _descripton) {
    this.brand = _brand;
    this.name = _name;
    this.price = _price;
    this.imageUrl = _imageUrl;
    this.description = _descripton;
  }
}

const productForm = document.getElementById("productForm");
productForm.addEventListener("submit", function (e) {
  const brandValue = document.getElementById("brand").value;
  const namedValue = document.getElementById("name").value;
  const priceValue = document.getElementById("price").value;
  const imageUrlValue = document.getElementById("imageUrl").value;
  const descriptionValue = document.getElementById("description").value;
});

const newWatch = new Watch(
  brandValue,
  namedValue,
  priceValue,
  imageUrlValue,
  descriptionValue
);
