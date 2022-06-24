class PizzaAPI {

    static list(callback) {
        fetch("http://localhost:8080/administration/api/pizza")
            .then(response => response.json())
            .then(data => callback(data));
    }

    static load(name, image, ingredients, price, callback) {
        const dto = {
            name: name,
            image: image,
            ingredients: ingredients,
            price: price
        };
        const url = "http://localhost:8080/administration/api/addPizza";

        const requestOptions = {
            method: 'POST',
            'Content-Type': 'application/json',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dto)
        };
        fetch(url, requestOptions)
            .then(response => callback());
    }

    static delete(dto, callback) {
        const url = "http://localhost:8080/administration/api/deletePizza";

        const requestOptions = {
            method: 'POST',
            'Content-Type': 'application/json',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dto)
        };
        fetch(url, requestOptions)
            .then(response => callback());
    }

}

export default PizzaAPI;
