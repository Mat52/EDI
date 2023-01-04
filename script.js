
let data = fetch("https://my.api.mockaroo.com/products.json?key=ffb713b0")
    .then((response) => response.json())
    .then(data => {
        createTable(data)
    })
    .catch(error => {
        console.error(error);
    });

function createTable(data) {
    let tbody = document.getElementById("tbody")
    data.forEach(element => {
        let elements = "<tr><th scope='row'>" + element.id + "</th><td>" + element.product_name + "</td> <td>" + element.product_quantity + "</td><td>" + element.country_of_origin + "</td> <td>" + element.product_price + "</td><td>" + element.date_of_arrival + "</td></tr>"
        tbody.insertAdjacentHTML('beforeend', elements)
    });



}