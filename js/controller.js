define('controller', ['view', 'model'], (view, model) => ({
    weatherRoute: function(id) {
        return model.getOpenWeatherById(id).then(cityWeather => {
            result.innerHTML = view.render('weather', cityWeather);
        });
    }
}));