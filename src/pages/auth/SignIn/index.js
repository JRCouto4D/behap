import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  text: {
    color: '#7159c1',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

// import { Container } from './styles';

const SignIn = () => (
  <View style={styles.container}>
    <Text style={styles.text}>SignIn</Text>
  </View>
);

export default SignIn;
