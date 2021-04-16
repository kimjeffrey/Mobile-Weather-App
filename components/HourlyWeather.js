import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const Header = ({dt, temp, description, pop, wind, feels, humidity, uvi}) => {
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

  return (
    <>
    <View style={styles.hourlyInfoContainer}>
      <Text style={[styles.weatherText, styles.hour]}>{new Date(dt * 1000).getHours()}</Text>
      <Text style={[styles.weatherText, styles.temp]}>{Math.round(temp)}&deg;</Text>
      <Text style={[styles.weatherText, styles.description]}>{description}</Text>
      <Text style={styles.weatherText}>{Math.round(pop * 100)}%</Text>
      <Text style={styles.weatherText}>{Math.round(wind)}mph</Text>
      <Text style={[styles.weatherText, styles.moreInfoButton]} onPress={handleClick}>{buttonText}</Text>
    </View>
    {displayMore &&
      <View style={styles.moreInfo}>
        <View>
          <Text style={styles.weatherText}>Feels Like </Text>
          <Text style={styles.weatherText}>{Math.round(feels)}&deg;</Text>
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
    flex: .5,
  },
  temp: {
    flex: .8,
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

export default Header;
