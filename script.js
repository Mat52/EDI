
let data = fetch("https://my.api.mockaroo.com/products.json?key=ffb713b0")
    .then((response) => response.json())
    .then(data => {
        createTable(data)
        CreateChart1(data)
        CreateChart2(data)
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

function CreateChart1(data) {

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






    const ctx = document.getElementById('myChart1')
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

function CreateChart2(data) {
    data.sort((a, b) => b.product_quantity- a.product_quantity); //Pobrane dane sortujemy od nawiększej ilości do najmniejszej

    const labels = data.map(product => product.product_name); // rozdzielamy dane potrzebne od zbędnych na osobno nazwy
    const quantities = data.map(product => product.product_quantity); // i ilości

    console.log(labels);
    console.log(quantities);

    const ctx = document.getElementById('myChart2');  //pobieramy element myChart2 do którego będziemy zwracać wykres
    const chart = new Chart(ctx, {   
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantity',
                data: quantities,
                borderWidth: 1,
                BarThickness: 10
            }]
        },
        options: {
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 1,
              }
            },
            responsive: false,
            plugins: {
              legend: {
                position: 'bottom',
              },
              title: {
                display: true,
                text: 'Products Bought (Most to least)'
              }
            }
          },
        });
};
