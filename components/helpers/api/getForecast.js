const CITY = 'edmonton';
const KEY = 'e2a054e1ca2e0748492fb9a1f5c5bf20';
const END_POINT = `https://api.openweathermap.org/data/2.5/forecast?units=metric&cnt=40&q=${CITY}&appid=${KEY}`;

//TODO NEEDS COMPLETE REWORK. I DID NOT KNOW TO MULITPLY DT * 1000. LESSONS LEARNED

const dayFilter = (date, hour) => {
        let currentDay = new Date().getDate();
        const hourTarget = 12;
        const dateTargets = [currentDay + 1, currentDay + 2, currentDay + 3];

        date = parseInt(date);
        hour = parseInt(hour);

        return dateTargets.includes(date) && hour === hourTarget;
};

const getForecast = () => {

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return fetch(END_POINT).then((res) => {
                return res.json()
        }).then((data) => {
                 let returnData = data.list.filter((instance) => {
                        let date = instance.dt_txt.substring(8, 10);
                        let hour = instance.dt_txt.substring(11, 13);
                        
                        return dayFilter(date, hour)
                })

                returnData = returnData.map((instance) => {
                        let date = instance.dt_txt.substring(8, 10);
                        let month = parseInt(instance.dt_txt.substring(5, 7)) - 1; // Subtract 1 for javascript datetime indexing.
                        let year = instance.dt_txt.substring(0, 4);

                        let dateObj = new Date(year, month, date);
                        console.log(dateObj)
                        let day = days[dateObj.getDay()];

                        return {
                                day: day.toLowerCase(),
                                temp: instance.main.temp,
                                weather: instance.weather[0].description,
                                main : instance.weather[0].main // for icon identification
                        }
                })

                return returnData;
        });
}
export default getForecast;