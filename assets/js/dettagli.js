const URL = "https://striveschool-api.herokuapp.com/api/product/";
const ath =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTRhY2YyNjBjYzAwMTVjYzBkZDAiLCJpYXQiOjE3MjE5ODI0NzYsImV4cCI6MTcyMzE5MjA3Nn0.wx-24D6s38njK1h_SF8Vo_7B1N4UQ8i5Y7-8EtL2S5k";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const takeProduct = function() {
    fetch(`${URL}${productId}`, {
        headers: {
          Authorization: `Bearer ${ath}`,
        },
      })
        .then((response) => response.json())
        .then((product) => {
          document.getElementById("product-image").src = product.imageUrl;
          document.getElementById("product-name").innerText = product.name;
          document.getElementById("product-description").innerText =
            product.description;
          document.getElementById("product-price").innerText = `$${product.price}`;
          document.getElementById(
            "edit-product"
          ).href = `backoffice.html?id=${product._id}`;
          document.getElementById(
            "buy-product"
          ).href = `purchase.html?id=${product._id}`;
        })
        .catch((error) => console.error("Error fetching product details:", error));
}
