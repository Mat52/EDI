!async function(){
    let data = await fetch("https://my.api.mockaroo.com/products.json?key=ffb713b0")
        .then((response) => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });
    
    for (let i in data) {
        const product_id = data[i]['id']
        const product_name = data[i]['product_name']
        const product_quantity = data[i]['product_quantity']
        const country_of_origin = data[i]['country_of_origin']
        const product_price = data[i]['product_price']
        const date_of_arrival = data[i]['date_of_arrival']
    }
    }();