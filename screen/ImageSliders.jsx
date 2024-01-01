// const images = [
//   'https://th.bing.com/th/id/OIP.Ir44CNrTIxQRlK6mZxshAQHaE7?rs=1&pid=ImgDetMain',
//   'https://th.bing.com/th/id/OIP.Ir44CNrTIxQRlK6mZxshAQHaE7?rs=1&pid=ImgDetMain',
//   'https://th.bing.com/th/id/OIP.Ir44CNrTIxQRlK6mZxshAQHaE7?rs=1&pid=ImgDetMain',
// ];
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import ImageSlider from 'react-native-image-slider';

const ImageSliders = () => {
  const images = [
    'https://th.bing.com/th/id/OIP.Ir44CNrTIxQRlK6mZxshAQHaE7?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.Ir44CNrTIxQRlK6mZxshAQHaE7?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.Ir44CNrTIxQRlK6mZxshAQHaE7?rs=1&pid=ImgDetMain',
   
  ];

  const screenHeight = Dimensions.get('window').height;
  const sliderHeight = screenHeight * 0.3; // Set the slider height to 30% of the screen height

  return (
    <View style={styles.container}>
      <ImageSlider
        style={{ height: sliderHeight }}
        showsPagination={false}
        loopBothSides
        autoPlayWithInterval={2000}
        images={images.map((image) => ({ uri: image }))}
        customSlide={({ index, item, style, width }) => (
          <View key={index} style={[style, styles.customSlide]}>
            <Image source={{ uri: item.uri }} style={styles.customImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:'200px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customSlide: {
    backgroundColor: 'transparent',
  },
  customImage: {
    width: '100%',
    height: '200px',
    resizeMode: 'cover', // or 'contain' based on your preference
  },
});

export default ImageSliders;
