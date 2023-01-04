
let data = fetch("https://my.api.mockaroo.com/products.json?key=ffb713b0")
    .then((response) => response.json())
    .then(data => {
        createTable(data)
        CreateChart(data)
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

function CreateChart(data) {

    let country = []
    data.forEach(element =>
        country.push(element.country_of_origin)
    )
    country.sort()
    CountriesWithNumbersOfDeliveries = {}
    country.forEach(element =>
        CountriesWithNumbersOfDeliveries[element] = country.filter(c => c === element).length
    )


    const sorted = Object.entries(CountriesWithNumbersOfDeliveries).sort(([, a], [, b]) => a - b)
    sorted.reverse()
    countries10List = []
    NumbersFirst10Countries = []
    for (i = 0; i < 10; i++) {
        countries10List.push(sorted[i][0])
        NumbersFirst10Countries.push(sorted[i][1])
    }






    const ctx = document.getElementById('myChart')
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: countries10List,
            datasets: [{
                label: 'Top 10 countries with the most deliveries',
                data: NumbersFirst10Countries,
                borderWidth: 5
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}