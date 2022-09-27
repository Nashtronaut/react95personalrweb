

const CITY = 'edmonton';
const KEY = 'e2a054e1ca2e0748492fb9a1f5c5bf20';
const END_POINT = `https://api.openweathermap.org/data/2.5/forecast?units=metric&cnt=28&q=${CITY}&appid=${KEY}`;

const dayFilter = (instance) => {
        const currentDay = new Date().getDay();
        const hourTarget = 12;
        const dayTargets = [currentDay + 1, currentDay + 2, currentDay + 3];
        let day = new Date(instance.dt).getDay();
        let hour = new Date(instance.dt).getHours();
        
        console.log(day, hour);

        return dayTargets.includes(day) && hour === hourTarget;
};

const getForecast = () => {
        return fetch(END_POINT).then((res) => {
                return res.json()
        }).then((data) => {
                let returnData = [];

                for (const instance of data.list) {
                        console.log(instance)
                        if (dayFilter(instance)){

                        }
                }

                return returnData;
        });
}
export default getForecast;