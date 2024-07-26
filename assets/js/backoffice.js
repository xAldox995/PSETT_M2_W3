const addWatch = function () {
  const URL = "https://striveschool-api.herokuapp.com/api/product/";
  const ath =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTRhY2YyNjBjYzAwMTVjYzBkZDAiLCJpYXQiOjE3MjE5ODI0NzYsImV4cCI6MTcyMzE5MjA3Nn0.wx-24D6s38njK1h_SF8Vo_7B1N4UQ8i5Y7-8EtL2S5k";
  const urlParams = new URLSearchParams(location.search);
  const productId = urlParams.get('id');

  if (productId) {
    fetch(`${URL}${productId}`, {
      headers: {
        Authorization: `Bearer ${ath}`
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Non troviamo i tuoi Orologi')
        }
      })
      .fetch((product) => {
        document.getElementById('brand').value = product.brand;
        document.getElementById('name').value = product.name;
        document.getElementById('description').value = product.description;
        document.getElementById('price').value = product.price;
        document.getElementById('imageUrl').value = product.imageUrl;
      })
      .catch((error) => {
        conaole.log('Non ci arrivi', error);
      })

    const productForm = document.getElementById('productForm')
    productForm.addEventListener('submit', e => {
      e.preventDefault();
      const product = {
        brand: document.getElementById('brand').value,
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: document.getElementById('price').value,
        imageUrl: document.getElementById('imageUrl').value
      };
      const method = productId ? 'PUT' : 'POST';
      const endpoint = productId ? `${URL}${productId}` : URL;
      fetch(endpoint, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ath}`
        },
        body: JSON.stringify(product)
      })
      .then((response) => {
        if (response.ok) {
          alert('Product saved successfully');
          window.location.href = 'home.html';
        } else {
          alert("ERRORE NELL' INSERIMENT")
        throw new Error('Errore nel salvataggio del prodotto')
        }
        
      })
      
      .catch(error => console.error('Error saving product:', error));
    });
    }
  }





//   fetch(URL, {
//     headers: {
//       'Authorization': `Bearer ${ath}`
//     }
//   })
// };

// addWatch();
// const getWatchId = function (id) {
//   return fetch(URL + id, {
//     headers: {
//       "Authorization": `Bearer ${ath}`
//     }
//   })
//     .then((response) => {
//       if (response)
//   });
// }


// class Watch {
//   constructor(_brand, _name, _price, _imageUrl, _descripton) {
//     this.brand = _brand;
//     this.name = _name;
//     this.price = _price;
//     this.imageUrl = _imageUrl;
//     this.description = _descripton;
//   }
// }
// const brandValue = document.getElementById("brand").value;
// const namedValue = document.getElementById("name").value;
// const priceValue = document.getElementById("price").value;
// const imageUrlValue = document.getElementById("imageUrl").value;
// const descriptionValue = document.getElementById("description").value;
// const newWatch = new Watch(
//   brandValue,
//   namedValue,
//   priceValue,
//   imageUrlValue,
//   descriptionValue
// )

// const productForm = document.getElementById("productForm");
// productForm.addEventListener("submit", function (e) {

// });
// const form = document.getElementById('productForm');
// const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get('id')
