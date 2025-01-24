// API key
const apiKey = "b890f038137896d8a3c83433cb756243";

// Function to fetch weather data
function afficherData() {
    const inputElement = document.getElementById('input1');
    const tmp = document.getElementById('tmp');
    const cityName = inputElement.value; 
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
        .then(response => {
           
            return response.json();
        })
        .then(data => {
          
            for(i=0;i<=4;i++){
                console.log(data.list[i].main.temp); 
            }
            // tmp.textContent=data.list.main.temp

        })
        .catch(error => {
            console.error(error);
            alert("API not connected or invalid city name!");
        });
}

// const now = new Date();
// document.getElementById('hour').textContent = `${now.getHours()}:${now.getMinutes()}`;
