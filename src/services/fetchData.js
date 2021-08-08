const api = {
  weatherURL: "https://api.openweathermap.org/data/2.5/onecall",
  locationURL:
    "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search",
  weatherAPIKEY: "9a3183b4d5cb42b45820262429ccb19a",
  locationAPIKEY: "RZbqtk7jtAQaSLdQ7ULhIHLIU4Lo3zAr",
};


const fetchData = async () => {
  
  
  const coords = {};

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        coords["lat"] = position.coords.latitude;
        coords["lon"] = position.coords.longitude;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  console.log(coords);
  const result = {};

  const weather = `${api.weatherURL}?lat=${coords.lat}&lon=${coords.lon}&units=metric&exclude=minutely&appid=${api.weatherAPIKEY}`;
  const location = `${api.locationURL}?q=${coords.lat},${coords.lon}&apikey=${api.locationAPIKEY}`;
  await Promise.all([fetch(weather), fetch(location)]).then(async (val) => {
    result["weatherData"] = await val[0].json();
    result["locationData"] = await val[1].json();
  });
  return result;
};

export default fetchData;
