fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));