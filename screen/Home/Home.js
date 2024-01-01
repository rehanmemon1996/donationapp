import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
// import ImageSliders from '../imageSlider';
// import ImageSliders from '../imageSlider';
import ImageSliders from '../ImageSliders';
import CardData from '../Card';

const Home = ({navigation}) => {
  return (
    <View style={styles.contanar}>
    <Text>home</Text>

    
{/* <ImageSliders/> */}
<ImageSliders/>
<CardData/>
   
   </View>
  );
};

const styles= StyleSheet.create({
  contanar:{
    flex:1
  }
})

export default Home;
