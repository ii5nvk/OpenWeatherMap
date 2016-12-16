define("model", [], () => ({
    callApi: function(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();
            xhr.addEventListener('load', () => {
                resolve(JSON.parse(xhr.responseText));
            });
            xhr.addEventListener('error', () => {
                reject();
            });
        });
    },
    getOpenWeatherById: function(openWeatherCityId) {
        let openWeatherAppId = '66dccd238e9a02466a7b6d04d7fb5d06',
            openWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather',
            urlRequest = `${openWeatherUrl}?id=${openWeatherCityId}&units=metric&APPID=${openWeatherAppId}`;
        return this.callApi(urlRequest);
    }
}));