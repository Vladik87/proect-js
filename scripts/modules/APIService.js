const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '4ee42111348bb34a29f362a37526fe2e';

export const fetchWeather = async (city) => {
    try {
        const respons = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
        if (!respons.ok) {
            throw new Error('Ошибка запроса');
        };
        const data = await respons.json();
        console.log(data);
        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    };
};

export const fetchForecast = async (city) => {
    try {
        const respons = await fetch(`${API_URL}forecast?q=${city}&appid=${API_KEY}&lang=ru`);
        if (!respons.ok) {
            throw new Error('Ошибка запроса');
        };
        const data = await respons.json();
        console.log(data);
        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    };
};

export const getCity = async () => {
    const url = 'https://ipapi.co/city/';
    try {
        const respons = await fetch(url);

        if (!respons.ok) {
            throw new Error('Ошибка получения города')
        }
        const city = await respons.text();
console.log(city);
        return {success: true, city}

    } catch (error) {
        console.error(error);
        return { success: false, error }
    }
}