exports.cargarDatos = () => {
    fetch('https://fakestoreapi.com/products')
    .then(resp => resp.json())
    .then(data => console.log (data))
}
