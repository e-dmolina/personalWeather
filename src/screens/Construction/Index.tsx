import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Construction = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Pantalla en construcción</Text>
    </SafeAreaView>
  );
};

export default Construction;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
