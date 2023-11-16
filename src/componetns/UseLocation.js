export default function UseLocation () {
let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
let token = `${'18ebfabe5ec90559d59b8e6049eaf8939af10e73'}`;
let query = { lat: 55.878, lon: 37.653 };

var options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify(query)
}

fetch(url, options)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log("error", error));
};