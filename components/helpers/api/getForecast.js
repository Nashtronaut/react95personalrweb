const CITY = 'edmonton';
const KEY = 'e2a054e1ca2e0748492fb9a1f5c5bf20';
const END_POINT = `https://api.openweathermap.org/data/2.5/forecast?units=metric&cnt=40&q=${CITY}&appid=${KEY}`;

//TODO NEEDS COMPLETE REWORK. I DID NOT KNOW TO MULITPLY DT * 1000. LESSONS LEARNED

const addDays = (date, days) => {
        let result = new Date(date)
        result.setDate(result.getDate() + days)
        return result;
}

const dayFilter = (date) => {
        const currentDate = new Date();
        const hourTarget = 12;
        const dateTargets = [addDays(currentDate, 1).getDate(), addDays(currentDate, 2).getDate(), addDays(currentDate, 3).getDate()];

        return dateTargets.includes(date.getDate()) && date.getHours() === hourTarget;
};

const getForecast = () => {

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return fetch(END_POINT).then((res) => {
                return res.json()
        }).then((data) => {

                let returnData = data.list.filter((instance) => {
                        let date = new Date(instance.dt * 1000);
                        return dayFilter(date);
                })

                returnData = returnData.map((instance) => {

                        const date = new Date(instance.dt * 1000);
                        let day = days[date.getDay()];

                        return {
                                day: day.toLowerCase(),
                                temp: instance.main.temp,
                                weather: instance.weather[0].description,
                                main : instance.weather[0].main
                        }
                })
                
                return returnData;
        });
}
export default getForecast;