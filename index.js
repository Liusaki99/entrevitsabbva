console.log("Hola mundo desde js")

const request = new XMLHttpRequest();
request.open('GET', 'https://api.datos.gob.mx/v1/calidadAire', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(this.response);
    console.log("Data: ",data.results);
    let insertar = "";
    for (let items of data.results) {
        for( let itemsinstations of items.stations)
        {
            let index = [];
            for ( let indexes of itemsinstations.indexes){
                index = indexes
            }

            insertar += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${itemsinstations.name}</h5>
                    <p class="card-text">calculationTime: ${index.calculationTime}</p>
                    <p class="card-text">scale: ${index.scale}</p>
                    <h6> Location</h6>
                    <p class="card-text">alt: ${itemsinstations.location.alt}</p>
                    <p class="card-text">lat: ${itemsinstations.location.lat}</p>
                    <p class="card-text">long: ${itemsinstations.location.long}</p>
                </div>
            </div>
            `
            console.log(itemsinstations);
        }
      }
      document.getElementById("contenido").innerHTML = insertar;
  } else {
    console.log('Ha ocurrido un error conc ódigo ' + request.status);
  }
}

request.send();