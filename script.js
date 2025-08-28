async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "113e6d0fb3000a6a03242d9eeaaaa188";

  if (!city) {
    document.getElementById("weatherResult").innerHTML = `
      <p style="color:red;"> Please enter a city name.</p>
    `;
    return; 
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found ");
    }
    const data = await response.json();

    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;
    const name = data.name;

    document.getElementById("weatherResult").innerHTML = `
      <h2>${name}</h2>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
      <p><strong>Temperature:</strong> ${temp}°C</p>
      <p><strong>Condition:</strong> ${desc}</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `
      <p style="color:red;">${error.message}</p>
    `;
  }
}
