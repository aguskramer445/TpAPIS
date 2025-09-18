
let key = "Ie3kzhEFJpLVCr6RwyZfyflpImrFkSojGotJWtZO";  

let imagenDeDia = document.querySelector("#imagenDeDia");
let botonDia = document.querySelector("#botonDia");
let tituloDia = document.querySelector("#tituloDia");

botonDia.onclick = function () {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    .then(res => res.json())
    .then(fotoDelDia => {
      if (fotoDelDia.media_type === "image") {
        imagenDeDia.src = fotoDelDia.url;
        tituloDia.textContent = fotoDelDia.title;
      } 
    });
};
let imagenFecha = document.querySelector("#imagenFecha");
let botonFecha = document.querySelector("#botonFecha");
let tituloFecha = document.querySelector("#tituloFecha");
let fechaUsuario = document.querySelector("#fecha");
botonFecha.onclick = function () {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${fechaUsuario.value}`)
    .then(res => res.json())
    .then(fotoDelDia => {
  if (fotoDelDia.media_type === "image") {
    imagenDia.src = fotoDelDia.url;
    tituloDia.textContent = fotoDelDia.title;
  } else {
    imagenDia.src = "";
    tituloDia.textContent = "⚠️ La NASA hoy publicó un video, no una imagen.";
  }
});

};
let contenedorImagen = document.querySelector(".contenedor_imagen");
let botonCantidad = document.querySelector("#botonCantidad");
let cantidadUsuario = document.querySelector("#cantidad");
botonCantidad.onclick = function () {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=${cantidadUsuario.value}`)
    .then(res => res.json())
    .then(fotos => {
      contenedorImagen.innerHTML = "";
      fotos.forEach(foto => {
        if (foto.media_type === "image") {
          contenedorImagen.innerHTML += `
            <div>
              <h3>${foto.title}</h3>
              <img src="${foto.url}" width="300">
            </div>
          `;
        }
      });
    });
};
flatpickr("#fecha", {
  dateFormat: "Y-m-d",
  maxDate: "today",     
});
