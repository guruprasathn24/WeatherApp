async function display() {
  const inputValue = document.getElementById('inputvalue').value.trim();
  const weatherElement = document.getElementById('weatherInfo');
  const backButton = document.getElementById('backbutton');
  const body = document.body;

  if (!inputValue) {
    weatherElement.textContent = 'Please enter a city.';
    weatherElement.style.display = 'block';
    backButton.style.display = 'none';
    body.style.background = 'linear-gradient(to left, #d3d3d3, #f0f0f0)';
    return;
  }

  try {
    const apiKey = "baf851c37eb24ce983384640242709";
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(inputValue)}`;

    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    const city = weatherData.location.name;
    const region = weatherData.location.region || '';
    const temperature = weatherData.current.temp_c;
    const condition = weatherData.current.condition.text;

    weatherElement.innerHTML = `
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Region:</strong> ${region}</p>
      <p><strong>Temperature:</strong> ${temperature}°C</p>
      <p><strong>Condition:</strong> ${condition}</p>
    `;
    weatherElement.style.display = 'block';
    backButton.style.display = 'inline-block';
    body.style.background = 'linear-gradient(to left, #d3d3d3, #f0f0f0)';
  } catch {
    weatherElement.textContent = 'Enter The Correct City Name.';
    weatherElement.style.display = 'block';
    backButton.style.display = 'none';
    body.style.background = 'linear-gradient(to left, #d3d3d3, #f0f0f0)';
  }
}

function clearWeather() {
  const weatherElement = document.getElementById('weatherInfo');
  const backButton = document.getElementById('backbutton');
  const input = document.getElementById('inputvalue');
  const body = document.body;

  weatherElement.style.display = 'none';
  weatherElement.innerHTML = '';
  backButton.style.display = 'none';
  input.value = '';
  input.focus();
  body.style.background = 'linear-gradient(to left, #d3d3d3, #f0f0f0)';
}
