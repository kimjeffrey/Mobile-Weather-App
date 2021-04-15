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
import Header from './components/Header'

const App = () => {
  const [text, setText] = useState("");
  const [weatherData, setWeatherData] = useState();

  async function handleSearch() {
    let cityName = text.split(' ').join('%20');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHERMAP_APP_ID}&units=imperial`;
    let res = await fetch(url);
    let json = await res.json();
    setWeatherData(json);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
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
          <Image 
            source={{
              uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
            }}
            style={styles.image}
          />
          <Text style={styles.weatherText}>Temp: {weatherData.main.temp}&deg;F</Text>
          <Text style={styles.weatherText}>Feels like: {weatherData.main.feels_like}&deg;F</Text>
          <Text style={styles.weatherText}>Humidity: {weatherData.main.humidity}%</Text>
          <Text style={styles.weatherText}>Description: {weatherData.weather[0].description}</Text>
          <Text style={styles.weatherText}>Wind speed: {weatherData.wind.speed}mph</Text>
        </View>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
  weatherText: {
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default App;
