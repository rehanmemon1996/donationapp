import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Login from './screen/login'
// import SignUp from './screen/SignUp';
import Naviagations from './config/navigation';

export default function App() {
  return (

    <>
    
    <Naviagations/>
    {/* <SignUp/> */}

    
    </>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
