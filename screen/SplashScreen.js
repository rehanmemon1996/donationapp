// SplashScreen.js
import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Simulate an asynchronous task, like loading data or making an API call
    const loadData = async () => {
      // Add any asynchronous tasks here

      // Navigate to the main screen or any other screen after a delay
      setTimeout(() => {
        navigation.replace('Login'); // Replace with your main screen name
      }, 2000); // Adjust the delay time as needed
    };

    loadData();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Empower Change, Spark Hope</Text>
      <Image
        source={require('../assets/splashscreen.png')} // Replace with your splash image
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

export default SplashScreen;
