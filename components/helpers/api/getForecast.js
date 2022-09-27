

const CITY = 'edmonton';
const KEY = 'e2a054e1ca2e0748492fb9a1f5c5bf20';
const END_POINT = `https://api.openweathermap.org/data/2.5/forecast?units=metric&cnt=28&q=${CITY}&appid=${KEY}`;

const dayFilter = (timestamp) => {
        const currentDay = new Date().getDay();
        const hourTarget = 12;
        const dayTargets = [currentDay + 1, currentDay + 2, currentDay + 3];
        let day = parseInt(timestamp.dt_time.substring(9, 11))
        let hour = parseInt(timestamp.dt_time.substring(12, 14));

        console.log(dayTargets)
        console.log(day)
        console.log(time)

        return dayTargets.includes(day) && hour == hourTarget;
};

//TODO: BROKEN FILTERING. 
// const getForecast = () => { 
//     return fetch(END_POINT).then((data) => {
//         return [data].filter((timestamp) => {
//             dayFilter(timestamp)
//         });
//         console.log(data);
//     }).then((res) => {
        
//         return res.json();
//     });
// };

export default getForecast;