import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {EWeather} from '../../helpers/constants';
import Card from '../../shared/Card';
import {useDispatch, useSelector} from 'react-redux';
import {weatherInfo} from '../../redux/selectors';
import {getSelectedCitiesWeather} from '../../redux/actions/citiesWeather.action';
import {env} from '../../config';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const citiesData = [
    {
      city: 'Cordoba',
      lat: '-31.417',
      lon: '-64.183',
    },
    {
      city: 'Buenos Aires',
      lat: '-34.61315',
      lon: '-58.37723',
    },
    {
      city: 'Trelew',
      lat: '-43.24895',
      lon: '-65.30505',
    },
    {
      city: 'Formosa',
      lat: '-26.18489',
      lon: '-58.17313',
    },
    {
      city: 'Mendoza',
      lat: '-32.8903',
      lon: '-68.8472',
    },
  ];

  const [weatherBacground, setWeatherBacground] = useState(EWeather.Clear);
  const [currentTemperature, setCurrentTemperature] = useState('');
  const [currentIcon, setCurrentIcon] = useState('');
  const [selectedCity, setSelectedCity] = useState(citiesData[0]);
  const [pronostic, setPronostic] = useState([]);

  const dispatch = useDispatch();
  const weatherInfoSelector = useSelector(state => weatherInfo(state));
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getSelectedCitiesWeather(selectedCity));
  }, [selectedCity]);

  useEffect(() => {
    if (weatherInfoSelector) {
      setCurrentTemperature(weatherInfoSelector.current.temp);
      setCurrentIcon(weatherInfoSelector.current.weather[0].icon);
      const eWeatherType: keyof typeof EWeather =
        weatherInfoSelector.current.weather[0].main;
      setWeatherBacground(EWeather[eWeatherType]);

      const data = formatPronosticData(weatherInfoSelector);
      setPronostic(data);
    }
  }, [weatherInfoSelector]);

  const formatPronosticData = data => {
    const dataFormated = data.daily
      .filter((_, index: Number) => index > 0 && index < 5)
      .map((day, i: Number) => {
        const numDay = new Date(day.dt * 1000).getDay();
        const days = [
          'domingo',
          'lunes',
          'martes',
          'miércoles',
          'jueves',
          'viernes',
          'sábado',
        ];
        return {
          id: String(i),
          day: days[numDay],
          tempMin: day.temp.min,
          tempMax: day.temp.max,
          iconName: day.weather[0].icon,
        };
      });
    return dataFormated;
  };

  const renderItem = ({item}) => (
    <Card
      title={item.day}
      tempMin={item.tempMin}
      tempMax={item.tempMax}
      iconName={item.iconName}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {!currentTemperature ? (
        <ActivityIndicator size={200} />
      ) : (
        <ImageBackground
          style={styles.container}
          resizeMode="stretch"
          source={{uri: weatherBacground}}>
          <ScrollView
            style={{width: '100%'}}
            contentContainerStyle={{
              alignItems: 'center',
            }}>
            <SelectDropdown
              buttonStyle={styles.dropDown}
              buttonTextStyle={styles.dropDownButtonText}
              defaultButtonText={selectedCity.city}
              data={citiesData}
              onSelect={selectedItem => {
                setSelectedCity(selectedItem);
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem.city;
              }}
              rowTextForSelection={item => {
                return item.city;
              }}
            />

            <View style={styles.temperatureBox}>
              <Image
                source={{
                  uri: `${env.ICON_API}${currentIcon}@2x.png`,
                }}
                style={styles.iconImage}
              />
              <Text style={styles.temperatureText}>
                {Number(currentTemperature).toFixed(1)}°C
              </Text>
            </View>

            <FlatList
              data={pronostic}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
            <Pressable
              style={{margin: 50}}
              onPress={() => navigation.navigate('Construction')}>
              <Text>Ir a otra pantalla</Text>
            </Pressable>
          </ScrollView>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    flex: 1,
    alignItems: 'center',
  },
  dropDown: {
    backgroundColor: undefined,
    marginVertical: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ffffff',
  },
  dropDownButtonText: {
    color: '#ffffff',
  },
  temperatureBox: {
    backgroundColor: '#000000',
    opacity: 0.7,
    marginVertical: 30,
    padding: 20,
    alignItems: 'center',
    borderRadius: 20,
  },
  temperatureText: {
    fontSize: 60,
    color: '#ffffff',
  },
  iconImage: {width: 100, height: 100},
});
