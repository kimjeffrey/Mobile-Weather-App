import React, {useState} from 'react';
import {
  Appearance,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const HourlyWeather = ({dt, temp, description, pop, wind, feels, humidity, uvi}) => {
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

  function getHour() {
    let hour = new Date(dt * 1000).getHours();
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

  return (
    <>
    <View>
      <TouchableOpacity style={styles.hourlyInfoContainer} onPress={handleClick}> 
        <Text style={[themeTextStyle, styles.hour]}>{getHour()}</Text>
        <Text style={[themeTextStyle, styles.temp]}>{Math.round(temp)}&deg;</Text>
        <Text style={[themeTextStyle, styles.description]}>{description}</Text>
        <Text style={[themeTextStyle, styles.pop]}>
          {Math.round(pop * 100)}%
        </Text>
        <Text style={themeTextStyle}>{Math.round(wind)}mph</Text>
        <Text style={[themeTextStyle, styles.moreInfoButton]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
    {displayMore &&
      <View style={styles.moreInfo}>
        <View>
          <Text style={themeTextStyle}>Feels Like </Text>
          <Text style={themeTextStyle}>{Math.round(feels)}&deg;</Text>
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
  hourlyInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  lightThemeText: {
    flex: 1,
    color: 'black',
  },
  darkThemeText: {
    flex: 1,
    color: 'white',
  },
  hour: {
    flex: .8,
  },
  temp: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    flex: 1.5,
  },
  pop: {
    flex: .7,
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

export default HourlyWeather;
