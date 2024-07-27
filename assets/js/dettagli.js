const URL = "https://striveschool-api.herokuapp.com/api/product/";
export const ath =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTRhY2YyNjBjYzAwMTVjYzBkZDAiLCJpYXQiOjE3MjE5ODI0NzYsImV4cCI6MTcyMzE5MjA3Nn0.wx-24D6s38njK1h_SF8Vo_7B1N4UQ8i5Y7-8EtL2S5k";

const urlParams = new URLSearchParams(window.location.search);
export const productId = urlParams.get("id");

const takeProduct = function () {
  fetch(`${URL}${productId}`, {
    headers: {
      Authorization: `Bearer ${ath}`,
    },
  });
}
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Stai sbagliondo qualcosa');
    }
  })
  .then((product) => {
    console.log('Ecco il prodotto', product);

  })
  .catch((error) => {
    console.log('Non ci arrivi', error);
  });

