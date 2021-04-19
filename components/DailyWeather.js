import React, {useState} from 'react';
import {
  Appearance,
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const DailyWeather = ({dt, dayTemp, nightTemp, description, pop, wind, dayFeels, nightFeels, humidity, uvi}) => {
  const colorScheme = Appearance.getColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;

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

  function getDay() {
    let date = new Date(dt * 1000);
    return date.toDateString().slice(0, 3) + ' ' + date.getDate();
  }

  return (
    <>
    <View>
      <TouchableOpacity style={styles.hourlyInfoContainer} onPress={handleClick}>
        <Text style={[themeTextStyle, styles.hour]}>{getDay()}</Text>
        <Text style={[themeTextStyle, styles.temp]}>{Math.round(dayTemp)}&deg;/{Math.round(nightTemp)}&deg;</Text>
        <Text style={[themeTextStyle, styles.description]}>{description}</Text>
        <Text style={themeTextStyle}>{Math.round(pop * 100)}%</Text>
        <Text style={themeTextStyle}>{Math.round(wind)}mph</Text>
        <Text style={[themeTextStyle, styles.moreInfoButton]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
    {displayMore &&
      <View style={styles.moreInfo}>
        <View>
          <Text style={themeTextStyle}>Feels Like </Text>
          <Text style={themeTextStyle}>{Math.round(dayFeels)}&deg;/{Math.round(nightFeels)}&deg;</Text>
        </View>
        <View>
          <Text style={themeTextStyle}>Humidity </Text>
          <Text style={themeTextStyle}>{humidity}%</Text>
        </View>
        <View>
          <Text style={themeTextStyle}>UV Index </Text>
          <Text style={themeTextStyle}>{uvi} of 10</Text>
        </View>
      </View>
    }
    </>
  );
};

const styles = StyleSheet.create({
  lightThemeText: {
    flex: 1,
    color: 'black',
  },
  darkThemeText: {
    flex: 1,
    color: 'white',
  },
  hourlyInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'grey',
    borderBottomWidth: 1,
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
