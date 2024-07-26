const takeWatches = function () {
  const URL = "https://striveschool-api.herokuapp.com/api/product/";
  const ath =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTRhY2YyNjBjYzAwMTVjYzBkZDAiLCJpYXQiOjE3MjE5ODI0NzYsImV4cCI6MTcyMzE5MjA3Nn0.wx-24D6s38njK1h_SF8Vo_7B1N4UQ8i5Y7-8EtL2S5k";
    fetch(URL, {
        headers: {
            'Authorization': `Bearer ${ath}`
        }
    })
    .then((response) => {
        console.log(response);
        if(response.ok) {
            return response.json();
        } else {
            throw new Error ('Non troviamo i tuoi Orologi')
        }
    })
    .then((data) => {
        console.log('Ecco i tuoi orologi', data);
        data.forEach(element => {
            const watchCol = `
            <div class="col">
                    <div class="card">
                        <img src=${data.imageUrl}
                    " class="card-img-top" alt="any">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">${data.description}</p>
                            <p class="card-text">${data.price} €</p>
                            <a href="./dettagli.html?id=${data._id}" class="btn btn-primary">Dettagli</a>
                        </div>
                    </div>
                </div>`
               const watchesRow = document.getElementById('watchesRow');
               watchesRow.innerHTML += watchCol
            
        });
    })
    .catch((error) => {
        conaole.log('Non ci arrivi', error);
    })
};

takeWatches()
