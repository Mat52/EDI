
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
    for (let i = 0; i < 100; i++) {
        let CurrentData = data[i]
        console.log(CurrentData)
        let elements = "<tr><th scope='row'>" + CurrentData.id + "</th><td>" + CurrentData.product_name + "</td> <td>" + CurrentData.product_quantity + "</td><td>" + CurrentData.country_of_origin + "</td> <td>" + CurrentData.product_price + "</td><td>" + CurrentData.date_of_arrival + "</td></tr>"
        tbody.insertAdjacentHTML('beforeend', elements)
    }
}