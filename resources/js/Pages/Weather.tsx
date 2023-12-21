// Weather.tsx Page
import { useForm, usePage } from '@inertiajs/react';

interface WeatherData {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    };
    current: {
        last_updated_epoch: number;
        last_updated: string;
        temp_c: number;
        temp_f: number;
        is_day: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        };
        wind_mph: number;
        wind_kph: number;
        wind_degree: number;
        wind_dir: string;
        pressure_mb: number;
        pressure_in: number;
        precip_mm: number;
        precip_in: number;
        humidity: number;
        cloud: number;
        feelslike_c: number;
        feelslike_f: number;
        vis_km: number;
        vis_miles: number;
        uv: number;
        gust_mph: number;
        gust_kph: number;
    };
}

interface WeatherPageProps {
    [key: string]: any;
    weatherData: WeatherData;
}

const Weather: React.FC = () => {

    const { props } = usePage<WeatherPageProps>();
    const { weatherData } = props;

    // console.log(weatherData);

    const { get, data, setData, reset } = useForm({
        location: ""
    })

    const getWeatherInfo = () => {
        get(route('get-weather-info', data));
        reset();
    };

    return (
        <div className="container grid p-4 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4">
                <input
                    type="text"
                    value={data.location}
                    onChange={(e) => setData({ location: e.target.value })}
                    className="px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500"
                    placeholder='Enter location...'
                />
                <button
                    onClick={getWeatherInfo}
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                >
                    Get Weather
                </button>

                <div className='py-3'>
                    <p className="text-gray-500 divide-y divide-gray-800">Enter a valid location and click the button to load weather data.</p>
                </div>

                {weatherData.location?.name !== undefined && (
                    <div className='grid gap-1 py-3'>
                        <h3 className="text-xl font-semibold underline underline-offset-2">{weatherData.location?.name}</h3>
                        <p className="text-gray-700">Weather condition: {weatherData.current?.condition.text}</p>
                        <div className="grid grid-cols-2 gap-4">
                            <p>Region: {weatherData.location?.region}</p>
                            <p>Country: {weatherData.location?.country}</p>
                            <p>Latitude: {weatherData.location?.lat}</p>
                            <p>Longitude: {weatherData.location?.lon}</p>
                            <p>Local Time: {weatherData.location?.localtime}</p>
                            <p>Temperature: {weatherData.current?.temp_c}°C / {weatherData.current?.temp_f}°F</p>
                            <p>Wind: {weatherData.current?.wind_kph} kph ({weatherData.current?.wind_dir})</p>
                            <p>Pressure: {weatherData.current?.pressure_mb} mb</p>
                            <p>Humidity: {weatherData.current?.humidity}%</p>
                            <p>Precipitation: {weatherData.current?.precip_mm} mm</p>
                            <p>Visibility: {weatherData.current?.vis_km} km</p>
                            <p>UV Index: {weatherData.current?.uv}</p>
                            <p>Feels Like: {weatherData.current?.feelslike_c}°C / {weatherData.current?.feelslike_f}°F</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
