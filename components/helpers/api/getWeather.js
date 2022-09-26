const CITY = 'edmonton';
const KEY = 'e2a054e1ca2e0748492fb9a1f5c5bf20';
const END_POINT = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${KEY}&units=metric`;

const getWeather = () => {
    return fetch(END_POINT).then((data) => {
        return data.json();
    }).then((data) => {
        return data;
    });
};

export default getWeather;