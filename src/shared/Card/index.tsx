import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {env} from '../../config';

interface ICardProps {
  title: string;
  tempMin: string;
  tempMax: string;
  iconName: string;
}

const Card = ({title, tempMin, tempMax, iconName}: ICardProps) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 15, color: '#ffffff'}}>{title}</Text>
      <View>
        <Image
          source={{
            uri: `${env.ICON_API}${iconName}@2x.png`,
          }}
          style={{width: 100, height: 100}}
        />
        <Text style={styles.tempText}>{Math.round(Number(tempMin))}°C</Text>
        <Text style={styles.tempText}>{Math.round(Number(tempMax))}°C</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    opacity: 0.7,
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
  },
  tempText: {fontSize: 15, color: '#ffffff', textAlign: 'center'},
});
