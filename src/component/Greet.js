import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Greet = () => {
  return (
    <View style={styles.greet}>
      <Text style={styles.text}>Hello welcome to CI/CD for React Native Course</Text>
    </View>
  );
};

export default Greet;

const styles = StyleSheet.create({
  greet: {
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: '#000', fontSize: 20, fontWeight: '700'},
});
