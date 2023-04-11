/* const getProducto = () => {

    return new Promise((resolve, reject) => {
        if (producto == null) {
            reject(new Error("Producto no existe"))
        }
        setTimeout(() => { resolve (producto) }, 2000);
    });

}; */


function getProducto() { // Con fetch
  let promesa = fetch("https://fakestoreapi.com/products", {
    method: "GET"
  });
  promesa.then((response) => {
    response.json().then((prods) => {
      // crear cards(prods)
      console.log("prods=>json()");
      console.log(prods);
      //Aqui va mi innerHTML (Pendiente)
      createCards(prods);
    }// prods
    )//then json
      .catch((err) => {
        console.error("Error en el formato de la respuesta: " + err.message);
      }); // catch json
  }//response
  )//then
    .catch((error) => {
      console.error("Error en la respuesta: " + error.message);
    }); // catch promesas
} //getProducto

getProducto();
/*  .then((prod) => console.log(prod))
 .catch((err) => console.log(err.message)); */

let mainProds = document.getElementById("mainProds");

function createCards(prods) {
  prods.forEach(prod => {
    mainProds.insertAdjacentHTML("beforeend",

      `<div class="card col" style="width: 18rem;">
  <img src="${prod.image}" class="card-img-top" alt="${prod.description}" style= "max-width:15rem; height:15rem;">
  <div class="card-body">
    <h5 class="card-title">${prod.title}</h5>
    <p class="card-text"><strong>${prod.category}</strong></p>
    <p class="card-text">${prod.description.slice(0, 80)} ...</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${prod.id}">
    Más Info
  </button>
   </div>
</div> 
  

<!-- Modal -->
<div class="modal fade" id="exampleModal_${prod.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${prod.title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${prod.description}
        <p class="text-end"><strong> $ ${prod.price} USD</strong></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

 `

    )
  });

}

    //html modal
/*  <!-- Button trigger modal -->
*/