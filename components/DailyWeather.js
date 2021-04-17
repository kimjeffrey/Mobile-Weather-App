import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const DailyWeather = ({dt, dayTemp, nightTemp, description, pop, wind, dayFeels, nightFeels, humidity, uvi}) => {
  const [displayMore, setDisplayMore] = useState(false);
  const [buttonText, setButtonText] = useState("ᐯ");

  function handleClick() {
    setDisplayMore(prev => !prev);
    setButtonText(prev => {
      if(prev === "ᐯ") {
        return "ᐱ";
      } else if(prev === "ᐱ") {
        return "ᐯ";
      }
    });
  }

  function getHour() {
    let hour = new Date(dt * 1000).getDate();
    if(hour > 12) {
      return hour - 12 + " pm"
    } else if(hour === 12) {
      return "12 pm"
    } else if(hour === 0) {
      return "12 am"
    } else {
      return hour + " am"
    }
  }

  function getDay() {
    let date = new Date(dt * 1000);
    return date.toDateString().slice(0, 3) + ' ' + date.getDate();
  }

  return (
    <>
    <View>
      <TouchableOpacity style={styles.hourlyInfoContainer} onPress={handleClick}>
        <Text style={[styles.weatherText, styles.hour]}>{getDay()}</Text>
        <Text style={[styles.weatherText, styles.temp]}>{Math.round(dayTemp)}&deg;/{Math.round(nightTemp)}&deg;</Text>
        <Text style={[styles.weatherText, styles.description]}>{description}</Text>
        <Text style={styles.weatherText}>{Math.round(pop * 100)}%</Text>
        <Text style={styles.weatherText}>{Math.round(wind)}mph</Text>
        <Text style={[styles.weatherText, styles.moreInfoButton]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
    {displayMore &&
      <View style={styles.moreInfo}>
        <View>
          <Text style={styles.weatherText}>Feels Like </Text>
          <Text style={styles.weatherText}>{Math.round(dayFeels)}&deg;/{Math.round(nightFeels)}&deg;</Text>
        </View>
        <View>
          <Text style={styles.weatherText}>Humidity </Text>
          <Text style={styles.weatherText}>{humidity}%</Text>
        </View>
        <View>
          <Text style={styles.weatherText}>UV Index </Text>
          <Text style={styles.weatherText}>{uvi} of 10</Text>
        </View>
      </View>
    }
    </>
  );
};

const styles = StyleSheet.create({
  hourlyInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  weatherText: {
    flex: 1,
    color: 'white',
  },
  hour: {
    flex: 1,
  },
  temp: {
    flex: 1.4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    flex: 1.5,
  },
  moreInfoButton: {
    flex: .5,
  },
  moreInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderColor: 'grey',
    borderBottomWidth: 1,
  }
});

export default DailyWeather;
