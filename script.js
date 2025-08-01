function agregarAlCarrito(boton) {
  const imgOriginal = boton.parentElement.querySelector("img");
  const nombreProducto = boton.parentElement.querySelector("p").textContent;
  const carrito = document.getElementById("carrito");

  // Clonar y animar la imagen
  const imgClone = imgOriginal.cloneNode(true);
  const rectImg = imgOriginal.getBoundingClientRect();
  const rectCarrito = carrito.getBoundingClientRect();

  imgClone.classList.add("fly-img");
  imgClone.style.position = "fixed";
  imgClone.style.left = rectImg.left + "px";
  imgClone.style.top = rectImg.top + "px";
  imgClone.style.width = rectImg.width + "px";
  imgClone.style.height = rectImg.height + "px";
  imgClone.style.opacity = "1";
  imgClone.style.transition = "all 0.8s ease-in-out";
  imgClone.style.pointerEvents = "none";

  document.body.appendChild(imgClone);

  imgClone.offsetWidth;

  imgClone.style.left = rectCarrito.left + rectCarrito.width / 2 + "px";
  imgClone.style.top = rectCarrito.top + rectCarrito.height / 2 + "px";
  imgClone.style.width = "40px";
  imgClone.style.height = "40px";
  imgClone.style.opacity = "0.5";
  imgClone.style.transform = "scale(0.2)";

  setTimeout(() => {
    imgClone.remove();
    carrito.classList.add("pulsar");
    setTimeout(() => carrito.classList.remove("pulsar"), 500);
  }, 900);

  // Guardar producto en localStorage
  let productos = JSON.parse(localStorage.getItem("carrito")) || [];
  productos.push(nombreProducto);
  localStorage.setItem("carrito", JSON.stringify(productos));
}

 // boton de borrar lo del carrito
function vaciarCarrito() {
  localStorage.removeItem("carrito");
  location.reload();
}
