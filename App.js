/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  Alert,
  Appearance,
  Button,
  Image,
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WEATHERMAP_APP_ID} from '@env';
import Header from './components/Header';
import HourlyWeather from './components/HourlyWeather';
import DailyWeather from './components/DailyWeather';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeTabStyle = colorScheme === 'light' ? styles.lightThemeSelected : styles.darkThemeSelected;

  const [text, setText] = useState("");
  const [savedText, setSavedText] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [hourlyData, setHourlyData] = useState();
  const [hourlyTab, setHourlyTab] = useState(true);
  const [sevenDayTab, setSevenDayTab] = useState(false);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    if(text !== "") {
      handleSearch();
    }
  }, [savedText])

  useEffect(() => {
    if(lat !== null && lon !== null ){
      getHourlyData();
    }
  }, [lat, lon])

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('search', value)
    } catch (e) {
      console.log(e);
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('search')
      if(value !== null) {
        setText(value);
        setSavedText(value);
      }
    } catch(e) {
      console.log(e);
    }
  }

  function displayToast(message) {
    if(Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert(
        "Error",
        message,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
  }

  async function handleSearch() {
    if(text === "") {
      displayToast("Please enter city name or zip code");
      return;
    }
    storeData(text);
    let url = '';
    if(isNaN(text)){
      let cityName = text.trim().split(' ').join('%20');
      url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHERMAP_APP_ID}&units=imperial`;
    } else {
      let number = text.trim();
      url = `https://api.openweathermap.org/data/2.5/weather?zip=${number}&appid=${WEATHERMAP_APP_ID}&units=imperial`;
    }
    let res = await fetch(url);
    let json = await res.json();

    if(json.cod === "404") {
      displayToast(`Error: ${json.message}`);
    } else {
      setWeatherData(json);
      setLat(json.coord.lat);
      setLon(json.coord.lon);
    }    
  }

  async function getHourlyData() {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${WEATHERMAP_APP_ID}&units=imperial`;
    let res = await fetch(url);
    let json = await res.json();

    setHourlyData(json);
  }

  function getCurrentTime() {
    return new Date().toLocaleTimeString();
  }

  function getCurrentDate() {
    return new Date().toDateString();
  }

  function handleHourlyPress() {
    if(!hourlyTab) {
      setHourlyTab(prev => !prev);
      setSevenDayTab(prev => !prev);
    }
  }

  function handleSevenPress() {
    if(!sevenDayTab){
      setHourlyTab(prev => !prev);
      setSevenDayTab(prev => !prev);
    }
  }

  function displayHourlyData() {
    let currentDay = new Date().getDay();
    return hourlyData.hourly.map(hour => {
      let newDay = new Date(hour.dt * 1000);
      if(currentDay !== newDay.getDay()){
        currentDay = newDay.getDay();
        return (<React.Fragment key={hour.dt}>
          <Text style={[themeTextStyle, styles.hourlyDate]}>{newDay.toDateString()}</Text>
          <HourlyWeather dt={hour.dt} temp={hour.temp} description={hour.weather[0].main} pop={hour.pop} wind={hour.wind_speed} feels={hour.feels_like} humidity={hour.humidity} uvi={hour.uvi}/>
        </React.Fragment>)
      } else {
        return <HourlyWeather key={hour.dt} dt={hour.dt} temp={hour.temp} description={hour.weather[0].main} pop={hour.pop} wind={hour.wind_speed} feels={hour.feels_like} humidity={hour.humidity} uvi={hour.uvi} />
      }
    })
  }

  function displaySevenDayData() {
    return hourlyData.daily.map(day => (
      <DailyWeather key={day.dt} dt={day.dt} maxTemp={day.temp.max} minTemp={day.temp.min} dayFeels={day.feels_like.day} nightFeels={day.feels_like.night} humidity={day.humidity} wind={day.wind_speed} description={day.weather[0].main} pop={day.pop} uvi={day.uvi} />
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
          placeholder="Enter city name or zip code" 
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
              <Text style={themeTextStyle}>As of {getCurrentTime()}</Text>
              <Text style={[themeTextStyle, styles.mainTemp]}>{weatherData.main.temp}&deg;F</Text>
              <Text style={[themeTextStyle, styles.description]}>{weatherData.weather[0].description}</Text>
            </View>
            <View style={styles.highLowContainer}>
              <Image 
                source={{
                  uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
                }}
                style={styles.image}
              />
              <Text style={[themeTextStyle, styles.highLow]}>{weatherData.main.temp_max}&deg;/{weatherData.main.temp_min}&deg;</Text>
            </View>
          </View>
          <View style={styles.moreInfoContainer}>
            <Text style={themeTextStyle}>Feels like: {weatherData.main.feels_like}&deg;F</Text>
            <Text style={themeTextStyle}>Humidity: {weatherData.main.humidity}%</Text>
            <Text style={themeTextStyle}>Wind speed: {weatherData.wind.speed}mph</Text>
          </View>
        </View>
      }
      {hourlyData &&
        <View style={styles.tabs}>
          <Text style={[themeTextStyle, styles.tab, hourlyTab && themeTabStyle]} onPress={handleHourlyPress}>Hourly Weather</Text>
          <Text style={[themeTextStyle, styles.tab, sevenDayTab && themeTabStyle]} onPress={handleSevenPress}>7 Day Weather</Text>
        </View>
      }
      {hourlyData && hourlyTab &&
        <View style={styles.container}>
          <Text style={[themeTextStyle, styles.hourlyTitle]}>Hourly Weather</Text>
          <Text style={[themeTextStyle, styles.hourlyDate]}>{getCurrentDate()}</Text>
          {displayHourlyData()}
        </View>
      }
      {hourlyData && sevenDayTab &&
        <View style={styles.container}>
          <Text style={[themeTextStyle, styles.hourlyTitle]}>7 Day Weather</Text>
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
  error: {
    padding: 15,
    alignItems: 'center',
  },  
  errorText: {
    fontSize: 20,
    color: 'white',
  },  
  weatherContainer: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  lightThemeText: {
    color: 'black',
  },
  darkThemeText: {
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
  lightThemeSelected: {
    backgroundColor: '#a799b7',
  },
  darkThemeSelected: {
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
