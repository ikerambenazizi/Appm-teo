const apiKey = 'b890f038137896d8a3c83433cb756243'; // Remplacez par votre clé API
const inputField = document.getElementById('input1');

function afficherData() {
    const location = inputField.value;
    if (!location) {
        alert('Veuillez entrer une ville.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ville non trouvée');
            }
            return response.json();
        })
        .then(data => {
            const locationElement = document.getElementById('location');
            const hourElement = document.getElementById('hour');
            const dateElement = document.getElementById('date');
            const windElement = document.getElementById('vent');
            const temperatureElement = document.getElementById('température');

            const date = new Date();
            locationElement.innerText = data.name;
            hourElement.innerText = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            dateElement.innerText = date.toLocaleDateString();
            windElement.innerText = `Vent: ${data.wind.speed} m/s`;
            temperatureElement.innerText = `Température: ${data.main.temp} °C`;

            // Mise à jour des prévisions
            updateForecast();
        })
        .catch(error => {
            alert(error.message);
        });
}

function updateForecast() {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Vider le conteneur avant d'ajouter les nouvelles prévisions

    // Exemple de données de prévision
    const forecastData = [
        { day: 'Lundi', temp: '12°C', condition: 'Ensoleillé' },
        { day: 'Mardi', temp: '14°C', condition: 'Partiellement nuageux' },
        { day: 'Mercredi', temp: '13°C', condition: 'Ensoleillé' },
        { day: 'Jeudi', temp: '15°C', condition: 'Pluvieux' },
        { day: 'Vendredi', temp: '16°C', condition: 'Ensoleillé' },
    ];

    forecastData.forEach(forecast => {
        const forecastCard = document.createElement('div');
        forecastCard.className = 'bg-[#1FA2FA] rounded-xl h-36 w-36 text-center flex justify-center items-center';
        forecastCard.innerHTML = `
            <div>
                <p class="text-xl font-black">${forecast.day}</p>
                <p>${forecast.temp}</p>
                <p>${forecast.condition}</p>
            </div>
        `;
        container.appendChild(forecastCard);
    });
}