async function obtenerProductos() {
  try {
    let response = await fetch('https://api.escuelajs.co/api/v1/products');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerProductos();
