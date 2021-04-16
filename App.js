/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  Image,
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {WEATHERMAP_APP_ID} from '@env';
import Header from './components/Header';
import HourlyWeather from './components/HourlyWeather';
import DailyWeather from './components/DailyWeather';

const App = () => {
  const [text, setText] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [hourlyData, setHourlyData] = useState();
  const [hourlyTab, setHourlyTab] = useState(true);
  const [sevenDayTab, setSevenDayTab] = useState(false);

  async function handleSearch() {
    let cityName = text.trim().split(' ').join('%20');
    //const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHERMAP_APP_ID}&units=imperial`;
    //let res = await fetch(url);
    //let json = await res.json();
    let json = {
      "coord": {
        "lon": -74.006,
        "lat": 40.7143
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        },
        {
          "id": 701,
          "main": "Mist",
          "description": "mist",
          "icon": "50d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 52.75,
        "feels_like": 52.11,
        "temp_min": 51.8,
        "temp_max": 53.6,
        "pressure": 1006,
        "humidity": 93
      },
      "visibility": 6437,
      "wind": {
        "speed": 3.44,
        "deg": 0
      },
      "rain": {
        "1h": 1.83
      },
      "clouds": {
        "all": 90
      },
      "dt": 1618511938,
      "sys": {
        "type": 1,
        "id": 4610,
        "country": "US",
        "sunrise": 1618481799,
        "sunset": 1618529692
      },
      "timezone": -14400,
      "id": 5128581,
      "name": "New York",
      "cod": 200
    };
    setWeatherData(json);
    getHourlyData();
  }

  async function getHourlyData() {
    let json = {
      "lat": 40.7143,
      "lon": -74.006,
      "timezone": "America/New_York",
      "timezone_offset": -14400,
      "current": {
        "dt": 1618516400,
        "sunrise": 1618481799,
        "sunset": 1618529692,
        "temp": 53.22,
        "feels_like": 52.66,
        "pressure": 1005,
        "humidity": 94,
        "dew_point": 51.55,
        "uvi": 0.64,
        "clouds": 90,
        "visibility": 10000,
        "wind_speed": 3.44,
        "wind_deg": 0,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "rain": {
          "1h": 0.1
        }
      },
      "hourly": [
        {
          "dt": 1618513200,
          "temp": 53.44,
          "feels_like": 52.81,
          "pressure": 1005,
          "humidity": 92,
          "dew_point": 51.17,
          "uvi": 0.98,
          "clouds": 92,
          "visibility": 8329,
          "wind_speed": 9.91,
          "wind_deg": 148,
          "wind_gust": 13.73,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "pop": 1,
          "rain": {
            "1h": 0.15
          }
        },
        {
          "dt": 1618516800,
          "temp": 53.22,
          "feels_like": 52.66,
          "pressure": 1005,
          "humidity": 94,
          "dew_point": 51.55,
          "uvi": 0.64,
          "clouds": 90,
          "visibility": 6243,
          "wind_speed": 8.19,
          "wind_deg": 149,
          "wind_gust": 12.08,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0.8
        },
        {
          "dt": 1618520400,
          "temp": 53.37,
          "feels_like": 52.77,
          "pressure": 1005,
          "humidity": 93,
          "dew_point": 51.4,
          "uvi": 0.33,
          "clouds": 92,
          "visibility": 2508,
          "wind_speed": 5.32,
          "wind_deg": 174,
          "wind_gust": 10.07,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0.8
        },
        {
          "dt": 1618524000,
          "temp": 51.96,
          "feels_like": 51.08,
          "pressure": 1005,
          "humidity": 90,
          "dew_point": 49.12,
          "uvi": 0.11,
          "clouds": 94,
          "visibility": 6082,
          "wind_speed": 14.52,
          "wind_deg": 328,
          "wind_gust": 22.95,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0.8
        },
        {
          "dt": 1618527600,
          "temp": 50.94,
          "feels_like": 49.73,
          "pressure": 1004,
          "humidity": 85,
          "dew_point": 46.6,
          "uvi": 0.02,
          "clouds": 96,
          "visibility": 9335,
          "wind_speed": 13.62,
          "wind_deg": 321,
          "wind_gust": 22.91,
          "weather": [
            {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
            }
          ],
          "pop": 1,
          "rain": {
            "1h": 1.27
          }
        },
        {
          "dt": 1618531200,
          "temp": 49.8,
          "feels_like": 44.98,
          "pressure": 1005,
          "humidity": 79,
          "dew_point": 43.56,
          "uvi": 0,
          "clouds": 98,
          "visibility": 10000,
          "wind_speed": 12.68,
          "wind_deg": 345,
          "wind_gust": 23.51,
          "weather": [
            {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10n"
            }
          ],
          "pop": 1,
          "rain": {
            "1h": 1.2
          }
        },
        {
          "dt": 1618534800,
          "temp": 49.14,
          "feels_like": 44.01,
          "pressure": 1005,
          "humidity": 73,
          "dew_point": 41,
          "uvi": 0,
          "clouds": 98,
          "visibility": 10000,
          "wind_speed": 13.15,
          "wind_deg": 326,
          "wind_gust": 21.63,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
            }
          ],
          "pop": 0.45,
          "rain": {
            "1h": 0.1
          }
        },
        {
          "dt": 1618538400,
          "temp": 47.59,
          "feels_like": 41.97,
          "pressure": 1005,
          "humidity": 75,
          "dew_point": 40.1,
          "uvi": 0,
          "clouds": 57,
          "visibility": 10000,
          "wind_speed": 13.44,
          "wind_deg": 322,
          "wind_gust": 19.62,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0.41
        },
        {
          "dt": 1618542000,
          "temp": 47.01,
          "feels_like": 41.36,
          "pressure": 1004,
          "humidity": 75,
          "dew_point": 39.49,
          "uvi": 0,
          "clouds": 68,
          "visibility": 10000,
          "wind_speed": 13,
          "wind_deg": 331,
          "wind_gust": 16.69,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0.37
        },
        {
          "dt": 1618545600,
          "temp": 46.22,
          "feels_like": 40.75,
          "pressure": 1004,
          "humidity": 75,
          "dew_point": 39.04,
          "uvi": 0,
          "clouds": 76,
          "visibility": 10000,
          "wind_speed": 11.72,
          "wind_deg": 338,
          "wind_gust": 15.35,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0.37
        },
        {
          "dt": 1618549200,
          "temp": 45.82,
          "feels_like": 40.23,
          "pressure": 1004,
          "humidity": 75,
          "dew_point": 38.43,
          "uvi": 0,
          "clouds": 81,
          "visibility": 10000,
          "wind_speed": 11.83,
          "wind_deg": 322,
          "wind_gust": 15.88,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0.37
        },
        {
          "dt": 1618552800,
          "temp": 45.79,
          "feels_like": 40.26,
          "pressure": 1004,
          "humidity": 69,
          "dew_point": 36.37,
          "uvi": 0,
          "clouds": 82,
          "visibility": 10000,
          "wind_speed": 11.56,
          "wind_deg": 321,
          "wind_gust": 18.03,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0.37
        },
        {
          "dt": 1618556400,
          "temp": 45.41,
          "feels_like": 39.92,
          "pressure": 1004,
          "humidity": 69,
          "dew_point": 35.71,
          "uvi": 0,
          "clouds": 95,
          "visibility": 10000,
          "wind_speed": 11.18,
          "wind_deg": 313,
          "wind_gust": 19.35,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "pop": 0.25
        },
        {
          "dt": 1618560000,
          "temp": 44.33,
          "feels_like": 38.95,
          "pressure": 1003,
          "humidity": 72,
          "dew_point": 36.21,
          "uvi": 0,
          "clouds": 68,
          "visibility": 10000,
          "wind_speed": 10.16,
          "wind_deg": 306,
          "wind_gust": 18.5,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0.25
        },
        {
          "dt": 1618563600,
          "temp": 43.75,
          "feels_like": 37.96,
          "pressure": 1003,
          "humidity": 72,
          "dew_point": 35.55,
          "uvi": 0,
          "clouds": 52,
          "visibility": 10000,
          "wind_speed": 10.89,
          "wind_deg": 295,
          "wind_gust": 19.66,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0.22
        },
        {
          "dt": 1618567200,
          "temp": 43,
          "feels_like": 36.54,
          "pressure": 1003,
          "humidity": 70,
          "dew_point": 33.78,
          "uvi": 0,
          "clouds": 42,
          "visibility": 10000,
          "wind_speed": 12.24,
          "wind_deg": 298,
          "wind_gust": 21.05,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "pop": 0.22
        },
        {
          "dt": 1618570800,
          "temp": 42.31,
          "feels_like": 35.33,
          "pressure": 1004,
          "humidity": 67,
          "dew_point": 32.18,
          "uvi": 0.12,
          "clouds": 35,
          "visibility": 10000,
          "wind_speed": 13.27,
          "wind_deg": 298,
          "wind_gust": 22.59,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "pop": 0.18
        },
        {
          "dt": 1618574400,
          "temp": 42.94,
          "feels_like": 35.82,
          "pressure": 1004,
          "humidity": 63,
          "dew_point": 31.35,
          "uvi": 0.52,
          "clouds": 32,
          "visibility": 10000,
          "wind_speed": 14.27,
          "wind_deg": 298,
          "wind_gust": 21.47,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "pop": 0.18
        },
        {
          "dt": 1618578000,
          "temp": 44.42,
          "feels_like": 37.8,
          "pressure": 1004,
          "humidity": 59,
          "dew_point": 30.94,
          "uvi": 1.3,
          "clouds": 16,
          "visibility": 10000,
          "wind_speed": 13.94,
          "wind_deg": 297,
          "wind_gust": 18.39,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618581600,
          "temp": 46.81,
          "feels_like": 41,
          "pressure": 1004,
          "humidity": 52,
          "dew_point": 29.98,
          "uvi": 2.44,
          "clouds": 12,
          "visibility": 10000,
          "wind_speed": 13.4,
          "wind_deg": 296,
          "wind_gust": 17.52,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618585200,
          "temp": 49.53,
          "feels_like": 44.55,
          "pressure": 1003,
          "humidity": 44,
          "dew_point": 28.62,
          "uvi": 3.65,
          "clouds": 11,
          "visibility": 10000,
          "wind_speed": 13.02,
          "wind_deg": 292,
          "wind_gust": 18.48,
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618588800,
          "temp": 51.6,
          "feels_like": 48.29,
          "pressure": 1002,
          "humidity": 39,
          "dew_point": 27.68,
          "uvi": 2.43,
          "clouds": 31,
          "visibility": 10000,
          "wind_speed": 14.25,
          "wind_deg": 280,
          "wind_gust": 19.71,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618592400,
          "temp": 52.11,
          "feels_like": 48.9,
          "pressure": 1002,
          "humidity": 40,
          "dew_point": 28.15,
          "uvi": 2.6,
          "clouds": 44,
          "visibility": 10000,
          "wind_speed": 16.11,
          "wind_deg": 275,
          "wind_gust": 19.57,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618596000,
          "temp": 50.9,
          "feels_like": 47.86,
          "pressure": 1002,
          "humidity": 46,
          "dew_point": 30.72,
          "uvi": 2.4,
          "clouds": 53,
          "visibility": 10000,
          "wind_speed": 14.61,
          "wind_deg": 281,
          "wind_gust": 19.66,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "pop": 0.1
        },
        {
          "dt": 1618599600,
          "temp": 52.54,
          "feels_like": 49.57,
          "pressure": 1002,
          "humidity": 44,
          "dew_point": 31.15,
          "uvi": 2.29,
          "clouds": 100,
          "visibility": 10000,
          "wind_speed": 15.17,
          "wind_deg": 294,
          "wind_gust": 21.41,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0.5
        },
        {
          "dt": 1618603200,
          "temp": 52.32,
          "feels_like": 49.37,
          "pressure": 1001,
          "humidity": 45,
          "dew_point": 31.77,
          "uvi": 1.51,
          "clouds": 98,
          "visibility": 10000,
          "wind_speed": 15.82,
          "wind_deg": 300,
          "wind_gust": 21.79,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0.5
        },
        {
          "dt": 1618606800,
          "temp": 51.49,
          "feels_like": 48.69,
          "pressure": 1002,
          "humidity": 50,
          "dew_point": 33.62,
          "uvi": 0.79,
          "clouds": 99,
          "visibility": 10000,
          "wind_speed": 16.26,
          "wind_deg": 315,
          "wind_gust": 22.46,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "pop": 0.61,
          "rain": {
            "1h": 0.13
          }
        },
        {
          "dt": 1618610400,
          "temp": 49.19,
          "feels_like": 43.81,
          "pressure": 1003,
          "humidity": 63,
          "dew_point": 37.22,
          "uvi": 0.37,
          "clouds": 99,
          "visibility": 10000,
          "wind_speed": 14.16,
          "wind_deg": 330,
          "wind_gust": 21.39,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "pop": 0.73,
          "rain": {
            "1h": 0.18
          }
        },
        {
          "dt": 1618614000,
          "temp": 46.18,
          "feels_like": 40.64,
          "pressure": 1004,
          "humidity": 73,
          "dew_point": 37.94,
          "uvi": 0.08,
          "clouds": 99,
          "visibility": 10000,
          "wind_speed": 11.97,
          "wind_deg": 354,
          "wind_gust": 17.22,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "pop": 0.57,
          "rain": {
            "1h": 0.19
          }
        },
        {
          "dt": 1618617600,
          "temp": 44.62,
          "feels_like": 39.09,
          "pressure": 1005,
          "humidity": 76,
          "dew_point": 37.54,
          "uvi": 0,
          "clouds": 99,
          "visibility": 10000,
          "wind_speed": 10.71,
          "wind_deg": 353,
          "wind_gust": 15.01,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
            }
          ],
          "pop": 0.46,
          "rain": {
            "1h": 0.12
          }
        },
        {
          "dt": 1618621200,
          "temp": 45.12,
          "feels_like": 40.42,
          "pressure": 1005,
          "humidity": 77,
          "dew_point": 38.3,
          "uvi": 0,
          "clouds": 100,
          "visibility": 10000,
          "wind_speed": 8.9,
          "wind_deg": 336,
          "wind_gust": 15.37,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
            }
          ],
          "pop": 0.23,
          "rain": {
            "1h": 0.17
          }
        },
        {
          "dt": 1618624800,
          "temp": 46.27,
          "feels_like": 41.63,
          "pressure": 1005,
          "humidity": 72,
          "dew_point": 37.98,
          "uvi": 0,
          "clouds": 99,
          "visibility": 10000,
          "wind_speed": 9.46,
          "wind_deg": 310,
          "wind_gust": 15.52,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
            }
          ],
          "pop": 0.32,
          "rain": {
            "1h": 0.13
          }
        },
        {
          "dt": 1618628400,
          "temp": 46.35,
          "feels_like": 41.2,
          "pressure": 1005,
          "humidity": 68,
          "dew_point": 36.43,
          "uvi": 0,
          "clouds": 97,
          "visibility": 10000,
          "wind_speed": 10.89,
          "wind_deg": 310,
          "wind_gust": 17.52,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "pop": 0.12
        },
        {
          "dt": 1618632000,
          "temp": 45.75,
          "feels_like": 40.19,
          "pressure": 1005,
          "humidity": 70,
          "dew_point": 36.45,
          "uvi": 0,
          "clouds": 91,
          "visibility": 10000,
          "wind_speed": 11.63,
          "wind_deg": 309,
          "wind_gust": 17.34,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "pop": 0.12
        },
        {
          "dt": 1618635600,
          "temp": 44.78,
          "feels_like": 39.06,
          "pressure": 1006,
          "humidity": 71,
          "dew_point": 36.01,
          "uvi": 0,
          "clouds": 85,
          "visibility": 10000,
          "wind_speed": 11.43,
          "wind_deg": 314,
          "wind_gust": 18.88,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "pop": 0.04
        },
        {
          "dt": 1618639200,
          "temp": 44.4,
          "feels_like": 38.88,
          "pressure": 1006,
          "humidity": 72,
          "dew_point": 36.07,
          "uvi": 0,
          "clouds": 78,
          "visibility": 10000,
          "wind_speed": 10.6,
          "wind_deg": 313,
          "wind_gust": 18.43,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0.04
        },
        {
          "dt": 1618642800,
          "temp": 43.97,
          "feels_like": 38.61,
          "pressure": 1006,
          "humidity": 73,
          "dew_point": 35.87,
          "uvi": 0,
          "clouds": 53,
          "visibility": 10000,
          "wind_speed": 9.91,
          "wind_deg": 323,
          "wind_gust": 18.34,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618646400,
          "temp": 43.75,
          "feels_like": 38.17,
          "pressure": 1006,
          "humidity": 73,
          "dew_point": 35.67,
          "uvi": 0,
          "clouds": 72,
          "visibility": 10000,
          "wind_speed": 10.31,
          "wind_deg": 320,
          "wind_gust": 18.61,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618650000,
          "temp": 43.61,
          "feels_like": 37.42,
          "pressure": 1007,
          "humidity": 73,
          "dew_point": 35.74,
          "uvi": 0,
          "clouds": 81,
          "visibility": 10000,
          "wind_speed": 11.88,
          "wind_deg": 313,
          "wind_gust": 19.53,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618653600,
          "temp": 43.11,
          "feels_like": 36.84,
          "pressure": 1007,
          "humidity": 77,
          "dew_point": 36.34,
          "uvi": 0,
          "clouds": 76,
          "visibility": 10000,
          "wind_speed": 11.74,
          "wind_deg": 315,
          "wind_gust": 19.28,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618657200,
          "temp": 43.16,
          "feels_like": 37.36,
          "pressure": 1008,
          "humidity": 77,
          "dew_point": 36.5,
          "uvi": 0.04,
          "clouds": 70,
          "visibility": 10000,
          "wind_speed": 10.51,
          "wind_deg": 322,
          "wind_gust": 17.76,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618660800,
          "temp": 44.56,
          "feels_like": 39.15,
          "pressure": 1009,
          "humidity": 72,
          "dew_point": 36.14,
          "uvi": 0.18,
          "clouds": 74,
          "visibility": 10000,
          "wind_speed": 10.42,
          "wind_deg": 326,
          "wind_gust": 15.23,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618664400,
          "temp": 46.45,
          "feels_like": 41.67,
          "pressure": 1009,
          "humidity": 64,
          "dew_point": 35.06,
          "uvi": 1.03,
          "clouds": 72,
          "visibility": 10000,
          "wind_speed": 9.95,
          "wind_deg": 337,
          "wind_gust": 12.86,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618668000,
          "temp": 48.11,
          "feels_like": 44.06,
          "pressure": 1009,
          "humidity": 58,
          "dew_point": 34.12,
          "uvi": 1.92,
          "clouds": 86,
          "visibility": 10000,
          "wind_speed": 9.01,
          "wind_deg": 340,
          "wind_gust": 12.08,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618671600,
          "temp": 49.89,
          "feels_like": 46.4,
          "pressure": 1009,
          "humidity": 53,
          "dew_point": 33.49,
          "uvi": 2.87,
          "clouds": 90,
          "visibility": 10000,
          "wind_speed": 8.61,
          "wind_deg": 336,
          "wind_gust": 11.48,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618675200,
          "temp": 52.25,
          "feels_like": 49.42,
          "pressure": 1009,
          "humidity": 48,
          "dew_point": 33.08,
          "uvi": 2.31,
          "clouds": 86,
          "visibility": 10000,
          "wind_speed": 8.08,
          "wind_deg": 330,
          "wind_gust": 10.51,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618678800,
          "temp": 52.97,
          "feels_like": 50.13,
          "pressure": 1009,
          "humidity": 46,
          "dew_point": 32.72,
          "uvi": 2.49,
          "clouds": 87,
          "visibility": 10000,
          "wind_speed": 7.07,
          "wind_deg": 314,
          "wind_gust": 9.15,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        },
        {
          "dt": 1618682400,
          "temp": 53.31,
          "feels_like": 50.5,
          "pressure": 1009,
          "humidity": 46,
          "dew_point": 33.37,
          "uvi": 2.29,
          "clouds": 89,
          "visibility": 10000,
          "wind_speed": 8.5,
          "wind_deg": 296,
          "wind_gust": 9.6,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "pop": 0
        }
      ],
      "daily": [
        {
          "dt": 1618502400,
          "sunrise": 1618481799,
          "sunset": 1618529692,
          "moonrise": 1618488720,
          "moonset": 1618542720,
          "moon_phase": 0.11,
          "temp": {
            "day": 53.87,
            "min": 47.01,
            "max": 55.54,
            "night": 47.01,
            "eve": 51.96,
            "morn": 54.09
          },
          "feels_like": {
            "day": 53.13,
            "night": 53.19,
            "eve": 51.08,
            "morn": 53.19
          },
          "pressure": 1006,
          "humidity": 89,
          "dew_point": 50.7,
          "wind_speed": 14.52,
          "wind_deg": 328,
          "wind_gust": 16.69,
          "weather": [
            {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
            }
          ],
          "clouds": 98,
          "pop": 1,
          "rain": 4.23,
          "uvi": 2.24
        },
        {
          "dt": 1618588800,
          "sunrise": 1618568108,
          "sunset": 1618616155,
          "moonrise": 1618577160,
          "moonset": 0,
          "moon_phase": 0.14,
          "temp": {
            "day": 51.6,
            "min": 42.31,
            "max": 52.54,
            "night": 46.35,
            "eve": 49.19,
            "morn": 43
          },
          "feels_like": {
            "day": 48.29,
            "night": 36.54,
            "eve": 43.81,
            "morn": 36.54
          },
          "pressure": 1002,
          "humidity": 39,
          "dew_point": 27.68,
          "wind_speed": 16.26,
          "wind_deg": 315,
          "wind_gust": 17.52,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 31,
          "pop": 0.73,
          "rain": 0.92,
          "uvi": 3.65
        },
        {
          "dt": 1618675200,
          "sunrise": 1618654418,
          "sunset": 1618702618,
          "moonrise": 1618666020,
          "moonset": 1618632660,
          "moon_phase": 0.17,
          "temp": {
            "day": 52.25,
            "min": 43.11,
            "max": 54.07,
            "night": 49.96,
            "eve": 53.08,
            "morn": 43.11
          },
          "feels_like": {
            "day": 49.42,
            "night": 36.84,
            "eve": 50.34,
            "morn": 36.84
          },
          "pressure": 1009,
          "humidity": 48,
          "dew_point": 33.08,
          "wind_speed": 11.88,
          "wind_deg": 313,
          "wind_gust": 12.08,
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": 86,
          "pop": 0.12,
          "uvi": 2.87
        },
        {
          "dt": 1618761600,
          "sunrise": 1618740728,
          "sunset": 1618789081,
          "moonrise": 1618755240,
          "moonset": 1618722420,
          "moon_phase": 0.2,
          "temp": {
            "day": 53.74,
            "min": 46.81,
            "max": 55.36,
            "night": 49.15,
            "eve": 54.55,
            "morn": 46.81
          },
          "feels_like": {
            "day": 50.79,
            "night": 43.81,
            "eve": 51.73,
            "morn": 43.81
          },
          "pressure": 1011,
          "humidity": 42,
          "dew_point": 31.15,
          "wind_speed": 10.07,
          "wind_deg": 320,
          "wind_gust": 10.98,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": 60,
          "pop": 0,
          "uvi": 4.15
        },
        {
          "dt": 1618848000,
          "sunrise": 1618827040,
          "sunset": 1618875545,
          "moonrise": 1618844940,
          "moonset": 1618811880,
          "moon_phase": 0.23,
          "temp": {
            "day": 54.46,
            "min": 45.61,
            "max": 59.02,
            "night": 54.27,
            "eve": 59.02,
            "morn": 45.61
          },
          "feels_like": {
            "day": 51.96,
            "night": 42.87,
            "eve": 56.55,
            "morn": 42.87
          },
          "pressure": 1014,
          "humidity": 50,
          "dew_point": 36.09,
          "wind_speed": 6.6,
          "wind_deg": 229,
          "wind_gust": 9.13,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": 69,
          "pop": 0.22,
          "uvi": 4.19
        },
        {
          "dt": 1618934400,
          "sunrise": 1618913352,
          "sunset": 1618962008,
          "moonrise": 1618935000,
          "moonset": 1618901040,
          "moon_phase": 0.25,
          "temp": {
            "day": 59.4,
            "min": 49.51,
            "max": 63.64,
            "night": 56.93,
            "eve": 61.5,
            "morn": 49.51
          },
          "feels_like": {
            "day": 57.11,
            "night": 47.79,
            "eve": 59.47,
            "morn": 47.79
          },
          "pressure": 1019,
          "humidity": 44,
          "dew_point": 37.04,
          "wind_speed": 13.51,
          "wind_deg": 157,
          "wind_gust": 24.16,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": 3,
          "pop": 0,
          "uvi": 0.69
        },
        {
          "dt": 1619020800,
          "sunrise": 1618999665,
          "sunset": 1619048472,
          "moonrise": 1619025420,
          "moonset": 1618989840,
          "moon_phase": 0.3,
          "temp": {
            "day": 62.46,
            "min": 45.46,
            "max": 62.46,
            "night": 45.46,
            "eve": 47.12,
            "morn": 53.69
          },
          "feels_like": {
            "day": 60.94,
            "night": 51.96,
            "eve": 40.82,
            "morn": 51.96
          },
          "pressure": 1011,
          "humidity": 54,
          "dew_point": 45.52,
          "wind_speed": 19.24,
          "wind_deg": 316,
          "wind_gust": 24.02,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 92,
          "pop": 1,
          "rain": 2.45,
          "uvi": 1
        },
        {
          "dt": 1619107200,
          "sunrise": 1619085979,
          "sunset": 1619134935,
          "moonrise": 1619115960,
          "moonset": 1619078340,
          "moon_phase": 0.33,
          "temp": {
            "day": 48.85,
            "min": 38.66,
            "max": 55.76,
            "night": 50.95,
            "eve": 55.76,
            "morn": 38.66
          },
          "feels_like": {
            "day": 43.5,
            "night": 30.96,
            "eve": 52.45,
            "morn": 30.96
          },
          "pressure": 1020,
          "humidity": 32,
          "dew_point": 20.14,
          "wind_speed": 17.98,
          "wind_deg": 298,
          "wind_gust": 20.45,
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "clouds": 30,
          "pop": 0,
          "uvi": 1
        }
      ]
    };
    setHourlyData(json);
  }

  function getCurrentTime() {
    return new Date().toLocaleTimeString();
  }

  function getCurrentDate() {
    return new Date().toDateString();
  }

  function handlePress() {
    setHourlyTab(prev => !prev);
    setSevenDayTab(prev => !prev);
  }

  function displayHourlyData() {
    let currentDay = new Date().getDay();
    return hourlyData.hourly.map(hour => {
      let newDay = new Date(hour.dt * 1000);
      if(currentDay !== newDay.getDay()){
        currentDay = newDay.getDay();
        return (<>
          <Text style={[styles.weatherText, styles.hourlyDate]}>{newDay.toDateString()}</Text>
          <HourlyWeather key={hour.dt} dt={hour.dt} temp={hour.temp} description={hour.weather[0].main} longDescription={hour.weather[0].description} pop={hour.pop} wind={hour.wind_speed} feels={hour.feels_like} humidity={hour.humidity} uvi={hour.uvi}/>
        </>)
      } else {
        return <HourlyWeather key={hour.dt} dt={hour.dt} temp={hour.temp} description={hour.weather[0].main} longDescription={hour.weather[0].description} pop={hour.pop} wind={hour.wind_speed} feels={hour.feels_like} humidity={hour.humidity} uvi={hour.uvi} />
      }
    })
  }

  function displaySevenDayData() {
    return hourlyData.daily.map(day => (
      <DailyWeather key={day.dt} dt={day.dt} dayTemp={day.temp.day} nightTemp={day.temp.night} min={day.temp.min} max={day.temp.max} dayFeels={day.feels_like.day} nightFeels={day.feels_like.night} humidity={day.humidity} wind={day.wind_speed} description={day.weather[0].main} longDescription={day.weather[0].description} pop={day.pop} uvi={day.uvi} />
    ))
  }

  return (
    <ScrollView>
      <View style={styles.header}>
        <Header title='Weather App' />
      </View>
      <View style={styles.search}>
        <TextInput 
          style={styles.input} 
          placeholder="Enter city name here" 
          onChangeText={text => setText(text)} 
          defaultValue={text}
        />
        <Button
          style={styles.button}
          onPress={handleSearch}
          title='Search'
        />
      </View>
      {weatherData &&
        <View style={styles.weatherContainer}>
          <View style={styles.weatherInfoContainer}>
            <View style={styles.mainTempContainer}>
              <Text style={styles.weatherText}>As of {getCurrentTime()}</Text>
              <Text style={[styles.weatherText, styles.mainTemp]}>{weatherData.main.temp}&deg;F</Text>
              <Text style={[styles.weatherText, styles.description]}>{weatherData.weather[0].description}</Text>
            </View>
            <View style={styles.highLowContainer}>
              <Image 
                source={{
                  uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
                }}
                style={styles.image}
              />
              <Text style={[styles.weatherText, styles.highLow]}>{weatherData.main.temp_min}&deg;/{weatherData.main.temp_max}&deg;</Text>
            </View>
          </View>
          <View style={styles.moreInfoContainer}>
            <Text style={styles.weatherText}>Feels like: {weatherData.main.feels_like}&deg;F</Text>
            <Text style={styles.weatherText}>Humidity: {weatherData.main.humidity}%</Text>
            <Text style={styles.weatherText}>Wind speed: {weatherData.wind.speed}mph</Text>
          </View>
        </View>
      }
      {hourlyData &&
        <View style={styles.tabs}>
          <Text style={[styles.weatherText, styles.tab, hourlyTab && styles.selected]} onPress={handlePress}>Hourly Weather</Text>
          <Text style={[styles.weatherText, styles.tab, sevenDayTab && styles.selected]} onPress={handlePress}>7 Day Weather</Text>
        </View>
      }
      {hourlyData && hourlyTab &&
        <View style={styles.container}>
          <Text style={[styles.weatherText, styles.hourlyTitle]}>Hourly Weather</Text>
          <Text style={[styles.weatherText, styles.hourlyDate]}>{getCurrentDate()}</Text>
          {displayHourlyData()}
        </View>
      }
      {hourlyData && sevenDayTab &&
        <View style={styles.container}>
          <Text style={[styles.weatherText, styles.hourlyTitle]}>7 Day Weather</Text>
          {displaySevenDayData()}
        </View>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flex: 1,
  },
  search: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1
  },
  button: {

  },
  weatherContainer: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  weatherText: {
    color: 'white',
  },
  weatherInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  mainTempContainer: {

  },
  mainTemp: {
    fontSize: 50,
  },
  description: {
    fontWeight: 'bold',
  },
  highLowContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  highLow: {
    fontWeight: 'bold',
  },
  moreInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    textAlign: 'center',
    padding: 15,
    fontSize: 15,
    fontWeight: 'bold',
    borderColor: 'grey',
    borderWidth: 1,
  },
  selected: {
    backgroundColor: '#3c415c',
  },
  hourlyTitle: {
    fontSize: 30,
  },
  hourlyDate: {
    fontSize: 18,
    paddingTop: 15,
  }
});

export default App;
